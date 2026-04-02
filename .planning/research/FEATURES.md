# Feature Landscape: AICC SaaS (AI Voicebot + Agent Assist)

**Domain:** AI Contact Center SaaS
**Researched:** 2026-03-31
**Overall confidence:** MEDIUM (training data + industry knowledge; web verification unavailable)

---

## Table Stakes: AI Voicebot (인바운드)

산업 공통 + 산업별로 분리. 이 기능이 없으면 PoC 탈락.

### 산업 공통 (All Verticals)

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| 자연어 의도 분류 (Intent Recognition) | 고객 발화를 정확한 업무로 라우팅 | Med | Genesys/카카오 모두 기본 제공 |
| 다단계 대화 시나리오 (Multi-turn Dialog) | 단답이 아닌 문맥 기반 대화 필수 | High | 기존 구축 납품에서 검증됨 |
| STT/TTS 통합 | 음성 채널의 기본 인프라 | Med | 외부 STT/TTS 엔진 연동 (Clova, Google 등) |
| 상담원 전환 (Escalation to Agent) | 봇이 해결 못하면 사람에게 넘김 | Low | 전환 시 대화 맥락 전달 필수 |
| 통화 녹음 및 STT 로그 | 컴플라이언스 + 품질 관리 기본 | Low | 금융/보험은 법적 의무 |
| 실시간 모니터링 대시보드 | 운영자가 봇 상태/콜량 확인 | Med | 관리 콘솔의 핵심 화면 |
| 시나리오 빌더 (No-code/Low-code) | 비개발자가 대화 흐름 설계 | High | 경쟁사 모두 GUI 빌더 제공 |
| 근무시간/비근무시간 분기 | 기본적 IVR 대체 기능 | Low | |
| 동시 통화 처리 (Concurrent Calls) | SaaS 기본 성능 요건 | Med | 인프라 설계 문제 |
| 대기열 관리 및 콜백 | 봇 응대 불가 시 대기/콜백 제공 | Med | |

### 금융 (Banking/Securities) 특화

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| 본인 인증 연동 (KYC) | 계좌 조회, 이체 전 인증 필수 | High | ARS 인증, 생체인증 연동 |
| 금융 규제 준수 응답 (Compliance Guard) | 투자 권유 금지, 필수 고지 삽입 | High | 금소법/자본시장법 대응 |
| 계좌 조회/이체 안내 | 가장 빈번한 인바운드 콜 유형 | Med | 코어뱅킹 API 연동 |
| 금융 용어 특화 STT 사전 | "정기예금", "CD금리" 등 인식률 | Med | STT 엔진 커스텀 사전 |
| 마스킹/암호화 (PII Protection) | 계좌번호, 주민번호 로그 마스킹 | Med | 개인정보보호법 필수 |

### 보험 (Insurance) 특화

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| 보험금 청구 접수 자동화 | 가장 높은 콜 비중, 자동화 ROI 극대화 | High | 다단계 정보 수집 시나리오 |
| 보장 내용 안내 (약관 기반) | "내 보험에서 이거 되나요?" 질문 대응 | High | RAG 기반 약관 검색 핵심 |
| 계약 상태 조회 | 기본 조회 업무 | Med | 보험 코어시스템 연동 |
| 불완전판매 방지 고지 | 보험 상품 설명 시 법적 고지 필수 | Med | 보험업법 대응 |
| 보험 용어 특화 STT 사전 | "면책기간", "보장개시일" 등 | Med | |

### 이커머스 (E-commerce) 특화

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| 주문 상태 조회 | 가장 빈번한 문의 유형 | Low | OMS API 연동 |
| 반품/교환 접수 | 두 번째로 빈번한 문의 | Med | 반품 정책 기반 분기 |
| 배송 추적 안내 | 택배사 API 연동 조회 | Low | |
| 프로모션/쿠폰 안내 | 마케팅 시즌 콜량 급증 대응 | Low | CMS 연동 |
| 결제 오류 안내 | PG사별 에러 코드 매핑 | Med | |

---

## Table Stakes: Agent Assist (상담원 보조)

