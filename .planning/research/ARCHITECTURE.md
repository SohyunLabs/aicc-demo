# Architecture Patterns: AICC SaaS

**Domain:** AI Contact Center SaaS (보이스봇 + Agent Assist)
**Researched:** 2026-03-31
**Overall Confidence:** MEDIUM (web research tools unavailable; based on established industry patterns from AWS Connect, Google CCAI, Genesys Cloud, and general real-time voice/LLM architecture best practices)

---

## Recommended Architecture

### High-Level System Topology

```
                         +-----------------------+
                         |   Load Balancer /      |
                         |   API Gateway          |
                         +-----------+-----------+
                                     |
              +----------------------+----------------------+
              |                      |                      |
    +---------v--------+  +---------v--------+  +---------v--------+
    |  Voicebot Core   |  |  Agent Assist    |  |  Admin Console   |
    |  (Voice Channel) |  |  (Real-time UI)  |  |  + Onboarding    |
    +--------+---------+  +--------+---------+  +--------+---------+
             |                     |                      |
    +--------v---------+  +-------v--------+   +---------v--------+
    | Voice Pipeline   |  | Streaming Hub  |   | Tenant Mgmt      |
    | STT -> LLM -> TTS|  | (WebSocket)    |   | + Billing SVC    |
    +--------+---------+  +-------+--------+   +---------+--------+
             |                    |                       |
             +----------+---------+-----------+-----------+
                        |                     |
              +---------v--------+  +---------v--------+
              |  Knowledge Layer |  |  Data Platform   |
              |  Hybrid RAG     |  |  (per-tenant)    |
              |  ES + Neo4j     |  |  Analytics, Logs |
              +-----------------+  +------------------+
```

### Component Boundaries

| Component | Responsibility | Communicates With | Deployment |
|-----------|---------------|-------------------|------------|
| **Voice Gateway** | SIP/WebRTC 연결, 오디오 스트림 수신/송신 | Telephony (PSTN/SIP), Voice Pipeline | Dedicated pods (stateful) |
| **Voice Pipeline** | STT -> NLU -> LLM -> TTS 실시간 처리 | Voice Gateway, Knowledge Layer, Agent Assist Hub | Stateless workers + GPU nodes |
| **Knowledge Layer (Hybrid RAG)** | ES 시맨틱 검색 + Neo4j KG 기반 출처 추적 답변 생성 | Voice Pipeline, Agent Assist, Admin Console | Shared cluster (tenant-scoped index) |
| **Agent Assist Hub** | 실시간 통화 전사, 추천 응답, 감정 분석 스트리밍 | Voice Pipeline, Knowledge Layer, Agent Assist UI | WebSocket Gateway + Worker pools |
| **Agent Assist UI** | 상담원 실시간 보조 화면 (React) | Agent Assist Hub (WebSocket) | CDN-served SPA |
| **Admin Console** | 프롬프트/토픽/품질 관리, 대시보드, AX PM | Knowledge Layer, Data Platform, Tenant Mgmt | Next.js SSR |
| **Onboarding Service** | 고객사 셀프 프로비저닝, 지식베이스 업로드, 테스트 통화 | Tenant Mgmt, Knowledge Layer, Billing | Serverless functions |
| **Tenant Management** | 테넌트 CRUD, 설정, 기능 플래그, 사용량 추적 | All services (config provider) | Microservice |
| **Billing Service** | 사용량 기반 과금, 요금제 관리, 청구서 | Tenant Mgmt, Data Platform | Microservice |
| **Data Platform** | 통화 로그, 분석, 리포팅, 녹음 저장 | All services (event consumer) | Event-driven (Kafka -> OLAP) |

---

## 1. Real-Time Voice Processing Architecture

### STT -> LLM -> TTS Pipeline

이것이 AICC 시스템의 가장 핵심이자 가장 까다로운 부분이다. 전체 응답 지연(End-to-End Latency)이 2초를 넘으면 사용자가 "끊겼나?" 라고 느끼므로, **streaming-first 설계**가 필수다.

**Confidence: HIGH** (이 패턴은 AWS Connect, Google CCAI, Twilio 등 모든 주요 CCAI 플랫폼에서 동일하게 사용)

