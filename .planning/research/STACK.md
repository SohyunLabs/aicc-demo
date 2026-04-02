# Technology Stack: AICC SaaS 제품화

**Project:** 뤼튼 AICC SaaS
**Researched:** 2026-03-31
**Note:** WebSearch/WebFetch 미사용 -- 트레이닝 데이터 + 도메인 전문 지식 기반. 경쟁사 세부 버전은 LOW confidence.

---

## 1. 기존 보유 자산 (활용 대상)

이미 구축 납품으로 검증된 기술. SaaS 전환 시 리팩토링/강화 대상이지 교체 대상이 아님.

| 컴포넌트 | 기술 | 역할 | SaaS 전환 시 필요 조치 |
|----------|------|------|----------------------|
| 보이스봇 코어 엔진 | 자체 엔진 (STT/TTS + 대화관리) | 실시간 음성 인바운드 자동 응대 | 테넌트별 격리 강화, 동시콜 오토스케일링 |
| Hybrid RAG | Elasticsearch (시맨틱 검색) + Neo4j (Knowledge Graph) | 지식 기반 답변 생성, 출처 추적 | 테넌트별 인덱스 분리, 지식 베이스 셀프서비스 UI |
| AX Product Manager | 자체 도구 | 프롬프트/토픽/품질테스트/녹음 관리 | SaaS 셀프서비스 래핑, RBAC 강화 |
| 멀티테넌시 | 기존 구현 | 고객사 격리 | 테넌트 프로비저닝 자동화, 데이터 격리 감사 |
| 관리자 패널 | React | 운영 대시보드 | 셀프 온보딩 플로우 추가, 화이트라벨링 |

---

## 2. 경쟁사 기술 스택 비교

### 2.1 Genesys Cloud CX (글로벌 리더)

| 영역 | 기술/접근 | 비고 |
|------|----------|------|
| 인프라 | AWS 기반 퍼블릭 클라우드, 마이크로서비스 | 글로벌 리전 다수 |
| AI/NLU | Genesys Dialog Engine (자체) + Google CCAI 연동 | 2024년부터 자체 LLM 기반 Agent Copilot 추가 |
| 음성 | 자체 SIP/WebRTC 기반 음성 인프라 | Audiocodes 등 SBC 연동 |
| Knowledge | Genesys Knowledge Workbench (자체) | 전통적 FAQ 기반, RAG 도입 진행 중 |
| Agent Assist | Agent Assist (실시간 추천, 자동 요약) | 2024-2025년 LLM 기반으로 강화 |
| 분석 | Genesys Predictive Analytics, WEM | 워크포스 최적화 포함 |
| 가격 | 사용자당 월과금 (CX1/CX2/CX3 티어) | 에이전트 시트 기반 |

**Genesys 약점 (뤼튼 기회):**
- 한국어 NLU/STT 품질이 현지 업체 대비 열위
- Knowledge 기반이 전통 FAQ 중심 -- Hybrid RAG 대비 출처 추적/그래프 추론 부재
- 도입 비용이 높고 커스터마이징에 SI 필요
- 금융/보험 도메인 한국 규제(전자금융감독규정 등) 대응 경험 부족

### 2.2 카카오엔터프라이즈 (카카오i 커넥트센터)

| 영역 | 기술/접근 | 비고 |
|------|----------|------|
| 인프라 | 카카오클라우드 기반 | 국내 데이터 센터 |
| AI/NLU | 카카오 자체 NLU + STT/TTS (카카오 AI 기술) | 한국어 특화 강점 |
| 음성 | SIP 기반, 카카오톡 채널 연동 강점 | 카카오 생태계 lock-in |
| Knowledge | 전통 시나리오 기반 + FAQ DB | RAG 도입 제한적 (2025년 기준) |
| Agent Assist | 실시간 STT + 상담 가이드 | LLM 기반 고도화 진행 중 |
| 분석 | 대시보드 + 통계 리포트 | WFM은 제한적 |
| 가격 | 구축형 + 월 운영료 혼합 | 카카오톡 연동 번들 |