### 산업 공통

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| 실시간 통화 전사 (Live Transcription) | Agent Assist의 전제 조건 | Med | 실시간 STT 스트리밍 |
| 실시간 통화 요약 (Live Summary) | 상담원이 대화 맥락 즉시 파악 | Med | LLM 기반 요약 |
| 추천 응답 (Suggested Responses) | 상담원 응답 속도/정확도 향상 | High | RAG 기반 지식 검색 + LLM 생성 |
| 고객 정보 패널 (Customer 360) | CRM 연동 고객 이력 통합 표시 | Med | 기존 CRM/CDP 연동 필수 |
| 감정 분석 (Sentiment Analysis) | 불만 고객 조기 탐지, 상담 품질 관리 | Med | 음성 톤 + 텍스트 감정 이중 분석 |
| 통화 후 자동 요약 (After-call Summary) | ACW(After Call Work) 시간 단축 | Med | 가장 ROI 높은 기능 중 하나 |
| 상담 이력 검색 | 과거 상담 내용 키워드/의미 검색 | Med | |
| 스크립트 가이드 (Script Guidance) | 필수 멘트 누락 방지 | Low | 금융/보험에서 컴플라이언스 필수 |

### 금융 특화 Agent Assist

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| 컴플라이언스 실시간 경고 | 금지어/부적절 표현 실시간 감지 | High | "원금 보장", "확실히 수익" 등 |
| 규정집 기반 추천 응답 | 내부 규정에 맞는 답변만 추천 | High | RAG 출처 추적 필수 |
| 고객 신용등급/거래이력 패널 | 상담 맥락에 필요한 금융 정보 | Med | 코어뱅킹 연동 |

### 보험 특화 Agent Assist

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| 약관 검색 + 하이라이트 | 관련 약관 조항 자동 검색/표시 | High | Hybrid RAG 핵심 활용 영역 |
| 보험금 산정 보조 | 청구 접수 시 예상 보험금 참조 | High | 보험 코어시스템 연동 |
| 유사 사례 추천 | 과거 동일 유형 처리 사례 제시 | Med | 벡터 검색 기반 |

### 이커머스 특화 Agent Assist

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| 주문/배송 통합 조회 패널 | OMS + 배송 추적 원클릭 조회 | Med | API 통합 |
| 환불/교환 정책 자동 제시 | 정책 기반 가능 여부 자동 판단 | Med | 규칙 엔진 + RAG |
| 상품 추천 (Cross-sell) | 상담 중 관련 상품 추천 | Med | 추천 엔진 연동 |

---

## Differentiators (경쟁 우위 기능)

Genesys, Twilio Flex, 카카오엔터프라이즈, 솔트룩스 대비 뤼튼이 차별화할 수 있는 기능.

### Differentiator 1: Hybrid RAG 기반 출처 추적 응답 (Citation-backed Answers)

| 항목 | 내용 |
|------|------|
| **Value Proposition** | "이 답변의 근거는 약관 제23조 2항입니다" -- 답변에 출처를 명시하여 상담원/고객 신뢰 확보 |
| **Complexity** | High |
| **경쟁사 현황** | Genesys: 지식 기반 있으나 출처 추적 약함. 카카오: RAG 미공개. 솔트룩스: 전통 NLP 기반 |
| **뤼튼 강점** | Elasticsearch 시맨틱 검색 + Neo4j Knowledge Graph 이미 보유, LLM 기반 생성 능력 |
| **대상 제품** | 보이스봇 + Agent Assist 모두 |
| **핵심 산업** | 금융/보험 (컴플라이언스 민감 산업에서 결정적 차별점) |

### Differentiator 2: 할루시네이션 가드레일 (Hallucination Prevention System)

| 항목 | 내용 |
|------|------|
| **Value Proposition** | 금융/보험에서 잘못된 답변은 법적 리스크. 답변 생성 전 지식 기반 일치 여부 검증 레이어 |
| **Complexity** | High |
| **경쟁사 현황** | 대부분 LLM을 그대로 사용하거나, 규칙 기반 필터링만 적용 |
| **뤼튼 강점** | 기존 구축 경험에서 "틀리면 안 되는 상담" 도메인 노하우 축적 |
| **구현 방식** | 응답 생성 후 지식 기반 대조 검증 (Groundedness Check) + 불확실 시 "확인 후 안내" 폴백 |
| **대상 제품** | 보이스봇 + Agent Assist |

### Differentiator 3: 셀프서비스 온보딩 + 지식 기반 자동 구축