```
사용자 음성 입력
    |
    v
[Voice Gateway] --- WebRTC/SIP --- PSTN
    |
    | (오디오 청크 스트리밍, 20ms 프레임)
    v
[STT Engine] --- Streaming Recognition
    |
    | (partial transcript, isFinal flag)
    v
[Utterance Detector] --- VAD + Endpointing
    |
    | (완성된 발화 텍스트)
    v
[Intent Router] --- 토픽 분류 + 슬롯 추출
    |
    +--- 단순 FAQ ----> [Knowledge Layer] --- RAG 검색 + 답변
    |                         |
    +--- 복잡 질문 ---> [LLM Orchestrator] --- 프롬프트 조합 + 스트리밍 생성
    |                         |
    v                         v
[Response Composer] <--- 답변 텍스트 (스트리밍)
    |
    | (문장 단위 청킹)
    v
[TTS Engine] --- Streaming Synthesis
    |
    | (오디오 청크)
    v
[Voice Gateway] --- 사용자에게 재생
```

### 핵심 설계 원칙

#### 1-1. Streaming 전구간 적용

| 구간 | 스트리밍 방식 | 지연 목표 |
|------|-------------|----------|
| 음성 -> STT | gRPC bidirectional streaming (16kHz, 20ms 프레임) | < 300ms (partial result) |
| STT -> LLM | 발화 완료 즉시 트리거 (endpointing) | < 100ms (라우팅) |
| LLM 추론 | Token streaming (SSE/gRPC) | First token < 500ms |
| LLM -> TTS | **문장 단위 청킹** - 첫 문장 완성 즉시 TTS 시작 | < 200ms (첫 문장) |
| TTS -> 재생 | 오디오 버퍼 스트리밍 | < 200ms |
| **총 E2E** | | **< 1.5초 (목표)** |

#### 1-2. Sentence-Level Chunking (LLM -> TTS 핵심 최적화)

LLM이 전체 응답을 생성할 때까지 기다리지 않는다. **첫 번째 문장이 완성되면 즉시 TTS로 전달**한다.

```
LLM Output Stream: "네, | 해당 | 보험 | 상품은 | 만기 | 환급형입니다. | 월 | 납입 | 보험료는..."
                                                        ^
                                                   여기서 TTS 시작
                                                   (마침표 감지)
```

구현 패턴:
- LLM 토큰 스트림에서 문장 종결 감지 (마침표, 물음표, 느낌표)
- 한국어 특수: 문장 종결 어미 패턴 감지 ("~입니다", "~합니다", "~세요")
- 첫 문장 -> TTS 인스턴스 1, 두 번째 문장 -> TTS 인스턴스 2 (파이프라인 병렬화)

#### 1-3. Barge-In (끼어들기) 처리

사용자가 봇 응답 중간에 말을 시작하면 즉시 응답을 중단해야 한다.

```
상태 관리:
- LISTENING: 사용자 발화 대기
- PROCESSING: STT -> LLM 처리 중
- SPEAKING: TTS 재생 중
- INTERRUPTED: 사용자 끼어들기 감지 -> 즉시 LISTENING으로 전환

구현:
1. Voice Gateway에서 VAD(Voice Activity Detection) 상시 실행
2. SPEAKING 상태에서 사용자 음성 감지 시:
   - TTS 재생 즉시 중단
   - 현재 LLM 생성 취소 (abort signal)
   - 새 STT 세션 시작
```

#### 1-4. Voice Gateway 선택

| 옵션 | 적합 시나리오 | 비고 |
|------|-------------|------|
| **FreeSWITCH + Custom** | 기존 보유 엔진 확장 시 | 한국 통신사 연동 유연 |
| **Twilio Media Streams** | 글로벌 확장 우선 시 | WebSocket으로 오디오 수신, 한국 번호 제한적 |
| **Amazon Chime SDK** | AWS 풀스택 시 | PSTN 연동 내장 |
| **자체 WebRTC Gateway** | 웹 기반 소프트폰 전용 시 | PSTN 불필요한 경우 |

**권장:** 한국 시장 우선이므로 **FreeSWITCH 기반 자체 게이트웨이** (기존 구축 경험 활용) + 글로벌 확장 시 Twilio 어댑터 추가.

---

## 2. Agent Assist Streaming Architecture

### 실시간 데이터 흐름

Agent Assist는 "통화 중인 상담원에게 실시간으로 정보를 제공"하는 것이므로, **저지연 양방향 통신**이 핵심이다.

