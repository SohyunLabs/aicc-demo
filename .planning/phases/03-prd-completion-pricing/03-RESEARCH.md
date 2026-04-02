# Phase 3: PRD Completion & Pricing - Research

**Researched:** 2026-04-02
**Domain:** 제품 기획서 (자산 활용 계획, 우선순위 매트릭스, KPI 정의, 가격 전략) -- 기술 문서 작성
**Confidence:** HIGH

## Summary

Phase 3는 Phase 2에서 완성된 PRD(보이스봇/Agent Assist MVP 기능셋)를 기반으로, 실행 가능성(무엇을 새로 만들고, 무엇을 먼저 하고, 어떻게 측정하는지)과 수익 모델을 확정하는 기획 문서 작성 단계다. 코드 산출물이 아닌 전략 기획서 산출물이 목표이며, 6개 요구사항(PRD-05~07, PRC-01~03)을 하나의 통합 문서 또는 2개 문서(PRD 후반부 + 가격 전략)로 완성해야 한다.

핵심 연구 영역은 (1) Build/Enhance 이원화 프레임워크와 T-shirt 사이징 기준, (2) Impact x Effort 2축 우선순위 매트릭스의 산업 표준, (3) AICC 산업 KPI 벤치마크(해결률, AHT, CSAT 등) 목표치, (4) 성과 기반 과금(outcome-based pricing)의 글로벌 트렌드와 구체적 가격대, (5) 한국 경쟁사 가격 구조 벤치마크다. 연구 결과, 글로벌 AI 고객 서비스 시장에서 해결건당 과금($0.99~$2.00 레인지)이 급격히 확산 중이며, 한국 시장에는 아직 본격 도입된 사례가 없어 선점 기회가 명확하다.

**Primary recommendation:** Phase 2 PRD 문서(`docs/prd-core.md`)에 이어붙이는 방식으로 PRD-05~07을 추가하고, 가격 전략(PRC-01~03)은 별도 문서(`docs/pricing-strategy.md`)로 분리하여, PRD 완결성과 가격 전략 독립성을 모두 확보한다.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- Build/Enhance 이원화 -- Buy 옵션 없이, Build(새로 개발) vs Enhance(기존 자산 SaaS 전환/개선) 2축으로 분류
- 기능별 매트릭스 표 형식 -- 각 기능을 행으로, Build/Enhance + 기존 자산 매핑 + 개발 노력 추정을 열로 한 표
- 개발 노력: T-shirt 사이징 (S/M/L/XL) -- 기획서 단계에서 주/월 추정은 과도하므로 상대적 규모감으로 제시
- 기존 자산 범위: 5대 자산으로 한정 -- Hybrid RAG, 보이스봇 코어 엔진, AdminPanel(AX PM), 멀티테넌시, 채팅/음성 UI
- Impact x Effort 2축 매트릭스 -- 사업 임팩트(고객 가치 + 차별화 효과) vs 개발 노력(T-shirt)
- MVP 경계 기준: 'Day 1 신뢰성' -- MVP = '틀리면 안 되는' 코어 밸류 직결 기능
- 논거 보강: 산업 벤치마크 + 페르소나 페인포인트 연결
- 목표치 수준: 산업 평균 + 알파 (업계 벤치마크 기준, 뤼튼이 10-20% 초과)
- KPI 구조: 제품별 x 지표별 매트릭스 (보이스봇 / Agent Assist / 플랫폼)
- 측정 기간: 90일/180일/1년 3단계
- 벤치마크 인용: Gartner/업계 리포트 직접 인용
- '해결(resolution)' 정의: 다층 정의 -- 1) 보이스봇 완결 + 2) 상담원 보조 해결
- 구축형 vs SaaS 비교: 가상 시나리오 기반 (금융/보험/이커머스 3개 산업별 가상 고객사 TCO 비교)
- 경쟁사 비교 범위: 넓은 범위 -- KT, 카카오엔터프라이즈, 솔트룩스, Genesys, Sierra AI, Five9 등
- SaaS 요금제: 3티어 구조 -- Starter(중소/SMB) -> Professional(중견) -> Enterprise(대기업)
- 가격 수치: 구체적 가격대 제시 (산업 데이터 기반 추정)