| 항목 | 내용 |
|------|------|
| **Value Proposition** | 구축형은 PoC에 2-3개월 소요. 고객사가 문서(약관, FAQ, 매뉴얼) 업로드하면 자동으로 지식 기반 구축 |
| **Complexity** | Very High |
| **경쟁사 현황** | Genesys: 엔터프라이즈 구축 중심. 카카오: 파트너 에이전시 통한 구축. 솔트룩스: 커스텀 구축 |
| **뤼튼 강점** | LLM 기반 문서 파싱/청킹/임베딩 파이프라인 자동화 가능 |
| **대상 제품** | 관리 콘솔 (신규 화면) |
| **핵심 가치** | SaaS 전환의 핵심 -- 고객 획득 비용(CAC) 대폭 절감 |

### Differentiator 4: 도메인 특화 품질 테스트 자동화 (QA Automation)

| 항목 | 내용 |
|------|------|
| **Value Proposition** | 시나리오 변경 시 자동 회귀 테스트 실행, 품질 저하 사전 방지 |
| **Complexity** | High |
| **경쟁사 현황** | 수동 QA가 업계 표준. 자동화 테스트 프레임워크 제공하는 경쟁사 거의 없음 |
| **뤼튼 강점** | 기존 AX Product Manager의 "품질 테스트" 기능 보유 |
| **대상 제품** | 관리 콘솔 |

### Differentiator 5: 실시간 컴플라이언스 모니터링 대시보드

| 항목 | 내용 |
|------|------|
| **Value Proposition** | 금융/보험 상담에서 규제 위반 발화를 실시간 감지하고 관리자에게 알림 |
| **Complexity** | High |
| **경쟁사 현황** | Genesys: 사후 분석 위주. 국내 경쟁사: 기능 미비 |
| **뤼튼 강점** | 실시간 STT + LLM 분석 조합으로 구현 가능 |
| **대상 제품** | Agent Assist + 관리 콘솔 |
| **핵심 산업** | 금융/보험 |

### Differentiator 6: 산업별 프리빌트 템플릿 (Industry Starter Kit)

| 항목 | 내용 |
|------|------|
| **Value Proposition** | 금융/보험/이커머스 각각에 맞는 시나리오 템플릿, 의도 분류 모델, FAQ 셋 사전 제공 |
| **Complexity** | Med |
| **경쟁사 현황** | Genesys: 일부 제공. 국내 경쟁사: 매번 처음부터 구축 |
| **뤼튼 강점** | 기존 구축 납품 경험에서 축적된 산업별 데이터/시나리오 |
| **대상 제품** | 관리 콘솔 (셀프 온보딩 시 선택) |
| **핵심 가치** | Time-to-value 극적 단축 (수개월 -> 수일) |

---

## Agent Assist 특화 기능 (신규 화면)

기존 구축형에 없던, SaaS 제품으로서 새로 설계해야 하는 화면/기능.

### 실시간 보조 패널 (Real-time Assist Panel)

| 구성 요소 | 설명 | 복잡도 | 우선순위 |
|-----------|------|--------|---------|
| **Live Transcript Pane** | 고객/상담원 발화 실시간 표시, 화자 분리 | Med | MVP |
| **Smart Suggestion Cards** | 고객 발화에 따라 추천 응답 카드 표시, 클릭으로 복사/전송 | High | MVP |
| **Knowledge Snippet Panel** | RAG 검색 결과를 출처와 함께 사이드 패널 표시 | High | MVP |
| **Customer 360 Widget** | CRM 연동 고객 정보, 과거 상담 이력, 구매 이력 통합 | Med | MVP |
| **Sentiment Indicator** | 실시간 감정 변화 게이지 (Positive/Neutral/Negative) | Med | Phase 2 |
| **Compliance Alert Banner** | 규제 위반 위험 시 상단 경고 배너 | Med | MVP (금융/보험) |
| **Call Summary Auto-draft** | 통화 종료 시 자동 요약 초안 생성, 상담원이 편집 후 저장 | Med | MVP |
| **Next Best Action** | 상담 맥락 기반 다음 행동 추천 (에스컬레이션, 콜백 등) | High | Phase 2 |
| **Multi-tab Layout** | 동시에 여러 상담 처리 시 탭 전환 | Med | Phase 2 |

### 관리자/QA 화면

| 구성 요소 | 설명 | 복잡도 | 우선순위 |
|-----------|------|--------|---------|
| **상담 품질 스코어카드** | 자동 채점 (인사말, 필수 고지, 감정 대응 등) | High | Phase 2 |
| **코칭 인사이트** | 상담원별 약점 분석, 개선 포인트 제시 | High | Phase 3 |
| **실시간 상담 모니터링** | 관리자가 진행 중인 상담 실시간 엿듣기/개입 | Med | Phase 2 |