**Confidence: HIGH** (Google CCAI Agent Assist, Genesys Agent Copilot, Five9 AI Agent Assist 모두 동일 패턴)

```
[Voice Pipeline]
    |
    | (실시간 전사 텍스트, 이벤트)
    v
[Agent Assist Hub] -----> [Knowledge Layer]
    |       ^                    |
    |       |                    | (RAG 검색 결과)
    |       +--------------------+
    |
    | WebSocket (bidirectional)
    v
[Agent Assist UI - 상담원 브라우저]
    +-- 실시간 전사 패널
    +-- 추천 응답 카드
    +-- 고객 정보 사이드바
    +-- 감정 분석 게이지
    +-- 컴플라이언스 알림
```

### 2-1. WebSocket vs SSE 선택

| 기준 | WebSocket | SSE (Server-Sent Events) |
|------|-----------|--------------------------|
| 방향 | 양방향 | 서버 -> 클라이언트 단방향 |
| 상담원 액션 전송 | 네이티브 지원 | 별도 REST API 필요 |
| 연결 관리 | 복잡 (heartbeat, reconnect) | 브라우저 자동 재연결 |
| 프록시/방화벽 | 일부 차단 가능 | HTTP 기반이라 통과 용이 |
| 다중 이벤트 타입 | 커스텀 프로토콜 필요 | event 필드로 구분 가능 |

**권장: WebSocket을 메인으로 사용.**

이유:
1. 상담원이 "추천 응답 선택", "통화 메모 입력", "에스컬레이션" 등 **서버로 보내는 이벤트가 빈번**
2. 통화 상태 동기화가 양방향이어야 함
3. SSE fallback은 방화벽 문제 대비용으로 구현해두되, 기본은 WebSocket

### 2-2. WebSocket 메시지 프로토콜 설계

```typescript
// Server -> Agent (실시간 스트리밍)
interface AgentAssistEvent {
  type:
    | 'transcript.partial'      // 실시간 부분 전사
    | 'transcript.final'        // 확정 전사
    | 'suggestion.new'          // 새 추천 응답
    | 'suggestion.update'       // 추천 응답 업데이트 (스트리밍)
    | 'sentiment.update'        // 감정 분석 변화
    | 'compliance.alert'        // 컴플라이언스 위반 감지
    | 'customer.context'        // 고객 컨텍스트 업데이트
    | 'call.status'             // 통화 상태 변경
  callId: string;
  tenantId: string;
  timestamp: number;
  payload: Record<string, unknown>;
}

// Agent -> Server (상담원 액션)
interface AgentAction {
  type:
    | 'suggestion.accept'       // 추천 응답 채택
    | 'suggestion.dismiss'      // 추천 응답 무시
    | 'note.add'                // 통화 메모 추가
    | 'escalation.request'      // 에스컬레이션 요청
    | 'disposition.set'         // 통화 처리 결과 설정
  callId: string;
  payload: Record<string, unknown>;
}
```

### 2-3. Agent Assist Hub 내부 구조

```
[Voice Pipeline] ---(gRPC stream)---> [Transcript Dispatcher]
                                            |
                    +-----------------------+-----------------------+
                    |                       |                       |
            [Suggestion Engine]    [Sentiment Analyzer]    [Compliance Checker]
                    |                       |                       |
                    | (비동기 처리)          | (실시간)              | (실시간)
                    v                       v                       v
            [Knowledge Layer]       [감정 모델 추론]        [규칙 엔진 체크]
                    |                       |                       |
                    +-----------------------+-----------------------+
                                            |
                                    [Event Aggregator]
                                            |
                                    [WebSocket Gateway]
                                            |
                                    [Agent Browser]
```

**핵심 설계:**
- **Transcript Dispatcher**가 실시간 전사를 여러 소비자에게 fan-out
- **Suggestion Engine**은 비동기 (RAG 검색 시간 필요, 1-3초 허용)
- **Sentiment/Compliance**는 동기적 실시간 (< 200ms)
- **Event Aggregator**가 각 소비자 결과를 통합해 WebSocket으로 전송
- 이벤트 우선순위: compliance alert > sentiment > suggestion

### 2-4. Connection Management

