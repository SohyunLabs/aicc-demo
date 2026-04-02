# Phase 3: PRD Completion & Pricing - Context

**Gathered:** 2026-04-02
**Status:** Ready for planning

<domain>
## Phase Boundary

PRD의 실행 가능성(무엇을 새로 만들고, 무엇을 먼저 하고, 어떻게 측정하는지)과 수익 모델이 완성된다. 요구사항: PRD-05(자산 활용 계획), PRD-06(우선순위 매트릭스), PRD-07(KPI 정의), PRC-01(구축형 가격), PRC-02(SaaS 성과 기반 과금), PRC-03(경쟁사 가격 대비 포지셔닝). Phase 2의 제품 비전과 기능 정의를 기반으로, 실행 계획과 비즈니스 모델을 완성하는 단계다.

</domain>

<decisions>
## Implementation Decisions

### 자산 활용 계획 (PRD-05)
- Build/Enhance 이원화 — Buy 옵션 없이, Build(새로 개발) vs Enhance(기존 자산 SaaS 전환/개선) 2축으로 분류
- 기능별 매트릭스 표 형식 — 각 기능을 행으로, Build/Enhance + 기존 자산 매핑 + 개발 노력 추정을 열로 한 표
- 개발 노력: T-shirt 사이징 (S/M/L/XL) — 기획서 단계에서 주/월 추정은 과도하므로 상대적 규모감으로 제시
- 기존 자산 범위: 5대 자산으로 한정 — Hybrid RAG, 보이스봇 코어 엔진, AdminPanel(AX PM), 멀티테넌시, 채팅/음성 UI. Phase 2에서 추정한 ~70% 활용 비율을 상세 매핑으로 검증

### 기능 우선순위 (PRD-06)
- Impact x Effort 2축 매트릭스 — 사업 임팩트(고객 가치 + 차별화 효과) vs 개발 노력(T-shirt). 직관적이고 평가자가 바로 판단 가능
- MVP 경계 기준: 'Day 1 신뢰성' — MVP = '틀리면 안 되는' 코어 밸류 직결 기능. Phase 2 = 차별화 강화. Future = Nice-to-have. 코어 밸류와 일관된 기준
- 논거 보강: 산업 벤치마크 + 페르소나 페인포인트 연결 — Phase 1 시장 데이터 + Phase 2 페르소나 구매 기준을 근거로 제시하여 앞선 문서와의 일관성 확보
- 감정 분석/품질 스코어링 배치: Claude's Discretion — Phase 2에서 "MVP 포함 but Day 1 필수 제외"로 보류된 기능. 매트릭스 논리에 따라 Phase 2 또는 Future에 배치

### 성공 지표 KPI (PRD-07)
- 목표치 수준: 산업 평균 + 알파 — 업계 벤치마크를 기준점으로, 뤼튼이 10-20% 초과하는 목표 설정. 야심적이되 현실적
- KPI 구조: 제품별 x 지표별 매트릭스 — 보이스봇 / Agent Assist / 플랫폼 각각에 해결률, AHT 단축, CSAT, 온보딩 소요시간, 컴플라이언스 위반률 등 별도 KPI 설정
- 측정 기간: 90일/180일/1년 3단계 — MVP 출시 후 90일(조기 검증) → 180일(안정화) → 1년(성숙 목표). 제품 성장 단계별 목표 차등화
- 벤치마크 인용: Gartner/업계 리포트 직접 인용 — 출처 기반 신뢰도 확보 (Phase 1 인용 형식 유지)

### 가격 전략 (PRC-01~03)
- '해결(resolution)' 정의: 다층 정의 — 1) 보이스봇 완결(AI가 상담원 없이 해결) + 2) 상담원 보조 해결(Agent Assist로 AHT 단축). 제품별로 다른 과금 단위. Sierra AI 벤치마크 활용
- 구축형 vs SaaS 비교: 가상 시나리오 기반 — 금융/보험/이커머스 3개 산업별 가상 고객사 TCO 비교. '구축형 X억 vs SaaS 월Y만원' 형태로 직관적 설득력
- 경쟁사 비교 범위: 넓은 범위 — KT, 카카오엔터프라이즈, 솔트룩스, Genesys, Sierra AI, Five9 등 다양한 경쟁사. 고객사 규모(대기업/중견/중소/SMB/스타트업)별 가격 포지셔닝 차등 고려
- SaaS 요금제: 3티어 구조 — Starter(중소/SMB) → Professional(중견) → Enterprise(대기업). 각 티어마다 해결건당 단가와 포함 기능 차등화
- 가격 수치: 구체적 가격대 제시 — 산업 데이터 기반 추정으로 건당 단가, 월 예상 비용 등 구체적 수치 포함. PM 과제에서 가격 감각 시연