### Claude's Discretion
- 감정 분석/품질 스코어링의 최종 Phase 배치 (매트릭스 논리 기반)
- 각 티어별 구체적 가격 포인트 산정
- 경쟁사 가격 데이터 확보 가능 범위 내 비교표 구성
- 문서 내 섹션 순서 및 세부 분량 배분
- KPI 벤치마크 데이터 포인트 선별

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| PRD-05 | 기존 자산 활용 계획 vs 신규 개발 범위 -- Build/Enhance 분류 | Phase 2 기능 매트릭스(20개 기능)의 자산 활용 현황 + Build/Enhance 프레임워크 + T-shirt 사이징 기준 |
| PRD-06 | 기능 우선순위 매트릭스 -- MVP/Phase 2/Future 분류 | Impact x Effort 프레임워크 + 산업 FCR/AHT 벤치마크 기반 우선순위 논거 + Day 1 신뢰성 기준 |
| PRD-07 | 성공 지표(KPI) 정의 -- 해결률, AHT 단축, CSAT, 온보딩 소요시간, 컴플라이언스 위반률 | 글로벌/한국 KPI 벤치마크 데이터 + 제품별 KPI 매핑 + 90일/180일/1년 단계별 목표치 |
| PRC-01 | 구축형 가격 구조 | 한국 구축형 AICC 비용 구조(초기 수억원+, 연 유지보수 10억원+) + KT/통신3사 가격 모델 |
| PRC-02 | SaaS형 가격 구조 -- 성과 기반 과금, "해결" 정의 기준 명시 | Sierra AI/Intercom/Zendesk/Salesforce 해결건당 과금 벤치마크 + 다층 해결 정의 + 3티어 설계 |
| PRC-03 | 경쟁력 있는 가격 포인트 근거 | Genesys($75-240/seat), Five9($119-299/seat), 카카오 센터플로우, 채널톡 가격 비교 데이터 |
</phase_requirements>

## Standard Stack

이 Phase는 코드가 아닌 기획 문서 산출물이므로, "Standard Stack"은 문서 작성 도구와 데이터 소스를 의미한다.

### Core
| 도구 | 용도 | 비고 |
|------|------|------|
| Markdown | 문서 작성 형식 | Phase 1/2 확립 패턴 유지 |
| MKT-DP 인용 체계 | Phase 1 데이터 포인트 참조 | `MKT-DP-XX 참조` 형태 |
| 각주 인용 형식 | 출처 표기 | Phase 1 확립: `[^N]` 본문 + 문서 말미 정의 |

### Supporting Data Sources
| 소스 | 신뢰도 | 활용 영역 |
|------|--------|----------|
| Gartner (2025) | HIGH | Agentic AI 80% 자동 해결 예측, 운영비 30% 감소 |
| SQM Group (2024) | HIGH | 산업별 FCR 벤치마크 (금융 71%, 보험 76%) |
| Sierra AI/Sacra | MEDIUM | 성과 기반 과금 ARR $150M, 과금 모델 구조 |
| Genesys 공식 가격표 | HIGH | 좌석당 $75-$240/월 4티어 |
| Five9 공식 가격 | HIGH | 좌석당 $119-$299/월 |
| Intercom Fin AI | HIGH | 해결건당 $0.99 |
| Zendesk AI | MEDIUM | 해결건당 $1.50 (정확한 모델 변동 가능) |
| Salesforce Agentforce | HIGH | $2/대화 -> $0.10/액션 진화, ARR $540M |

## Architecture Patterns

### 문서 산출 구조
```
docs/
├── market-analysis.md    # Phase 1 완성 (467줄)
├── prd-core.md           # Phase 2 완성 (315줄) -- PRD-01~04
├── prd-core.md (확장)    # Phase 3 Plan 1: PRD-05~07 추가
└── pricing-strategy.md   # Phase 3 Plan 2: PRC-01~03 (신규)
```