```
상담원 로그인
    |
    v
[HTTP] POST /api/agent/session --- 세션 생성 + JWT 발급
    |
    v
[WebSocket] wss://assist.example.com/ws?token=JWT
    |
    v
[Heartbeat] 매 30초 ping/pong
    |
    +--- 통화 시작 이벤트 수신 --> 해당 callId 구독
    |
    +--- 통화 종료 이벤트 수신 --> callId 구독 해제
    |
    +--- 연결 끊김 --> 자동 재연결 + 마지막 수신 이벤트부터 replay
```

---

## 3. Multi-Tenancy Data Isolation

### 격리 전략 선택

**Confidence: HIGH** (SaaS 멀티테넌시는 매우 성숙한 패턴)

| 전략 | 격리 수준 | 비용 효율 | 적합 대상 |
|------|----------|----------|----------|
| **Database-per-Tenant** | 최고 | 낮음 | 엔터프라이즈 (금융/보험 대기업) |
| **Schema-per-Tenant** | 높음 | 중간 | 중견 기업 |
| **Shared Schema + Row-Level** | 보통 | 최고 | SMB, 셀프서비스 |

**권장: 하이브리드 전략**

금융/보험 타겟이므로 **데이터 규정 준수가 최우선**이지만, SaaS 확장성도 필요하다.

```
Tier 1 (Enterprise): Database-per-Tenant
  - 금융/보험 대기업
  - 전용 DB 인스턴스
  - 전용 ES 인덱스 + Neo4j 데이터베이스
  - 녹음 파일 전용 S3 버킷
  - 규정 준수 감사 로그

Tier 2 (Standard): Schema-per-Tenant
  - 중견 기업
  - 공유 DB 인스턴스, 테넌트별 스키마
  - ES 인덱스 프리픽스 격리
  - 공유 S3 버킷 + 테넌트 프리픽스

Tier 3 (Starter): Shared Schema + Row-Level Security
  - 소규모 / 셀프 온보딩 고객
  - tenant_id 컬럼 기반 격리
  - PostgreSQL RLS (Row-Level Security) 활용
  - 공유 ES 인덱스 + tenant_id 필터
```

### 3-1. Tenant Context Propagation

모든 서비스 호출에서 tenant context가 전파되어야 한다.

```
[API Gateway]
    |
    | (JWT에서 tenant_id 추출)
    v
[Tenant Context Middleware]
    |
    | (X-Tenant-ID 헤더 주입)
    v
[각 마이크로서비스]
    |
    | (tenant_id 기반 데이터소스 라우팅)
    v
[Database / ES / Neo4j]
    |
    | (tenant-scoped 쿼리)
```

**구현 핵심:**
- **API Gateway 레벨**: JWT 토큰에 tenantId 포함, 모든 요청에서 검증
- **서비스 레벨**: Tenant-aware repository 패턴 (모든 쿼리에 자동으로 tenant 필터 적용)
- **데이터 레벨**: PostgreSQL RLS 정책, ES 인덱스 프리픽스, Neo4j 라벨/프로퍼티 필터
- **인프라 레벨**: 녹음 파일은 `s3://{bucket}/{tenant_id}/recordings/` 경로 격리

### 3-2. Knowledge Layer 멀티테넌시

Hybrid RAG가 핵심 차별점이므로, 지식베이스 격리가 특히 중요하다.

```
Elasticsearch:
  - Enterprise: 전용 인덱스 (tenant_abc_knowledge, tenant_abc_faq)
  - Standard:   프리픽스 인덱스 (std_tenant_abc_knowledge)
  - Starter:    공유 인덱스 + tenant_id 필터링

Neo4j:
  - Enterprise: 전용 데이터베이스 (Neo4j 5+ multi-database)
  - Standard:   공유 DB + 테넌트 라벨 ((:Tenant_ABC:Product))
  - Starter:    공유 DB + tenant_id 프로퍼티 필터

LLM 프롬프트:
  - 테넌트별 시스템 프롬프트 템플릿
  - 테넌트별 금지어/필수어 목록
  - 테넌트별 톤앤매너 설정
```

### 3-3. 리소스 격리 및 Rate Limiting

```
[Tenant Config]
  |
  +-- voicebot_concurrent_calls: 50   (동시 통화 수)
  +-- agent_assist_seats: 100         (상담원 좌석 수)
  +-- llm_tokens_per_minute: 100000   (LLM 토큰 제한)
  +-- storage_gb: 500                 (녹음 스토리지)
  +-- knowledge_docs: 10000           (지식베이스 문서 수)

[Rate Limiter] -- per-tenant token bucket
  |
  +-- API calls: sliding window
  +-- LLM tokens: token bucket
  +-- Concurrent calls: semaphore
```