**카카오 약점 (뤼튼 기회):**
- 카카오 생태계 의존도 높음 -- 비카카오 채널 확장 제한
- Knowledge 기반이 시나리오/FAQ 중심 -- LLM 기반 RAG 후발
- 금융 특화 컴플라이언스 기능 부족 (할루시네이션 방지, 출처 추적)
- 셀프서비스 온보딩 미흡 (구축형 마인드셋)

### 2.3 솔트룩스 (국내 AI 전문)

| 영역 | 기술/접근 | 비고 |
|------|----------|------|
| 인프라 | 온프레미스/프라이빗 클라우드 중심 | 공공/금융 특화 |
| AI/NLU | 자체 LLM (LUXIA), NLU 엔진 | 한국어 LLM 보유 |
| 음성 | STT/TTS 자체 엔진 | 한국어 음성 인식 강점 |
| Knowledge | 지식 그래프 기반 (자체) | 뤼튼과 유사한 접근이나 SaaS화 미흡 |
| Agent Assist | 상담원 보조 (지식 검색, 응대 가이드) | |
| 분석 | 감성 분석, VOC 분석 | |
| 가격 | 구축형 위주 | SaaS 전환 느림 |

**솔트룩스 약점 (뤼튼 기회):**
- SaaS 전환이 느림 -- 여전히 구축형 위주
- 엔터프라이즈 UX/DX가 개발자 친화적이지 않음
- 셀프서비스 불가, PoC 기간 길음

### 2.4 비교 요약 매트릭스

| 역량 | Genesys | 카카오 | 솔트룩스 | 뤼튼 (목표) |
|------|---------|--------|----------|------------|
| 한국어 음성 품질 | 중 | 상 | 상 | **상** (자체 엔진) |
| LLM 기반 RAG | 진행중 | 초기 | 부분적 | **상** (Hybrid RAG 운영 경험) |
| 출처 추적/할루시네이션 방지 | 하 | 하 | 중 | **상** (Neo4j KG + ES) |
| 순수 SaaS 모델 | 상 | 중 | 하 | **상** (목표) |
| 셀프 온보딩 | 중 | 하 | 하 | **상** (목표) |
| 금융 컴플라이언스 | 중 | 하 | 중 | **상** (기존 금융 구축 경험) |
| Agent Assist | 상 | 중 | 중 | **중→상** (신규 개발) |
| WFM/분석 | 상 | 중 | 중 | **하→중** (MVP 이후) |
| 가격 경쟁력 | 하 | 중 | 중 | **상** (성과 기반 과금) |

---

## 3. Hybrid RAG 기술적 차별화 근거

### 3.1 왜 Elasticsearch + Neo4j 조합이 우위인가

**Confidence: HIGH** (아키텍처 패턴은 잘 정립된 도메인)

| 검색 방식 | 단독 사용 시 한계 | Hybrid RAG에서의 역할 |
|----------|-----------------|---------------------|
| Elasticsearch (벡터 + 키워드) | 관계/맥락 추론 불가 | 시맨틱 유사도 기반 후보 문서 검색 |
| Neo4j Knowledge Graph | 대규모 비정형 텍스트 검색 비효율 | 엔티티 관계 추론, 출처 체인 추적 |
| **Hybrid** | — | ES로 후보 추출 -> KG로 관계 검증/확장 -> LLM으로 답변 생성 |

**경쟁사 대비 구체적 우위:**

1. **출처 추적 (Provenance)**: Neo4j 그래프를 통해 "이 답변은 어떤 규정의 어떤 조항에서 왔는가"를 체인으로 추적. 금융/보험 감사 대응에 필수.
2. **할루시네이션 방지**: 답변 생성 전 KG에서 팩트 검증 가능. 단순 벡터 검색 대비 잘못된 문서 참조 위험 감소.
3. **도메인 온톨로지**: 금융 상품 관계(약관 -> 특약 -> 보장 내용), 보험 보상 절차 등을 그래프로 모델링. FAQ DB나 단순 RAG로는 불가능한 추론.
4. **지식 업데이트 용이성**: 새 규정 추가 시 그래프 노드/엣지 추가만으로 반영. 전체 임베딩 재생성 불필요.