---

## 고객사 온보딩 셀프서비스 기능 (신규)

구축형에서 SaaS로 전환하기 위한 핵심 신규 기능.

| Feature | 설명 | Complexity | 우선순위 |
|---------|------|------------|---------|
| **회사 프로필 등록** | 회사명, 산업, 규모, 상담 채널 정보 입력 | Low | MVP |
| **산업 템플릿 선택** | 금융/보험/이커머스 프리빌트 템플릿 선택 및 커스텀 | Med | MVP |
| **지식 문서 업로드** | FAQ, 약관, 매뉴얼 등 파일 업로드 -> 자동 지식 기반 구축 | Very High | MVP |
| **지식 기반 검증/테스트** | 업로드된 지식 기반으로 테스트 질문-응답 확인 | High | MVP |
| **시나리오 빌더 (GUI)** | 드래그앤드롭 대화 흐름 설계 | High | MVP |
| **API 키 발급/관리** | 기존 시스템 연동용 API 키 셀프 발급 | Low | MVP |
| **전화번호 연동 설정** | SIP 트렁크/전화번호 할당 자동화 | Med | MVP |
| **테스트 콜 실행** | 설정 완료 후 테스트 전화로 검증 | Med | MVP |
| **요금제 선택/결제** | 티어별 요금제 + 결제 수단 등록 | Med | MVP |
| **사용량 대시보드** | 콜 수, API 호출 수, 비용 현황 | Med | MVP |
| **팀 멤버 초대/권한 관리** | RBAC 기반 팀 관리 | Med | MVP |
| **웹훅/CRM 연동 설정** | Salesforce, 자체 CRM 등 연동 UI | Med | Phase 2 |
| **커스텀 도메인/브랜딩** | 고객사 브랜드 적용 | Low | Phase 2 |

---

## Anti-Features (v1에서 의도적으로 만들지 않을 것)

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|-------------------|
| **아웃바운드 자동 발신** | TM 규제 리스크 높음 (전기통신사업법), 인바운드 PMF 먼저 | Phase 2 이후, 법적 검토 선행 후 도입 |
| **텍스트 채팅봇** | 보이스 채널 집중으로 명확한 포지셔닝 | 보이스봇 안정화 후 채널 확장 |
| **자체 STT/TTS 엔진** | 음성 엔진 자체 개발은 막대한 투자 필요, 본질이 아님 | Clova, Google, Whisper 등 외부 엔진 연동 |
| **자체 전화 인프라 (PSTN)** | 통신사 인프라 투자 비현실적 | SIP 트렁크 연동 (KT, LG 등) |
| **범용 CRM 기능** | CRM은 Salesforce 등 전문 솔루션 영역 | CRM 연동 API만 제공 |
| **영상 통화 지원** | 시장 수요 낮고 복잡도 높음 | 음성 채널 집중 |
| **다국어 지원 (v1)** | 한국어 완성도 우선 | Phase 3에서 영어/일본어 확장 |
| **고객 직접 사용 모바일 앱** | 웹 관리 콘솔 우선 | 반응형 웹으로 모바일 접근 지원 |
| **실시간 음성 감정 분석 자체 모델** | 연구 수준 기술, 상용화 리스크 | 텍스트 기반 감정 분석으로 시작, 음성 감정은 Phase 2 |
| **복잡한 워크플로우 자동화 (RPA)** | AICC 범위 벗어남 | Zapier/n8n 웹훅 연동으로 대체 |

---

## Feature Dependencies

```
STT/TTS 통합 → 실시간 통화 전사 → 실시간 통화 요약
                                   → 추천 응답 (RAG)
                                   → 감정 분석
                                   → 컴플라이언스 경고

지식 문서 업로드 → 지식 기반 구축 → RAG 검색 → 추천 응답
                                              → 출처 추적 응답 (차별화)
                                              → 보이스봇 자동 응답

시나리오 빌더 → 보이스봇 대화 흐름 → 테스트 콜 실행

회사 프로필 등록 → 산업 템플릿 선택 → 지식 문서 업로드 → 테스트 콜 → Go-Live

고객 정보 패널 (CRM 연동) ← API/웹훅 연동 설정
```

---

## 경쟁사 대비 기능 매트릭스