---

## 4. Data Flow Architecture

### 4-1. 인바운드 통화 전체 흐름

```
1. PSTN/SIP 착신
   └─> Voice Gateway: SIP INVITE 수락, RTP 스트림 수립

2. 오디오 스트리밍 시작
   └─> STT Engine: gRPC bidirectional stream 개시
   └─> Agent Assist Hub: 해당 통화 구독 알림 (상담원 배정 시)

3. 사용자 발화 감지 (VAD)
   └─> STT partial results -> Agent Assist (실시간 전사)
   └─> STT final result -> Intent Router

4. Intent 분류
   ├─> 단순 FAQ: Knowledge Layer 직접 검색 -> 답변
   ├─> 복잡 질문: LLM Orchestrator
   │     └─> Hybrid RAG 검색 (ES + Neo4j)
   │     └─> 컨텍스트 조합 + LLM 생성
   │     └─> 출처 추적 메타데이터 첨부
   └─> 상담원 연결 요청: ACD(Automatic Call Distribution)으로 전환

5. 응답 생성 (스트리밍)
   └─> Sentence chunking -> TTS -> 오디오 스트림 재생
   └─> Agent Assist: 봇 응답도 상담원 화면에 표시

6. 통화 종료
   └─> 통화 요약 자동 생성 (LLM)
   └─> 녹음 저장 (S3/Object Storage)
   └─> 사용량 메트릭 기록 (Billing)
   └─> 통화 로그 + 전사 저장 (Data Platform)
```

### 4-2. Event-Driven Data Platform

```
[모든 서비스] ---> [Event Bus (Kafka/Redis Streams)]
                        |
          +-------------+-------------+
          |             |             |
    [Analytics       [Billing      [Audit Log
     Pipeline]       Consumer]     Consumer]
          |             |             |
    [ClickHouse/    [Usage DB]    [Immutable
     BigQuery]                    Audit Store]
          |
    [Dashboard
     Aggregation]
```

**이벤트 종류:**
- `call.started`, `call.ended`, `call.transferred`
- `voicebot.response.generated`, `voicebot.fallback.triggered`
- `agent_assist.suggestion.shown`, `agent_assist.suggestion.accepted`
- `knowledge.search.executed`, `knowledge.document.updated`
- `tenant.provisioned`, `tenant.plan.changed`
- `billing.usage.recorded`

---

## 5. Patterns to Follow

### Pattern 1: Circuit Breaker for External AI Services

STT/TTS/LLM은 외부 서비스 또는 GPU 클러스터에 의존하므로 장애 전파를 방지해야 한다.

**When:** 모든 AI 서비스 호출 시
**Why:** STT 서비스 장애 시 전체 통화가 먹통되는 것을 방지

```typescript
// Voice Pipeline에서 STT 호출
const sttResult = await circuitBreaker.execute(
  () => sttService.recognize(audioChunk),
  {
    fallback: () => ({
      text: '',
      isFinal: false,
      fallbackUsed: true
    }),
    threshold: 5,        // 5회 실패 시 회로 개방
    resetTimeout: 30000  // 30초 후 재시도
  }
);

// LLM 장애 시 -> 정적 FAQ 응답 폴백
// TTS 장애 시 -> 사전 녹음된 안내 멘트 재생
```

### Pattern 2: Tenant-Scoped Repository

모든 데이터 접근에서 테넌트 격리를 자동 보장한다.

```typescript
class TenantScopedRepository<T> {
  constructor(
    private readonly tenantId: string,
    private readonly baseRepo: Repository<T>
  ) {}

  async find(query: QueryOptions): Promise<T[]> {
    return this.baseRepo.find({
      ...query,
      where: {
        ...query.where,
        tenantId: this.tenantId  // 자동 주입
      }
    });
  }

  async create(data: Partial<T>): Promise<T> {
    return this.baseRepo.create({
      ...data,
      tenantId: this.tenantId  // 자동 주입
    });
  }
}
```

### Pattern 3: Conversation State Machine

통화 상태를 명시적 상태 머신으로 관리한다.

