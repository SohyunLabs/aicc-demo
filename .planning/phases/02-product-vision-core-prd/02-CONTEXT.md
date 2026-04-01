# Phase 2: Product Vision & Core PRD - Context

**Gathered:** 2026-04-02
**Status:** Ready for planning

<domain>
## Phase Boundary

제품의 정체성(누구를 위해, 무엇을, 왜)과 두 핵심 제품(보이스봇, Agent Assist)의 MVP 기능을 확정하는 PRD 문서 작성. 요구사항: PRD-01(비전/포지셔닝), PRD-02(페르소나), PRD-03(보이스봇 MVP), PRD-04(Agent Assist MVP). Phase 1 시장 분석 데이터를 근거로 활용하며, 이 문서는 Phase 3(가격 전략/우선순위), Phase 4(UX 와이어프레임)의 직접 입력이 된다.

</domain>

<decisions>
## Implementation Decisions

### 페르소나 깊이와 형식
- 프로필 카드형 포맷 — 역할/관심사/페인포인트/구매기준/성공지표를 구조화된 카드로 정리
- 산업별 2명(의사결정자 + 실무자), 총 6명 — 금융(CXO + CS센터장), 보험(CXO + CS센터장), 이커머스(CXO + CS센터장)
- 기본 3축(역할/페인포인트/구매기준) + 예산 규모 축 추가 — Phase 3 가격 전략과 연결
- 경쟁사 언급 포함 — 각 페르소나의 현재 사용 솔루션과 불만 명시 (e.g. "금융사 CXO는 현재 KT 구축형 사용 중, 높은 유지보수비에 불만")

### 보이스봇 MVP 기능 경계
- 공통 코어 + 산업 애드온 구조 — 모든 산업에 공통인 코어 기능(STT/TTS, RAG, 할루시네이션 가드) + 산업별 특화 모듈(금융 상품안내, 보험 설명의무, 이커머스 주문/반품)
- Day 1 필수 = 신뢰성 우선 — 출처 추적 응답 + 할루시네이션 가드 + 상담원 전환이 Day 1 필수. '틀리면 안 되는' 코어 밸류와 일치
- 기능 표현: 기능 명세 + 예시 대화 — 각 주요 기능을 설명 후 실제 상담 예시 대화로 동작 시연. e.g. "출처: 보험약관 제12조 → 상담원이 확인 가능"
- 기존 자산 간략 매핑 — 각 기능 옆에 '기존 자산 활용' vs '신규 개발' 표시. 상세는 Phase 3(PRD-05)에서

### Agent Assist 기능 범위
- 상담원 워크플로우 기준 정의 — 통화 전(고객 정보 자동 로드)/통화 중(실시간 전사, 요약, 추천 응답, 컴플라이언스 경고)/통화 후(요약 자동 저장, 후처리 자동화) 단계별 기능 배치
- 4대 기능 모두 MVP 필수 — 실시간 전사, 요약, 추천 응답, 컴플라이언스 경고 모두 Day 1 포함
- 컴플라이언스: 실시간 경고 + 규정 매핑 — 상담 중 규정 위반 감지 시 실시간 알림 + 해당 규정 조항 표시. 금융/보험에서 핵심 가치
- 보이스봇 연동 시나리오 포함 — 보이스봇이 처리 못한 콜 → 상담원 연결 시 Agent Assist가 맥락 자동 인수. 두 제품 간 시너지 시연

### PRD 문서 구조와 톤
- 통합 문서 1개 — PRD-01~04를 하나의 문서에 섹션으로 구성 (비전 → 페르소나 → 보이스봇 → Agent Assist). 전체 스토리가 하나로 연결
- 독자: 리더십/경영진 — 입사 과제 평가자 = PM 역량 판단하는 리더십. 전략적 사고 + 실행 가능성 균형
- Phase 1 핵심 데이터 직접 인용 — 시장 규모(3.5조원), KT 점유(69%), White Space 전략 등을 PRD 내에서 직접 인용. 독립적으로 읽혀야 함
- 분량: 10페이지 이하 — 간결하고 임팩트 있게. 핵심만 담아 밀도 높은 문서

### Claude's Discretion
- 문서 내 섹션 순서 및 흐름 (비전 → 페르소나 → 보이스봇 → Agent Assist 순서 내에서 세부 구성)
- 각 섹션별 구체적 분량 배분 (10페이지 이내 제약 하에서)
- 예시 대화 시나리오의 구체적 내용 (산업별 특성 반영)
- 기능 명세 표의 컬럼 구성
- 페르소나 카드의 비주얼 레이아웃

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### 프로젝트 정의
- `.planning/PROJECT.md` — 프로젝트 비전, 핵심 가치("틀리면 안 되는 상담"), 기존 자산 목록, 제약조건(3일 이내 제출)
- `.planning/REQUIREMENTS.md` — PRD-01(비전/포지셔닝), PRD-02(페르소나), PRD-03(보이스봇 MVP), PRD-04(Agent Assist MVP) 상세 정의

### Phase 1 산출물 (데이터 인용 근거)
- `.planning/phases/01-market-foundation/01-01-SUMMARY.md` — 시장 기회 + 경쟁 구도 분석 (시장 규모, KT 69% 점유, 경쟁사 약점)
- `.planning/phases/01-market-foundation/01-02-SUMMARY.md` — White Space 차별화 전략 + 전략적 시사점 (성과 기반 과금 x 컴플라이언스 복합 전략)

### 로드맵
- `.planning/ROADMAP.md` — Phase 2 성공 기준 5항목, Phase 3/4와의 의존성

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- 이 프로젝트는 기획 문서 산출물이 목표 — 코드 자산 해당 없음

### Established Patterns
- Markdown 기반 문서 체계 (.planning/ 디렉토리 구조)
- 한국어 문서 + 영어 변수명 규칙 (CLAUDE.md)
- Phase 1에서 확립한 전략 제안서 톤: 경영진 대상, 데이터 기반 논증, 시각 자료 활용
- 인용 형식: 본문 내 각주 + 문서 말미 출처 목록 (Phase 1에서 확립)

### Integration Points
- Phase 1 산출물(시장 분석) → Phase 2 PRD에서 핵심 데이터 직접 인용
- Phase 2 PRD → Phase 3(PRD-05 자산 매핑 상세화, PRD-06 우선순위, PRD-07 KPI, PRC 가격 전략)
- Phase 2 PRD → Phase 4(UX 와이어프레임의 기능 요구사항 입력)
- 페르소나의 예산 규모 축 → Phase 3 가격 전략 직접 연결

</code_context>

<specifics>
## Specific Ideas

- Perplexity 비유를 PRD 비전 섹션 초반에 배치 — "범용 LLM AICC(ChatGPT) vs 컴플라이언스 세이프 도메인 특화 AICC(Perplexity)" 프레이밍으로 비기술 바이어가 즉시 이해
- 보이스봇 출처 추적 예시: "출처: 보험약관 제12조 → 상담원이 확인 가능" 형태로 신뢰성 시연
- Agent Assist 보이스봇 연동 시나리오: 보이스봇 처리 불가 → 상담원 전환 시 맥락 자동 인수로 두 제품 시너지 표현
- Phase 1에서 확립한 산업별 페인포인트 시나리오(금융: 잘못된 상품안내, 보험: 설명의무 위반, 이커머스: 반품 오안내)를 페르소나와 직접 연결

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 02-product-vision-core-prd*
*Context gathered: 2026-04-02*