| Feature | Genesys Cloud | Twilio Flex | 카카오 i CC | 솔트룩스 | 뤼튼 (Target) |
|---------|:---:|:---:|:---:|:---:|:---:|
| AI 보이스봇 | O | O (Build) | O | O | O |
| Agent Assist 실시간 | O | O (Build) | 부분 | 부분 | O |
| 출처 추적 응답 (Citation) | X | X | X | X | **O (차별화)** |
| 할루시네이션 가드 | 부분 | X | X | X | **O (차별화)** |
| 셀프 온보딩 | 부분 | O | X | X | **O (차별화)** |
| 산업별 템플릿 | O | X | 부분 | 부분 | **O (차별화)** |
| QA 자동화 | 부분 | X | X | X | **O (차별화)** |
| No-code 시나리오 빌더 | O | 부분 | O | 부분 | O |
| 컴플라이언스 실시간 경고 | 사후 분석 | X | X | X | **O (차별화)** |
| 한국어 특화 | 약함 | 약함 | **강함** | 강함 | **강함** |
| 금융 규제 대응 | 글로벌 | X | 부분 | 부분 | **O (한국 특화)** |
| 가격 경쟁력 | 고가 | 종량 | 중간 | 프로젝트 | **성과 기반** |
| 도입 속도 | 수개월 | 수주 | 수개월 | 수개월 | **수일 (Target)** |

**Notes:**
- Genesys는 글로벌 최강자이나 한국어 성능과 국내 규제 대응이 약점
- Twilio Flex는 개발자 중심 플랫폼으로 직접 구축 필요 (Build 모델)
- 카카오 i CC는 카카오톡 채널 강점이나 음성 채널 AI 고도화는 상대적 약점
- 솔트룩스는 전통 NLP 기반으로 LLM 기반 전환 속도가 늦음

---

## MVP Recommendation

### Phase 1 - MVP (Must Ship)

**보이스봇:**
1. 자연어 의도 분류 + 다단계 대화
2. STT/TTS 통합 (외부 엔진)
3. 상담원 전환 (맥락 전달 포함)
4. 통화 녹음 + STT 로그
5. 시나리오 빌더 (GUI)
6. 실시간 모니터링 대시보드
7. **출처 추적 응답 (차별화 - Day 1부터)**
8. **할루시네이션 가드 (차별화 - Day 1부터)**

**Agent Assist:**
1. 실시간 통화 전사
2. 실시간 통화 요약
3. 추천 응답 (RAG 기반, 출처 표시)
4. 고객 정보 패널
5. 통화 후 자동 요약
6. 스크립트 가이드
7. 컴플라이언스 실시간 경고 (금융/보험 고객용)

**셀프 온보딩:**
1. 회사 프로필 + 산업 템플릿 선택
2. 지식 문서 업로드 + 자동 구축
3. 시나리오 빌더
4. 테스트 콜
5. 요금제/결제
6. 사용량 대시보드

### Phase 2 - Defer

- 감정 분석 (음성 톤 포함)
- Next Best Action
- 상담 품질 스코어카드
- 실시간 상담 모니터링 (관리자)
- CRM 심화 연동 (Salesforce 등)
- 다중 상담 탭
- 아웃바운드 보이스봇 (법적 검토 후)

### Phase 3 - Future

- 코칭 인사이트 (상담원 성장 분석)
- 다국어 지원
- 텍스트 채팅 채널 확장
- 고급 분석/BI 대시보드

**Defer rationale:**
- 감정 분석: 텍스트 기반은 Phase 1에 포함하되, 음성 톤 분석은 정확도 검증 필요
- 아웃바운드: 규제 리스크로 인바운드 PMF 먼저
- 스코어카드/코칭: 상담 데이터 축적 후 의미 있음

---

## Sources

- Genesys Cloud CX 공식 기능 페이지 (genesys.com/capabilities) -- MEDIUM confidence (training data 기반)
- Twilio Flex 공식 문서 (twilio.com/flex) -- MEDIUM confidence
- 카카오엔터프라이즈 카카오 i Contact Center 소개 자료 -- MEDIUM confidence
- 솔트룩스 AI Contact Center 제품 소개 -- LOW confidence (공개 자료 제한적)
- 금융감독원 금융소비자보호법 관련 가이드라인 -- MEDIUM confidence
- 한국 AICC 시장 분석 보고서 (IDC, Gartner) -- LOW confidence (정확한 수치 미검증)

**Note:** WebSearch 및 WebFetch 도구가 비활성화되어 실시간 검증이 불가했음. 경쟁사 최신 기능 업데이트는 별도 검증 필요.