```
[IDLE] ---(착신)--> [RINGING] ---(응답)--> [CONNECTED]
                                               |
                    +--------+--------+--------+--------+
                    |        |        |        |        |
               [LISTENING] [PROCESSING] [SPEAKING] [HOLD]
                    |        |        |        |
                    +--------+--------+--------+
                                               |
                              +---------+------+------+
                              |         |             |
                         [TRANSFERRING] [WRAPPING_UP] [DISCONNECTED]
                              |         |
                              v         v
                         [CONNECTED] [IDLE]
```

**Why:** 상태 전이가 명확해야 barge-in, 전환, 에스컬레이션 등의 복잡한 시나리오를 안정적으로 처리할 수 있다.

### Pattern 4: Streaming Response Aggregation (Agent Assist)

여러 AI 엔진의 비동기 결과를 하나의 WebSocket 스트림으로 병합한다.

```typescript
// Agent Assist Hub 내부
class StreamAggregator {
  private subscribers = new Map<string, WebSocket>();  // agentId -> ws

  // 각 엔진이 결과를 push
  async onTranscript(callId: string, transcript: TranscriptEvent) {
    this.broadcast(callId, { type: 'transcript.partial', payload: transcript });
  }

  async onSuggestion(callId: string, suggestion: SuggestionEvent) {
    // 추천 응답은 debounce (빈번한 업데이트 방지)
    this.debouncedBroadcast(callId, { type: 'suggestion.new', payload: suggestion }, 500);
  }

  async onSentiment(callId: string, sentiment: SentimentEvent) {
    // 감정 변화는 threshold 넘을 때만
    if (Math.abs(sentiment.delta) > 0.1) {
      this.broadcast(callId, { type: 'sentiment.update', payload: sentiment });
    }
  }

  async onComplianceAlert(callId: string, alert: ComplianceEvent) {
    // 컴플라이언스는 즉시, 최우선
    this.broadcast(callId, { type: 'compliance.alert', payload: alert, priority: 'high' });
  }
}
```

---

## 6. Anti-Patterns to Avoid

### Anti-Pattern 1: Synchronous LLM in Voice Path

**What:** 보이스봇 응답 경로에서 LLM 호출을 동기적으로 대기
**Why bad:** LLM 추론 시간(1-5초)이 그대로 사용자 대기 시간이 됨
**Instead:** 문장 단위 스트리밍 + "잠시만요" filler 오디오 + 비동기 파이프라인

### Anti-Pattern 2: Single Shared Database for All Tenants

**What:** 모든 테넌트 데이터를 하나의 스키마에 tenant_id 컬럼으로만 격리
**Why bad:** 금융/보험 규제 준수 불가, 한 테넌트의 대량 쿼리가 다른 테넌트에 영향
**Instead:** 하이브리드 전략 (위 3번 섹션 참조)

### Anti-Pattern 3: Polling-Based Agent Assist

**What:** Agent Assist UI에서 주기적으로 REST API 폴링
**Why bad:** 지연 시간 증가 (최대 폴링 간격만큼), 불필요한 서버 부하
**Instead:** WebSocket 기반 push 아키텍처

### Anti-Pattern 4: Monolithic Knowledge Base

**What:** 모든 테넌트의 지식을 하나의 벡터 DB에 혼합 저장
**Why bad:** 검색 정확도 저하, 크로스 테넌트 데이터 유출 위험
**Instead:** 테넌트별 인덱스/컬렉션 격리 (최소한 논리적 격리)

### Anti-Pattern 5: Stateful Voice Workers

**What:** Voice Pipeline 워커가 통화 상태를 로컬 메모리에 보관
**Why bad:** 워커 장애 시 통화 끊김, 스케일링 불가
**Instead:** 상태는 Redis/외부 스토어, 워커는 stateless

---

## 7. Scalability Considerations

| Concern | 100 콜/일 (PoC) | 10K 콜/일 (성장) | 100K+ 콜/일 (대규모) |
|---------|-----------------|------------------|---------------------|
| **Voice Gateway** | 단일 인스턴스 | Active-Active 2대 + LB | 지역별 클러스터 + SIP 로드밸런싱 |
| **STT/TTS** | 관리형 API (Google/Clova) | 전용 GPU 인스턴스 | GPU 클러스터 + 오토스케일링 |
| **LLM** | API 호출 (GPT-4/Claude) | 전용 vLLM 인스턴스 | 다중 GPU 노드 + 모델 샤딩 |
| **Knowledge (ES)** | 단일 노드 | 3노드 클러스터 | 테넌트별 샤드 할당 |
| **Knowledge (Neo4j)** | 단일 인스턴스 | 읽기 복제본 | Neo4j Fabric (분산) |
| **Agent Assist WS** | 단일 서버 | Sticky session + Redis pub/sub | WebSocket Gateway 클러스터 + Redis Streams |
| **이벤트 버스** | Redis Streams | Kafka 3브로커 | Kafka 클러스터 + 파티션 전략 |
| **녹음 저장** | 로컬 스토리지 | S3 + lifecycle policy | S3 + Glacier 아카이빙 |