### 3.2 실제 적용 시나리오 (금융)

```
고객: "적금 중도해지하면 이자 어떻게 되나요?"

[Elasticsearch] -> "적금 중도해지" 관련 문서 5건 검색
[Neo4j] -> "적금" 노드 -> "중도해지" 관계 -> "이자 계산 규정" 노드 -> "상품별 차등 이율" 엣지
[LLM] -> 검증된 컨텍스트로 답변 생성 + "출처: 정기적금 약관 제12조 제3항" 부착
```

이는 Genesys의 Knowledge Workbench나 카카오의 FAQ DB로는 구현 불가능한 깊이의 답변.

---

## 4. SaaS 전환 시 추가 필수 기술 컴포넌트

### 4.1 반드시 새로 구축해야 하는 것 (Build)

| 컴포넌트 | 목적 | 권장 기술 | 우선순위 |
|----------|------|----------|---------|
| **빌링/구독 관리** | 성과 기반 과금, 사용량 추적 | Stripe (글로벌) + 토스페이먼츠 (국내) | P0 (MVP) |
| **셀프 온보딩 플로우** | 고객사 자가 가입/설정 | React (기존) + 위저드 UI | P0 (MVP) |
| **테넌트 프로비저닝 자동화** | 신규 고객사 인프라 자동 생성 | Terraform/Pulumi + K8s Operator | P0 (MVP) |
| **Usage Metering** | 통화 건수/분/API 호출 추적 | 자체 구현 (이벤트 스트리밍) | P0 (MVP) |
| **SLA 모니터링/대시보드** | 가용성, 응답 시간 보장 | Prometheus + Grafana | P0 (MVP) |
| **셀프서비스 지식 관리 UI** | 고객사가 직접 FAQ/문서 업로드 | React + 파일 파서 (PDF, HWP, DOCX) | P0 (MVP) |

### 4.2 기존 자산 강화가 필요한 것 (Enhance)

| 컴포넌트 | 현재 상태 | 필요한 강화 | 권장 기술 |
|----------|----------|------------|----------|
| **멀티테넌시** | 기본 구현 | 데이터 완전 격리, 테넌트별 설정, 리소스 쿼터 | DB 레벨 RLS, K8s namespace 격리 |
| **관리자 패널** | 구축형 용도 | SaaS 대시보드 (사용량, 비용, 분석) | 기존 React + 차트 라이브러리 |
| **인증/권한** | 기본 인증 | SSO (SAML/OIDC), RBAC, 감사 로그 | Keycloak 또는 Auth0 |
| **보이스봇 엔진** | 단일 테넌트 최적화 | 동시콜 오토스케일링, 테넌트별 리소스 할당 | K8s HPA + 커스텀 메트릭 |
| **AX Product Manager** | 내부 도구 수준 | 셀프서비스 UI, 권한 분리, 버전 관리 | UI 리팩토링 + API 계층 추가 |

### 4.3 구매/외부 서비스 사용 권장 (Buy)

| 컴포넌트 | 용도 | 권장 서비스 | 이유 |
|----------|------|-----------|------|
| **빌링 결제** | 카드 결제, 인보이스 | Stripe + 토스페이먼츠 | 직접 구현 대비 PCI DSS 부담 제거 |
| **이메일/알림** | 고객 알림, 리포트 발송 | AWS SES 또는 SendGrid | 안정성, 비용 효율 |
| **로그/모니터링** | 인프라 + 애플리케이션 모니터링 | Datadog 또는 Grafana Cloud | 엔터프라이즈 고객 SLA 보장 필수 |
| **CDN/Edge** | 음성 지연 최소화 | AWS CloudFront 또는 Cloudflare | 음성 서비스 레이턴시 크리티컬 |
| **CI/CD** | 배포 파이프라인 | GitHub Actions + ArgoCD | K8s 기반 GitOps |
| **시크릿 관리** | API 키, 인증 정보 | HashiCorp Vault 또는 AWS Secrets Manager | 금융 컴플라이언스 필수 |
| **WFM (Workforce Management)** | 상담원 스케줄링, 성과 관리 | Phase 2에서 자체 개발 또는 파트너 연동 | MVP에서는 제외 |