### Pattern 1: Build/Enhance 이원화 매트릭스
**What:** 20개 기능을 Build(신규 개발) vs Enhance(기존 자산 SaaS 전환) 2축으로 분류하고, 기존 5대 자산과의 매핑 + T-shirt 사이징을 표 형식으로 제시
**When to use:** 기존 기술 자산이 있고 SaaS 제품화할 때. Buy를 제외한 이유: 뤼튼이 핵심 기술을 이미 보유하고 있어 외부 구매보다 내부 활용이 전략적으로 우월
**Example:**
```markdown
| 기능 | 분류 | 기존 자산 | 개발 노력 | 근거 |
|------|------|----------|----------|------|
| STT/TTS 엔진 | Enhance | 보이스봇 코어 엔진 | S | 기존 엔진에 SaaS 멀티테넌시 래퍼 추가 |
| 할루시네이션 가드 | Build | - | L | 다층 검증 로직 신규 설계 필요 |
```
**핵심:** Phase 2에서 "기존 자산 6개, 기존 자산 확장 8개, 신규 개발 6개 -- 기존 자산 비율 70%(14/20)" 결론을 상세 매핑으로 검증

### Pattern 2: Impact x Effort 우선순위 매트릭스
**What:** 모든 기능을 사업 임팩트(High/Medium/Low) x 개발 노력(S/M/L/XL) 2축으로 평가하여 MVP/Phase 2/Future 분류
**When to use:** Day 1 신뢰성 기준으로 MVP 경계를 설정할 때
**배치 규칙:**
- **MVP (Day 1):** High Impact + S/M Effort, 또는 코어 밸류 직결 기능(노력 무관)
- **Phase 2:** High Impact + L/XL Effort, 또는 Medium Impact + S/M Effort (차별화 강화)
- **Future:** Low Impact, 또는 Medium Impact + L/XL Effort (Nice-to-have)