### Horizontal Scaling Strategy

```
[Auto Scaler]
    |
    +-- Voice Workers: concurrent_calls / calls_per_worker
    +-- LLM Workers: pending_requests queue depth
    +-- Agent Assist WS: connected_agents / agents_per_node
    +-- Knowledge Search: query_latency_p95 threshold
```

**핵심:** Voice Pipeline과 LLM 추론은 **GPU 바운드**이므로 CPU 기반 오토스케일링으로는 불충분하다. GPU 메모리 사용률 + 추론 큐 길이 기반 스케일링이 필요하다.

---

## 8. Infrastructure Architecture

### 추천 인프라 구성

```
[CDN] --- Static Assets (Admin UI, Agent UI)
  |
[API Gateway / Kong / AWS API GW]
  |
  +-- /api/voice/*      --> [Voice Service Cluster] (K8s, GPU nodes)
  +-- /api/assist/*     --> [Agent Assist Cluster] (K8s)
  +-- /api/admin/*      --> [Admin Service] (K8s or Serverless)
  +-- /api/onboard/*    --> [Onboarding Service] (Serverless)
  +-- /api/billing/*    --> [Billing Service] (K8s)
  +-- /ws/assist        --> [WebSocket Gateway] (K8s, sticky sessions)
  |
[Internal Network]
  +-- [Elasticsearch Cluster]
  +-- [Neo4j Cluster]
  +-- [PostgreSQL] (tenant config, billing, users)
  +-- [Redis Cluster] (session, cache, pub/sub)
  +-- [Kafka] (event bus)
  +-- [S3-compatible Storage] (recordings, documents)
```

### 한국 시장 인프라 고려사항

- **데이터 레지던시:** 금융/보험 데이터는 국내 리전 필수 (AWS Seoul, NCP, KT Cloud)
- **통신사 연동:** 한국 PSTN 연동은 KT, SK, LG U+ SIP trunk 직접 계약 또는 국내 CPaaS
- **GPU 가용성:** 국내 클라우드의 GPU 인스턴스 가용성 제한적 -> NCP GPU 또는 온프레미스 하이브리드
- **규정:** 개인정보보호법, 신용정보법, 녹음 동의 고지 자동화

---

## 9. Component Build Order (Phase Dependencies)

### Dependency Graph

```
Phase 1: Foundation
  [Tenant Management] ----+
  [Auth/IAM]         ----+---> Phase 2로의 의존성
  [API Gateway]      ----+
  [Event Bus Setup]  ----+

Phase 2: Core Voice (기존 엔진 SaaS화)
  [Voice Gateway Adapter] -------+
  [STT/TTS Pipeline Wrapper] ---+---> Phase 3의 전제조건
  [Knowledge Layer Multi-tenant]+
  [AX PM SaaS 전환]            +

Phase 3: Agent Assist (신규 개발)
  [Agent Assist Hub] -----------+
  [WebSocket Gateway] ---------+---> Phase 4의 전제조건
  [Agent Assist UI] -----------+
  [Suggestion Engine] ---------+

Phase 4: Self-Service & Billing
  [Onboarding Portal] ---------+
  [Billing Service] -----------+---> Phase 5의 전제조건
  [Usage Metering] ------------+
  [Plan Management] -----------+

Phase 5: Analytics & Scale
  [Analytics Dashboard] --------+
  [Quality Monitoring] ---------+
  [Auto-scaling Infra] --------+
  [Global Expansion Prep] -----+
```

### Build Order Rationale

1. **Phase 1 (Foundation) 먼저:** 모든 서비스가 테넌트 컨텍스트와 인증에 의존한다. 이것 없이는 어떤 서비스도 SaaS로 동작할 수 없다.