### 4.4 만들지 말아야 하는 것 (Do NOT Build)

| 컴포넌트 | 이유 | 대안 |
|----------|------|------|
| 자체 STT/TTS 엔진 (신규) | 이미 보유. 추가 개발 불필요 | 기존 엔진 유지, 필요 시 Google/Clova STT 대체 옵션 |
| 자체 LLM | 비용/시간 비현실적 | OpenAI GPT-4o / Anthropic Claude API 사용, 프롬프트 엔지니어링으로 도메인 특화 |
| 자체 결제 시스템 | PCI DSS 인증 부담 | Stripe/토스페이먼츠 |
| 자체 이메일 인프라 | 유지보수 부담, 발송 안정성 | SES/SendGrid |
| CRM 기능 | 범위 확장 위험 | Salesforce/HubSpot 연동 API 제공 |
| 풀 WFM 스위트 | 복잡도 과대, 전문 영역 | Phase 2 이후 파트너 연동 또는 경량 자체 구현 |

---

## 5. 권장 기술 스택 (Full Stack)

### 5.1 인프라 레이어

| 기술 | 용도 | 이유 |
|------|------|------|
| **AWS (주력)** | 클라우드 인프라 | 한국 리전, 금융 클라우드 인증, Genesys도 AWS 기반 |
| **Kubernetes (EKS)** | 컨테이너 오케스트레이션 | 마이크로서비스 + 테넌트별 격리 + 오토스케일링 |
| **Terraform** | IaC | 테넌트 프로비저닝 자동화 필수 |
| **ArgoCD** | GitOps 배포 | K8s 환경 표준 |
| **AWS CloudFront** | CDN/Edge | 음성 지연 최소화 |

**Confidence: MEDIUM** -- AWS가 한국 금융 클라우드에서 가장 안정적 선택이나, 네이버클라우드/카카오클라우드도 옵션. 고객사 요구에 따라 멀티클라우드 가능성 열어둘 것.

### 5.2 데이터 레이어

| 기술 | 용도 | 이유 |
|------|------|------|
| **PostgreSQL (RDS)** | 운영 데이터 (테넌트, 사용자, 설정, 빌링) | 안정성, RLS로 테넌트 격리, JSON 지원 |
| **Elasticsearch** | 시맨틱 검색, 로그 | **기존 보유** -- Hybrid RAG 검색 레이어 |
| **Neo4j** | Knowledge Graph | **기존 보유** -- 관계 추론, 출처 추적 |
| **Redis** | 캐시, 세션, 실시간 상태 | 통화 상태 관리, 상담원 상태, 세션 |
| **Apache Kafka / AWS MSK** | 이벤트 스트리밍 | Usage metering, 실시간 이벤트 파이프라인, 비동기 처리 |
| **S3** | 녹음 파일, 문서 저장 | 비용 효율, 테넌트별 버킷/프리픽스 격리 |

### 5.3 AI/ML 레이어