### Claude's Discretion
- 감정 분석/품질 스코어링의 최종 Phase 배치 (매트릭스 논리 기반)
- 각 티어별 구체적 가격 포인트 산정
- 경쟁사 가격 데이터 확보 가능 범위 내 비교표 구성
- 문서 내 섹션 순서 및 세부 분량 배분
- KPI 벤치마크 데이터 포인트 선별

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### 프로젝트 정의
- `.planning/PROJECT.md` — 프로젝트 비전, 핵심 가치("틀리면 안 되는 상담"), 기존 자산 목록, 제약조건(3일 이내 제출)
- `.planning/REQUIREMENTS.md` — PRD-05(자산 활용), PRD-06(우선순위), PRD-07(KPI), PRC-01~03(가격 전략) 상세 정의

### Phase 1 산출물 (시장 데이터 인용 근거)
- `.planning/phases/01-market-foundation/01-01-SUMMARY.md` — 시장 규모(3.5조원), KT 69% 점유, 경쟁사 약점 분석
- `.planning/phases/01-market-foundation/01-02-SUMMARY.md` — White Space 차별화 전략, 성과 기반 과금 x 컴플라이언스 복합 전략

### Phase 2 산출물 (기능 정의 + 자산 간략 매핑)
- `.planning/phases/02-product-vision-core-prd/02-CONTEXT.md` — PRD 문서 구조 결정, 보이스봇/Agent Assist 기능 경계, 기존 자산 70% 활용 추정
- `docs/prd-core.md` — 완성된 PRD 문서(비전/포지셔닝, 페르소나, 보이스봇 MVP, Agent Assist MVP). Phase 3 자산 매핑과 우선순위의 직접 입력

### 로드맵
- `.planning/ROADMAP.md` — Phase 3 성공 기준 5항목, Phase 4/5와의 의존성

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- 이 프로젝트는 기획 문서 산출물이 목표 — 코드 자산 해당 없음

### Established Patterns
- Markdown 기반 문서 체계 (.planning/ 디렉토리 구조)
- 한국어 문서 + 영어 변수명 규칙 (CLAUDE.md)
- 전략 제안서 톤: 경영진 대상, 데이터 기반 논증, 시각 자료(비교표/포지셔닝 맵) 활용 (Phase 1/2 확립)
- 인용 형식: 본문 내 각주([MKT-DP-XX]) + 문서 말미 출처 목록 (Phase 1 확립)
- 통합 문서 1개 내 섹션 구분 방식 (Phase 2 확립)

### Integration Points
- Phase 2 PRD(`docs/prd-core.md`)의 기능 목록 → PRD-05 자산 매핑, PRD-06 우선순위의 직접 입력
- Phase 1 시장 데이터 → PRD-06 논거, PRC-03 경쟁사 가격 포지셔닝 근거
- Phase 2 페르소나의 예산 규모 축 → PRC 가격 전략 직접 연결
- Phase 3 KPI → Phase 5 로드맵 마일스톤 성공 기준으로 연결
- Phase 3 가격 전략 → Phase 4 셀프 온보딩 UX에서 가격 표시 화면에 반영

</code_context>

<specifics>
## Specific Ideas

- 고객사 규모별(대기업/중견/중소/SMB/스타트업) 가격 차등화를 가격 전략의 핵심 축으로 설정 — 단순 SaaS 요금표가 아닌 세그먼트별 TCO 시나리오
- 'Day 1 신뢰성' 기준으로 MVP 경계를 잡아 코어 밸류("틀리면 안 되는 상담")와의 일관성 유지
- Sierra AI의 ARR $150M 성과 기반 과금 모델을 주요 벤치마크로 활용
- 보이스봇 완결 해결 vs 상담원 보조 해결의 이중 과금 단위 — 두 제품의 가치를 각각 측정
- Phase 1에서 확립한 Perplexity 비유의 '출처 기반 신뢰성'이 KPI(컴플라이언스 위반률)로 직접 측정 가능하게 연결

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 03-prd-completion-pricing*
*Context gathered: 2026-04-02*