**감정 분석/품질 스코어링 배치 권고 (Claude's Discretion):**
- 감정 분석: **Phase 2** 권장 -- Medium Impact (수퍼바이저 알림, CX 개선), Build(신규 개발), L Effort. Day 1 신뢰성 직결은 아니나 차별화 강화 기능
- 품질 스코어링: **Phase 2** 권장 -- Medium-High Impact (전수 QA vs 3-5% 샘플링), Build(신규 개발), L Effort. 보험 페르소나 페인포인트와 직결되나 MVP 코어 밸류 외곽

### Pattern 3: 제품별 x 지표별 KPI 매트릭스
**What:** 보이스봇/Agent Assist/플랫폼 3개 제품축 x 5개 핵심 KPI를 교차하여 측정 방법/목표치/벤치마크 근거를 제시
**Example:**
```markdown
| 제품 | KPI | 산업 평균 | 90일 목표 | 180일 목표 | 1년 목표 | 측정 방법 |
|------|-----|----------|----------|-----------|---------|----------|
| 보이스봇 | 자동 해결률 | 30-50% | 35% | 50% | 65% | AI 완결 건수 / 전체 인입 건수 |
```

### Pattern 4: 가격 전략 비교 프레임워크
**What:** 구축형 vs SaaS 가격을 가상 고객사 시나리오로 TCO 비교, 3티어 SaaS 요금제 설계, 경쟁사 포지셔닝 맵
**Example:**
```markdown
| 구분 | 구축형 (KT 등) | SaaS Starter | SaaS Professional | SaaS Enterprise |
|------|---------------|-------------|-------------------|-----------------|
| 초기 비용 | 3-5억원 | 0원 | 0원 | 0원 |
| 월 비용 | - | ₩XX/건 | ₩XX/건 | 커스텀 |
```

### Anti-Patterns to Avoid
- **구체적 수치 없는 가격 전략:** "경쟁력 있는 가격"이라는 모호한 표현 대신, 건당 ₩XXX원 등 구체적 숫자 제시 필수 (CONTEXT.md 잠금 결정)
- **벤치마크 없는 KPI 목표치:** "해결률 향상"이 아닌 "산업 평균 70% 대비 목표 80%" 형태로 근거 제시
- **Phase 1/2와 단절된 논증:** 반드시 MKT-DP-XX 참조 형태로 앞선 문서의 데이터 포인트를 인용하여 일관성 유지
- **T-shirt 사이징을 주/월 추정으로 전환:** 기획서 단계에서 과도한 정밀도는 오히려 신뢰를 떨어뜨림

## Don't Hand-Roll

| 문제 | 직접 만들지 말 것 | 대신 사용할 것 | 이유 |
|------|-----------------|--------------|------|
| KPI 목표치 | 감으로 숫자 설정 | SQM Group/Gartner 벤치마크 인용 | 산업 데이터 기반이어야 평가자 설득력 확보 |
| 가격 포인트 | 자체 산정 | Intercom($0.99)/Zendesk($1.50)/Salesforce($2) 벤치마크 + 한국 시장 보정 | 글로벌 선례가 가격 합리성 근거 |
| 경쟁사 가격 비교 | 추정치만으로 | Genesys 공식 가격표($75-240), Five9 공식($119-299) 직접 인용 | 검증 가능한 공개 데이터 사용 |
| TCO 시나리오 | 단순 가격 나열 | 가상 고객사 (상담원 수, 월 상담 건수) 기반 3-5년 TCO 계산 | 구축형 vs SaaS의 교차점(break-even) 시각화 |

**Key insight:** PM 입사 과제에서 가격 전략의 설득력은 "얼마인가"보다 "왜 이 가격인가"의 논리 구조에서 나온다. 벤치마크 -> 포지셔닝 논리 -> 구체적 수치 순서로 제시해야 한다.

## Common Pitfalls

### Pitfall 1: 해결(Resolution) 정의의 모호성
**What goes wrong:** "해결"의 기준이 불명확하면 성과 기반 과금 전체가 무너진다. 고객사가 "해결인지 아닌지"를 놓고 분쟁하면 과금 모델 자체의 신뢰가 훼손된다.
**Why it happens:** Sierra AI도 공개적으로 해결 정의를 명확히 발표하지 않고 고객사별 맞춤 정의를 사용한다. Salesforce는 초기 $2/대화 모델이 "대화가 해결인지 아닌지" 판단 기준 문제로 실패하고 $0.10/액션 모델로 전환했다.
**How to avoid:** 다층 정의 (CONTEXT.md 잠금):
  1. **보이스봇 완결 해결:** AI가 상담원 개입 없이 고객 문의를 완전히 처리. 고객이 추가 문의 없이 통화 종료 + 24시간 내 동일 건 재문의 없음
  2. **상담원 보조 해결:** Agent Assist 지원으로 상담원이 처리. AHT 단축분(AI 미사용 대비)으로 가치 측정
  3. **미해결(에스컬레이션):** 과금 없음 -- Sierra AI와 동일 원칙
**Warning signs:** "해결률"과 "자동 해결률"을 구분하지 않고 혼용하는 경우

### Pitfall 2: 가격을 산업 맥락 없이 제시
**What goes wrong:** 건당 ₩1,000이라는 가격이 비싼지 싼지 평가자가 판단 불가
**Why it happens:** 가격만 나열하고 경쟁사/시장 맥락을 함께 제시하지 않을 때
**How to avoid:** 반드시 경쟁사 가격 포지셔닝 맵을 먼저 제시하고, 그 맵 위에 뤼튼의 위치를 논증한 후 구체적 가격 제시. "Genesys가 좌석당 월 $240(약 ₩32만원), 상담원 1인당 월 처리 건수 약 2,000건이면 건당 약 ₩160. 뤼튼 SaaS는 건당 ₩XX으로 약 XX% 절감" 형태
**Warning signs:** 가격표가 경쟁사 비교표보다 먼저 등장하는 경우

### Pitfall 3: KPI 목표가 비현실적이거나 보수적
**What goes wrong:** 너무 야심적 목표(해결률 90%)는 허풍으로, 너무 보수적 목표(해결률 30%)는 의지 부족으로 읽힘
**Why it happens:** 산업 벤치마크 없이 감으로 목표 설정
**How to avoid:** CONTEXT.md 결정: "산업 평균 + 알파(10-20% 초과)". 예: 금융 FCR 산업 평균 71% -> 뤼튼 목표 80-85% (Hybrid RAG 출처 추적이 정확도를 높이므로 합리적)
**Warning signs:** 목표치 옆에 벤치마크 출처가 없는 경우

### Pitfall 4: Build/Enhance 분류가 Phase 2 기능 매트릭스와 불일치
**What goes wrong:** Phase 2 PRD에서 "기존 자산" 표기된 기능이 Phase 3에서 "Build"로 바뀌면 문서 간 모순
**Why it happens:** Phase 2의 간략 매핑과 Phase 3의 상세 매핑 사이에 기준이 달라질 때
**How to avoid:** Phase 2 부록 기능 요약 매트릭스(20개 기능)를 원본으로 삼고, "기존 자산" -> Enhance, "신규 개발" -> Build로 1:1 대응 확인. 기존 자산 확장(8개)은 Enhance로 분류
**Warning signs:** Phase 2의 "자산 활용 비율 70%" 결론과 Phase 3 매핑 결과가 불일치하는 경우

### Pitfall 5: 구축형과 SaaS 비교가 편향적
**What goes wrong:** SaaS만 유리하게 보이도록 비교하면 평가자가 객관성을 의심
**Why it happens:** 뤼튼이 SaaS 모델이므로 SaaS를 옹호하려는 무의식적 편향
**How to avoid:** 구축형의 장점(보안 통제권, 커스터마이징 자유도, 대기업 선호)을 솔직히 인정하고, "그럼에도 불구하고 SaaS가 유리한 구간"을 TCO 교차점으로 논증. 대기업에겐 구축형이 여전히 유효할 수 있음을 인정하되, 중견/중소 시장에서의 SaaS 우위를 강조

## Code Examples

이 Phase는 코드 산출물이 아니므로, "Code Examples" 대신 문서 패턴 예시를 제공한다.

### 예시 1: T-shirt 사이징 기준 정의
```markdown
## T-shirt 사이징 기준

| 사이즈 | 상대적 규모 | 설명 |
|--------|-----------|------|
| S | 1-2주 | 기존 코드 래핑/설정 변경 수준. API 래퍼, UI 스킨 등 |
| M | 3-4주 | 기존 모듈 확장 + 일부 신규 로직. 데이터 모델 변경 포함 |
| L | 1-2개월 | 신규 엔진/시스템 설계. 아키텍처 결정 필요 |
| XL | 3개월+ | 핵심 인프라 수준 개발. 외부 파트너십/전문 인력 필요 |
```

### 예시 2: KPI 벤치마크 인용 패턴
```markdown
> **[KPI-BP-01]** 금융 산업 FCR(First Call Resolution) 산업 평균: **71%**
> -- 출처: SQM Group, Call Center FCR Benchmark 2024 Results by Industry (HIGH)

보이스봇 90일 목표: **78%** (산업 평균 대비 +7%p)
근거: Hybrid RAG 기반 출처 추적 응답이 오답률을 구조적으로 낮추므로, 범용 AI 대비 높은 FCR 달성이 기술적으로 가능
```

### 예시 3: 가격 포지셔닝 맵 (ASCII)
```markdown
  비용 수준
  (높음)
    │
    │  Genesys CX4 ($240/seat)
    │
    │  Five9 Ultimate ($299/seat)
    │
    │  KT 구축형 (수억원 초기)
    │
    │  Genesys CX1 ($75/seat)
    │               Five9 Digital ($119/seat)
    │
    │  뤼튼 Enterprise
    │  뤼튼 Professional        ← 성과 기반 과금 (건당)
    │  뤼튼 Starter
    │
    │  채널톡 (SaaS, 텍스트만)
  (낮음)
    └──────────────────────────────────────→
      구축형/좌석 기반          성과/SaaS 기반
```

### 예시 4: TCO 비교 시나리오 패턴
```markdown
### 시나리오: 중견 보험사 (상담원 200명, 월 상담 10만건)

| 항목 | 구축형 (KT 등) | 뤼튼 SaaS Professional |
|------|---------------|----------------------|
| 초기 투자 | 3-5억원 | 0원 |
| 연 유지보수 | 5,000만원-1억원 | 해결건당 과금에 포함 |
| 월 라이선스 | 200석 x ₩15만 = ₩3,000만 | - |
| 월 해결건당 | - | 5만건 x ₩1,XXX = ₩X,XXX만 |
| 1년 TCO | X억원 | X억원 |
| 3년 TCO | X억원 | X억원 |
| **Break-even** | - | **약 X개월** |
```

## State of the Art

### 과금 모델 진화 (2024-2026)

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| 좌석(seat) 기반 과금 | 해결(resolution) 건당 과금 | 2024-2025 | Sierra AI ARR $150M, Intercom Fin $0.99/건 |
| 대화(conversation) 기반 | 액션(action) 기반 | 2025 | Salesforce $2/대화 -> $0.10/액션 전환 |
| 월정액 구독 | 성과+소비 하이브리드 | 2025-2026 | Gartner: 2025까지 30%+ SaaS가 성과 요소 포함 |

### 글로벌 해결건당 과금 가격대 (2025-2026 기준)

| 벤더 | 과금 모델 | 가격대 | 비고 |
|------|----------|--------|------|
| Intercom Fin AI | 해결건당 | **$0.99/건** | 텍스트 기반, 지식베이스 기반 자동 해결 |
| Zendesk AI | 해결건당 | **$1.50/건** (기본) / $2.00 (종량) | 자동 해결 건 |
| Gorgias | 해결건당 | **$0.60-$1.27/건** | 티어별 차등 |
| Salesforce Agentforce | 액션당 | **$0.10/액션** ($2/대화에서 전환) | ARR $540M |
| Sierra AI | 해결건당 | 비공개 (연 $150K+, 셋업 $50K) | 엔터프라이즈 맞춤 |

**한국 시장 보정 필요 사항:**
- 위 가격은 텍스트 채널 기반. 보이스 채널은 STT/TTS 비용이 추가되므로 건당 단가가 높아짐
- 한국 인건비(상담원 평균 월 250-350만원)와 기존 구축형 비용 구조를 기준으로 ROI 산정
- 원화 환산 시 $1 = ₩1,350 기준, $0.99 -> 약 ₩1,340. 보이스 채널 프리미엄 감안 시 ₩1,500-3,000/건 레인지 추정

### 경쟁사 가격 구조 벤치마크 (검증된 데이터)

| 경쟁사 | 과금 모델 | 가격 | 출처 | 신뢰도 |
|--------|----------|------|------|--------|
| Genesys CX1 | 좌석/월 | $75/user/month | Genesys 공식 | HIGH |
| Genesys CX2 | 좌석/월 | $115/user/month | Genesys 공식 | HIGH |
| Genesys CX3 | 좌석/월 | $155/user/month | Genesys 공식 | HIGH |
| Genesys CX4 | 좌석/월 | $240/user/month | Genesys 공식 | HIGH |
| Five9 Digital | 좌석/월 | $119/user/month | Five9 공식 | HIGH |
| Five9 Core | 좌석/월 | $119/user/month | Five9 공식 | HIGH |
| Five9 Premium+ | 좌석/월 | $149-299/user/month | Five9 공식 | HIGH |
| KT 구축형 | SI 프로젝트 | 수억원 초기 + 연 유지보수 | 산업 보도 | MEDIUM |
| KT 에이센 클라우드 | 구독형 | 비공개 (채널/상담사 수 기준) | KT Enterprise | LOW |
| 카카오 센터플로우 | 구독형 | 비공개 (채널 수 + 부가 과금) | 카카오 공식 | LOW |
| 채널톡 | SaaS 구독 | 비공개 (텍스트 기반) | 채널톡 공식 | LOW |
| Sierra AI | 해결건당 | 연 $150K+, 셋업 $50K | Quiq/Sacra | MEDIUM |

### KPI 산업 벤치마크 데이터 (2024-2026)

| KPI | 산업 평균 | 금융 | 보험 | 이커머스 | 출처 | 신뢰도 |
|-----|----------|------|------|---------|------|--------|
| FCR (First Call Resolution) | 69-70% | 71% | 76% | 73-75% | SQM Group 2024 | HIGH |
| World-class FCR | 80%+ | - | - | - | SQM Group | HIGH |
| AHT (Average Handle Time) | 6분10초-8분30초 | 복잡 (금융상품) | 복잡 (약관) | 보통 | Lorikeet/Plivo 2025 | MEDIUM |
| AI 활용 AHT 단축 | 15-30% | - | - | - | 복수 소스 2025 | MEDIUM |
| CSAT | 75-84% (양호) | - | - | - | CloudTalk 2026 | MEDIUM |
| World-class CSAT | 85%+ | - | - | - | CloudTalk 2026 | MEDIUM |
| AI 자동 해결률 | 30-50% | - | - | - | Lorikeet/McKinsey | HIGH |
| 통화 포기율 (양호) | 2-5% | - | - | - | Nextiva 2026 | MEDIUM |
| 비용/건 (자동) | $1.84 | - | - | - | Gartner | HIGH |
| 비용/건 (상담원) | $13.50 | - | - | - | Gartner | HIGH |
| 상담원 온보딩 기간 | 3-6주 (초기) | 복잡 | 복잡 | 보통 | Seismic/NICE 2025 | MEDIUM |
| 상담원 완전 숙련 | 90일-6개월 | - | - | - | Balto/ScreenSteps | MEDIUM |

**Gartner 핵심 예측 (HIGH confidence):**
- 2029년까지 Agentic AI가 고객 서비스 이슈의 80%를 자동 해결 (MKT-DP-14)
- AI 도입 시 운영비 30% 감소 (MKT-DP-14)
- 셀프서비스 건당 비용 $1.84 vs 상담원 지원 건당 $13.50 (약 7.3배 차이)

**KT Skylife 사례 (한국 실증, MEDIUM confidence):**
- AICC 도입 후 응답률 87.7% -> 93.3% (+5.6%p)
- 대기시간 8.5% 감소
- 상담시간 6.4% 단축
(출처: MKT-DP-13)

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | 수동 검증 (기획 문서 산출물) |
| Config file | none |
| Quick run command | `diff` / 문서 구조 검증 |
| Full suite command | ROADMAP.md 성공 기준 5항목 대조 |

### Phase Requirements -> Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| PRD-05 | 20개 기능 Build/Enhance 분류 + 5대 자산 매핑 + T-shirt 사이징 | manual-only | Phase 2 기능 매트릭스 대조 | Wave 0 |
| PRD-06 | Impact x Effort 매트릭스 + MVP/Phase 2/Future 분류 | manual-only | Day 1 필수 기능 대조 | Wave 0 |
| PRD-07 | 제품별 KPI + 벤치마크 + 90/180/365일 목표치 | manual-only | 벤치마크 출처 검증 | Wave 0 |
| PRC-01 | 구축형 가격 구조 | manual-only | 시장 데이터 대조 | Wave 0 |
| PRC-02 | SaaS 성과 기반 과금 + "해결" 정의 + 3티어 | manual-only | Sierra AI 벤치마크 대조 | Wave 0 |
| PRC-03 | 경쟁사 가격 포지셔닝 비교 | manual-only | 공개 가격 데이터 대조 | Wave 0 |

### Sampling Rate
- **Per task commit:** ROADMAP 성공 기준 해당 항목 확인
- **Per wave merge:** 전체 성공 기준 5항목 확인
- **Phase gate:** 5개 성공 기준 모두 PASS + 문서 간 일관성(Phase 1/2 참조 정합성)

### Wave 0 Gaps
- [ ] `docs/prd-core.md` 확장 부분(PRD-05~07) -- Phase 2 문서에 섹션 추가
- [ ] `docs/pricing-strategy.md` -- 가격 전략 신규 문서

## Open Questions

1. **한국 경쟁사(KT, 카카오, 채널톡)의 구체적 가격 데이터**
   - What we know: KT 구축형은 "수억원 초기 + 연 유지보수", 에이센 클라우드는 구독형이나 가격 비공개. 카카오 센터플로우는 채널 수 기반 과금이나 구체적 단가 비공개. 채널톡은 SaaS 구독이나 가격 비공개.
   - What's unclear: 한국 시장 경쟁사의 정확한 좌석당/건당 가격. 공개 데이터가 제한적.
   - Recommendation: 구체적 가격 미확보 경쟁사는 "비공개" 표기하고, 확보 가능한 글로벌 벤치마크(Genesys, Five9)를 중심으로 포지셔닝. KT 구축형은 PRD에 이미 "연 10억원+ 유지보수" (Phase 2 prd-core.md)로 기술되어 있으므로 이를 기준점으로 활용.

2. **보이스 채널 해결건당 과금의 적정 가격대**
   - What we know: 텍스트 채널 기준 $0.99-$2.00/건. 보이스는 STT/TTS 비용 추가. Poly.ai가 약 $0.95/분.
   - What's unclear: 한국 보이스 AICC에서 해결건당 과금의 적정 가격대. 상담 1건 평균 4-7분이면 Poly.ai 기준 $3.80-$6.65/건.
   - Recommendation: 텍스트 채널 벤치마크를 하한선, 보이스 인프라 비용을 가산하여 ₩1,500-5,000/건 레인지에서 티어별 차등 설정. 정확한 가격 포인트는 Claude's Discretion.

3. **컴플라이언스 위반률의 산업 벤치마크 부재**
   - What we know: 금융/보험 컴플라이언스 위반에 대한 규제 벌금 데이터는 있으나, 컨택센터 수준의 "통화당 컴플라이언스 위반률" 벤치마크는 발견되지 않음.
   - What's unclear: 컨택센터에서 설명의무 위반, 불완전판매 등의 발생률 산업 평균.
   - Recommendation: 보험 페르소나의 "전체 통화의 3-5%만 검사 가능" (Phase 2 PRD)을 역으로 활용. "현재 3-5% 샘플링 -> AI 전수 검사로 전환" 자체가 KPI. 위반률 목표보다 검사 커버리지(100% 전수 vs 3-5% 샘플링)를 KPI로 설정하는 것이 더 측정 가능.

## Sources

### Primary (HIGH confidence)
- [SQM Group] - 산업별 FCR 벤치마크 2024 (금융 71%, 보험 76%, 리테일 73-75%)
  https://www.sqmgroup.com/resources/library/blog/call-center-fcr-benchmark-2024-results-by-industry
- [Gartner 2025] - Agentic AI 80% 자동 해결 예측, 건당 비용 $1.84 vs $13.50
  https://www.gartner.com/en/newsroom/press-releases/2025-03-05-gartner-predicts-agentic-ai-will-autonomously-resolve-80-percent-of-common-customer-service-issues-without-human-intervention-by-20290
- [Genesys 공식 가격] - CX1 $75, CX2 $115, CX3 $155, CX4 $240/user/month
  https://www.genesys.com/pricing
- [Five9 공식 가격] - Digital/Core $119, Premium+ $149-299/user/month
  https://www.five9.com/products/pricing
- [Salesforce Agentforce] - $2/대화 -> $0.10/액션 전환, ARR $540M
  https://www.salesforce.com/agentforce/pricing/
- [Sierra AI 공식] - 성과 기반 과금 모델 정의
  https://sierra.ai/blog/outcome-based-pricing-for-ai-agents
- [Lorikeet CX 2026] - 종합 벤치마크 (FCR 70-85%, AHT 4-7분, CSAT 85%+, 자동 해결률 30-50%)
  https://www.lorikeetcx.ai/articles/contact-center-benchmarks

### Secondary (MEDIUM confidence)
- [Sacra/Quiq] - Sierra AI 가격 추정 (연 $150K+, 셋업 $50K), ARR $150M
  https://quiq.com/blog/sierra-ai-pricing/
- [Intercom] - Fin AI $0.99/해결건 (복수 비교 리뷰 확인)
- [Zendesk] - AI 자동 해결 $1.50/건 (복수 비교 리뷰 확인)
- [KT Enterprise] - 에이센 클라우드 구독형 서비스
  https://enterprise.kt.com/pd/P_PD_AI_CC_002.do
- [뉴스프라임] - KT 2025 AICC 매출 목표 3,000억원
  https://www.newsprime.co.kr/news/article/?no=724727
- [Freshworks 2025] - AI ROI 통계 (AHT 15-30% 단축, 운영비 30-50% 절감)
  https://www.freshworks.com/How-AI-is-unlocking-ROI-in-customer-service/

### Tertiary (LOW confidence)
- [한국 경쟁사 구체적 가격] - KT/카카오/채널톡의 정확한 좌석당/건당 가격은 비공개. 산업 보도 기반 간접 추정만 가능.
- [보이스 채널 해결건당 적정 가격] - 텍스트 채널 벤치마크에서 보이스 채널로의 가격 보정은 추정치. Poly.ai $0.95/분이 유일한 보이스 특화 참조점.

## Metadata

**Confidence breakdown:**
- Standard stack (문서 패턴): HIGH - Phase 1/2 확립 패턴 + CONTEXT.md 결정사항이 명확
- Architecture (문서 구조): HIGH - 6개 요구사항의 구조와 관계가 CONTEXT.md에서 잠금
- KPI 벤치마크: HIGH - SQM Group, Gartner 등 공신력 소스 다수 확보
- 가격 전략 글로벌: HIGH - Genesys/Five9/Intercom/Salesforce 공식 가격 확보
- 가격 전략 한국: MEDIUM - KT/카카오/채널톡 구체적 가격 비공개, 간접 추정 의존
- 해결 정의: MEDIUM - Sierra AI 모델 참조 가능하나 한국 보이스 채널 맞춤 정의 필요

**Research date:** 2026-04-02
**Valid until:** 2026-05-02 (가격 데이터는 분기별 변동 가능, 벤치마크 데이터는 연간 안정)