| 기술 | 용도 | 이유 |
|------|------|------|
| **자체 보이스봇 엔진** | STT + TTS + 대화 관리 | **기존 보유** -- 핵심 차별화 자산 |
| **OpenAI GPT-4o API** (주력 LLM) | RAG 답변 생성, 요약, Agent Assist | 비용 대비 성능 최적, 한국어 품질 우수 |
| **Anthropic Claude API** (보조 LLM) | 대체/비교 모델 | 멀티 LLM 전략으로 vendor lock-in 방지 |
| **Hybrid RAG 파이프라인** | 지식 검색 + 답변 생성 | **기존 보유** -- ES + Neo4j + LLM 통합 |
| **감정 분석 모델** | 통화 중 고객 감정 실시간 분석 | 자체 경량 모델 또는 LLM 기반 |
| **통화 요약 모델** | 통화 후 자동 요약 | LLM API 활용 (GPT-4o-mini 수준이면 충분) |

**LLM 전략 핵심:**
- 자체 LLM을 만들지 말 것. API 기반으로 빠르게 제품화.
- LLM Abstraction Layer를 두어 모델 교체 용이하게 설계 (LiteLLM 또는 자체 어댑터).
- 프롬프트 + RAG 컨텍스트로 도메인 특화. 파인튜닝은 Phase 2 이후 검토.

### 5.4 애플리케이션 레이어

| 기술 | 용도 | 이유 |
|------|------|------|
| **Python (FastAPI)** | AI/ML 서비스, RAG 파이프라인 | AI 에코시스템 표준, 기존 팀 역량 추정 |
| **Node.js / Go** | API Gateway, 빌링, 실시간 서비스 | 고성능 비동기 처리 (음성 스트리밍 등) |
| **React** | 관리자 패널, 셀프서비스 UI | **기존 보유** |
| **WebSocket / gRPC** | 실시간 통신 (Agent Assist, 통화 상태) | 양방향 실시간 데이터 필수 |
| **SIP/WebRTC** | 음성 통화 | **기존 보유** -- 보이스봇 엔진 일부 |

### 5.5 보안/컴플라이언스 레이어

| 기술 | 용도 | 이유 |
|------|------|------|
| **Keycloak** (또는 Auth0) | SSO, SAML/OIDC, RBAC | 금융 고객사 AD 연동 필수, 셀프호스팅 가능 |
| **HashiCorp Vault** | 시크릿 관리 | 금융 감사 대응 |
| **AWS KMS** | 암호화 키 관리 | 녹음 파일/개인정보 암호화 |
| **감사 로그 시스템** | 모든 관리 행위 로깅 | 금융 컴플라이언스 필수 (자체 구현) |
| **데이터 마스킹** | 개인정보 처리 | 통화 녹음 내 민감 정보 자동 마스킹 |

**금융 컴플라이언스 필수 요건 (Confidence: MEDIUM):**
- 전자금융감독규정 준수 (클라우드 이용 시 금융위 보고)
- 개인정보보호법 / 신용정보법 준수 (녹음 동의, 보관 기한)
- ISMS-P 인증 (SaaS 서비스 운영 시 권장/필수)
- 데이터 국내 저장 요건

### 5.6 모니터링/운영 레이어

| 기술 | 용도 | 이유 |
|------|------|------|
| **Prometheus + Grafana** | 메트릭 수집 + 시각화 | K8s 표준, 오픈소스 |
| **ELK Stack** (또는 Loki) | 로그 관리 | ES 기존 보유 활용 가능 |
| **Jaeger / OpenTelemetry** | 분산 트레이싱 | 마이크로서비스 디버깅 필수 |
| **PagerDuty / OpsGenie** | 알림/온콜 | SaaS SLA 보장 (99.9% 이상) |

---

## 6. 기존 보유 vs 신규 개발 명확 구분

```
[기존 보유 -- 강화]              [신규 개발]                    [구매/외부]
========================        ========================        ========================
보이스봇 코어 엔진               빌링/구독 관리 시스템           Stripe/토스페이먼츠 (결제)
Hybrid RAG 파이프라인            셀프 온보딩 플로우              Keycloak/Auth0 (SSO)
AX Product Manager               테넌트 프로비저닝 자동화        AWS (인프라)
멀티테넌시 기반                   Usage Metering                  SendGrid (이메일)
React 관리자 패널                 Agent Assist UI                 Vault (시크릿)
음성 인터페이스                   SLA 모니터링 대시보드           Datadog/Grafana (모니터링)
                                  셀프서비스 지식 관리 UI
                                  LLM Abstraction Layer
                                  감사 로그 시스템
                                  데이터 마스킹 엔진
```