2. **Phase 2 (Core Voice) 다음:** 기존 보이스봇 엔진을 멀티테넌트 SaaS로 전환하는 것이 핵심 가치. 이 단계에서 첫 고객 온보딩이 가능해야 한다.

3. **Phase 3 (Agent Assist) 그 다음:** 보이스봇 파이프라인이 돌아가야 실시간 전사 데이터를 Agent Assist로 보낼 수 있다. Voice Pipeline에 대한 기술적 의존성이 있다.

4. **Phase 4 (Self-Service) 이후:** 제품이 동작하는 상태에서 셀프 온보딩과 빌링을 붙인다. 초기에는 수동 온보딩으로 대체 가능하므로 뒤로 미룰 수 있다.

5. **Phase 5 (Analytics) 마지막:** 운영 데이터가 쌓여야 의미 있는 분석이 가능하다. 이벤트 버스는 Phase 1에서 셋업하되, 분석 파이프라인은 마지막에 구축한다.

---

## 10. Technology Mapping (Architecture -> Implementation)

| 아키텍처 컴포넌트 | 추천 기술 | 대안 | 근거 |
|-----------------|----------|------|------|
| Voice Gateway | FreeSWITCH + Custom SIP | Orakul, Twilio | 한국 통신사 연동, 기존 경험 |
| STT | Google Cloud STT / Clova STT | Whisper (자체 호스팅) | 한국어 품질, 스트리밍 지원 |
| TTS | Google Cloud TTS / Clova TTS | VITS2 (자체 호스팅) | 자연스러운 한국어 |
| LLM | Claude API / GPT-4 API | vLLM + 오픈소스 | 스트리밍, 한국어 품질, 속도 |
| Knowledge - Search | Elasticsearch 8.x | OpenSearch | 기존 보유, 하이브리드 검색 |
| Knowledge - Graph | Neo4j 5.x | --- | 기존 보유, 출처 추적 핵심 |
| WebSocket Gateway | Socket.IO / ws (Node.js) | --- | 생태계, 재연결 로직 내장 |
| Event Bus | Apache Kafka | Redis Streams (소규모) | 이벤트 소싱, 내구성 |
| API Gateway | Kong / AWS API Gateway | Nginx + custom | 테넌트 라우팅, rate limiting |
| Container Orchestration | Kubernetes | --- | GPU 노드 관리, 오토스케일링 |
| RDBMS | PostgreSQL 16 + RLS | --- | RLS 멀티테넌시, 성숙도 |
| Cache/Session | Redis 7 Cluster | --- | pub/sub, 세션, 캐시 통합 |
| Object Storage | S3 / NCP Object Storage | --- | 녹음 파일, 문서 저장 |
| Monitoring | Prometheus + Grafana | Datadog | 비용, 커스터마이징 |

---

## Sources & Confidence Notes

| Topic | Confidence | Basis |
|-------|------------|-------|
| Real-time voice pipeline (STT->LLM->TTS) | HIGH | 확립된 산업 패턴 (AWS Connect, Google CCAI, Genesys Cloud 공개 아키텍처) |
| Sentence-level chunking for TTS | HIGH | 모든 상용 voice AI 제품의 표준 기법 |
| Agent Assist WebSocket architecture | HIGH | Google CCAI Agent Assist, Genesys Agent Copilot 등의 공개 설계 |
| Multi-tenancy hybrid strategy | HIGH | SaaS 아키텍처 성숙 패턴, AWS Well-Architected SaaS Lens |
| Barge-in handling | HIGH | 음성 IVR 시대부터 존재하는 표준 기법 |
| Event-driven data platform | HIGH | 확립된 마이크로서비스 패턴 |
| 한국 시장 인프라 특수사항 | MEDIUM | 공개 정보 기반, 실제 통신사 SIP trunk 가격/조건은 미확인 |
| GPU 스케일링 전략 | MEDIUM | 일반적 ML 인프라 패턴 적용, AICC 특화 벤치마크 미확인 |
| 구체적 지연 시간 수치 | MEDIUM | 산업 표준 목표치이나 실제 구현에서 달라질 수 있음 |

**주의:** 웹 검색 도구가 사용 불가하여 2025-2026년 최신 제품/서비스 변경사항(예: 새로운 한국어 STT 서비스, LLM 가격 변동)은 반영하지 못했다. Phase별 진입 시 해당 영역의 최신 동향을 재조사할 것을 권장한다.