---

## 7. 설치/구성 가이드라인 (SaaS 신규 컴포넌트)

```bash
# 빌링 관련
npm install stripe @stripe/stripe-js  # 글로벌
# 토스페이먼츠 SDK는 별도 연동

# 인증
# Keycloak: Docker 기반 배포 (셀프호스팅)
# 또는 Auth0 SaaS 사용 시 SDK:
npm install auth0 @auth0/nextjs-auth0

# 모니터링 (Python 서비스)
pip install opentelemetry-api opentelemetry-sdk prometheus-client

# LLM Abstraction
pip install litellm  # 멀티 LLM 라우팅
pip install openai anthropic  # 직접 연동 시

# 이벤트 스트리밍
# Kafka: AWS MSK 매니지드 사용 권장
pip install confluent-kafka  # Python producer/consumer

# IaC
npm install -g cdktf-cli  # Terraform CDK (TypeScript로 IaC 작성 가능)
```

---

## 8. 대안 검토

| 카테고리 | 권장 | 대안 | 대안 비채택 이유 |
|----------|------|------|----------------|
| 클라우드 | AWS | 네이버클라우드, GCP | AWS가 금융 클라우드 레퍼런스 최다, 글로벌 확장 용이 |
| LLM | GPT-4o + Claude | 자체 LLM | 비용/시간 비현실적, API가 충분 |
| Knowledge Graph | Neo4j | Amazon Neptune | Neo4j가 Cypher 생태계 성숙, 기존 보유 |
| 검색 엔진 | Elasticsearch | OpenSearch | ES 기존 보유, 마이그레이션 불필요 |
| 빌링 | Stripe + 토스 | 자체 구현 | PCI DSS 인증 부담, 시간 낭비 |
| SSO | Keycloak | Auth0 | Keycloak은 셀프호스팅으로 금융 규제 대응 용이. Auth0는 해외 SaaS라 데이터 이슈 가능 |
| 컨테이너 | EKS | ECS | EKS가 멀티테넌트 격리/스케일링에 유연 |
| IaC | Terraform | Pulumi, CDK | Terraform 에코시스템 성숙도 최고 |
| 이벤트 | Kafka (MSK) | SQS/SNS | Kafka가 Usage Metering 같은 고처리량 이벤트에 적합 |

---

## Confidence Assessment

| 영역 | Confidence | 근거 |
|------|-----------|------|
| 기존 보유 자산 분석 | HIGH | PROJECT.md에 명시된 정보 기반 |
| Hybrid RAG 차별화 | HIGH | 아키텍처 패턴은 잘 정립된 도메인 지식 |
| 경쟁사 기술 스택 | MEDIUM | 트레이닝 데이터 기반, 2025년 이후 변경 미반영 가능 |
| SaaS 전환 컴포넌트 | HIGH | CCaaS 전환 패턴은 산업 표준 |
| 구체적 버전/가격 | LOW | 웹 검색 미수행, 실제 적용 시 검증 필요 |
| 금융 컴플라이언스 요건 | MEDIUM | 한국 규제 세부사항은 법률 전문가 검증 필요 |

---

## Sources

- 트레이닝 데이터 기반 도메인 지식 (Genesys, 카카오엔터프라이즈, 솔트룩스 공개 정보)
- CCaaS 산업 표준 아키텍처 패턴
- RAG 아키텍처 논문 및 실무 패턴 (Elasticsearch + Knowledge Graph hybrid approach)
- **주의**: WebSearch/WebFetch 미사용으로 2025년 하반기 이후 경쟁사 변동사항 미반영 가능. 실제 적용 전 경쟁사 최신 동향 재확인 필요.
