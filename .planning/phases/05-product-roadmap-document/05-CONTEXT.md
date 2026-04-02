# Phase 5: Product Roadmap Document - Context

**Gathered:** 2026-04-02
**Status:** Ready for planning

<domain>
## Phase Boundary

기획서의 마지막 퍼즐로, Phase 1~4의 모든 산출물(시장 분석, PRD, 가격 전략, UX 와이어프레임)을 종합하여 실행 가능한 제품 출시 계획을 완성한다. 요구사항: RM-01(Phase별 기능 배포 계획, 개발 리소스 가정 포함), RM-02(타임라인 및 의존성/리스크 정의). 성과 과금 및 컴플라이언스 엔진이 Phase 1(MVP)에 반드시 포함되어야 한다.

</domain>

<decisions>
## Implementation Decisions

### Phase 구분과 리소스 가정
- 3단계 Phase 구분: MVP → 확장 → 고도화 — Phase 3 PRD-06의 MVP/Phase 2/Future 분류와 직접 매핑
- 가상 팀 구성 명시 — 역할별 인원 배치(예: 백엔드 3명, 프론트 2명, AI/ML 2명, QA 1명) 가정으로 PM 역량 시연
- T-shirt → 주 단위 매핑: S=1-2주, M=3-4주, L=6-8주, XL=10-12주 — Phase 3 T-shirt 사이징을 가상 팀 기준 대략적 주수로 전환
- MVP Phase 범위: Phase 3 PRD-06 기준 그대로 — Day 1 신뢰성 기준 + Build 6개(L Effort) 강제 포함. 성과 과금 + 컴플라이언스 엔진 MVP Phase 1 포함

### 의존성 그래프 표현
- ASCII 플로우차트 — 노드-엣지 형태로 기능 모듈 간 선후 관계 시각화. Phase 4 고밀도 ASCII 표현과 일관성 유지
- 기능 모듈 단위 — 보이스봇 코어, Agent Assist, 컴플라이언스 엔진, 성과 과금, 온보딩 등 PRD 기능셋 단위로 그래프 구성
- Build/Enhance 구분 표시 — 각 노드에 [Build] / [Enhance] 태그 표시. Phase 3 PRD-05 자산 활용 계획과 직접 연결

### 리스크 매트릭스
- 기술/시장/조직 3차원 분류 — 기술 리스크(LLM 할루시네이션, 음성 인식 정확도), 시장 리스크(KT 독점, 규제), 조직 리스크(인력, 역량). 다차원 사고 시연
- 3x3 그리드 + 상세 표 — 발생 확률(높/중/낮) x 영향도(높/중/낮) ASCII 그리드로 전체 조감 + 개별 리스크 상세 표
- 완화 전략 + 담당/트리거 — 각 리스크에 대해 완화 전략 + 담당 역할 + 트리거 조건(언제 발동되는지) 명시. 실행 가능성 시연

### 타임라인과 마일스톤
- ASCII 간트 차트 — 월별 타임라인에 기능 모듈을 바 형태로 배치. Phase 4 고밀도 ASCII 표현과 일관
- 월 단위 기간 — MVP 6-9개월 등 월별 스프린트 배치. PM 과제에서 적절한 상세도
- KPI 목표치 연결 — 각 마일스톤에 Phase 3 KPI(90일/180일/1년 목표치) 매핑. PRD→로드맵 전체 스토리 일관성
- 총 분량 8-12페이지 — Phase 2 PRD(10페이지 이하)와 유사한 밀도. 간결하고 임팩트 있는 로드맵

### Claude's Discretion
- 가상 팀 구성의 구체적 인원수와 역할 배분
- 3단계 Phase 각각의 구체적 기간(월수) 산정
- ASCII 간트 차트와 의존성 그래프의 구체적 레이아웃
- 리스크 항목 선별 및 우선순위
- 문서 내 섹션 순서 및 세부 분량 배분
- 각 마일스톤의 구체적 산출물 명세

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### 프로젝트 정의
- `.planning/PROJECT.md` — 프로젝트 비전, 핵심 가치("틀리면 안 되는 상담"), 기존 자산 목록, 제약조건(3일 이내 제출)
- `.planning/REQUIREMENTS.md` — RM-01(Phase별 기능 배포 계획), RM-02(타임라인/의존성/리스크) 상세 정의

### Phase 1 산출물 (시장 데이터 — 리스크/기회 근거)
- `docs/market-analysis.md` — 시장 규모(3.5조원), KT 69% 점유, 경쟁사 분석, White Space 차별화 전략

### Phase 2 산출물 (기능 정의 — 의존성 그래프 입력)
- `docs/prd-core.md` — 보이스봇 MVP 기능셋(공통 코어 + 산업 애드온), Agent Assist MVP 기능셋, 보이스봇-Agent Assist 연동 시나리오
- `.planning/phases/02-product-vision-core-prd/02-CONTEXT.md` — 보이스봇/Agent Assist 기능 경계 결정, 기존 자산 70% 활용 추정

### Phase 3 산출물 (자산 매핑 + 우선순위 + KPI + 가격 — 로드맵 핵심 입력)
- `docs/pricing-strategy.md` — 3티어 가격 구조, 성과 기반 과금 단가, TCO 비교 시나리오
- `.planning/phases/03-prd-completion-pricing/03-CONTEXT.md` — Build/Enhance 분류, T-shirt 사이징, MVP 경계 'Day 1 신뢰성', KPI 90일/180일/1년 목표, 감정 분석 Phase 2 배치

### Phase 4 산출물 (UX — 개발 공수 추정 참고)
- `docs/ux-wireframes.md` — 관리 콘솔, Agent Assist, 셀프 온보딩 와이어프레임. UI 복잡도 기반 개발 공수 추정 근거
- `.planning/phases/04-ux-wireframes/04-CONTEXT.md` — 시나리오 빌더 비주얼 플로우, 3칸럼 Agent Assist, 6스텝 온보딩 위자드

### 로드맵
- `.planning/ROADMAP.md` — Phase 5 성공 기준 4항목, 전체 Phase 의존성 구조

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- 이 프로젝트는 기획 문서 산출물이 목표 — 코드 자산 해당 없음

### Established Patterns
- Markdown 기반 문서 체계 (.planning/ 디렉토리 구조)
- 한국어 문서 + 영어 변수명 규칙 (CLAUDE.md)
- 전략 제안서 톤: 경영진 대상, 데이터 기반 논증, 시각 자료(비교표/포지셔닝 맵) 활용 (Phase 1/2/3/4 확립)
- 인용 형식: 본문 내 각주([MKT-DP-XX]) + 문서 말미 출처 목록 (Phase 1 확립)
- 통합 문서 1개 내 섹션 구분 방식 (Phase 2 확립)
- 고밀도 ASCII 시각화 (Phase 4 확립 — 간트 차트/의존성 그래프에 동일 수준 적용)

### Integration Points
- Phase 3 PRD-05 자산 매핑(Build/Enhance) → 의존성 그래프 노드 태그
- Phase 3 PRD-06 우선순위 매트릭스(MVP/Phase 2/Future) → 3단계 Phase 범위
- Phase 3 PRD-07 KPI(90일/180일/1년) → 마일스톤 성공 기준
- Phase 3 가격 전략(3티어, 성과 기반) → MVP Phase 1 필수 포함
- Phase 4 UX 와이어프레임 → UI 복잡도 기반 개발 공수 추정
- Phase 1 시장 분석(경쟁 구도, 규제) → 리스크 매트릭스 시장 리스크 항목

</code_context>

<specifics>
## Specific Ideas

- Phase 3의 MVP/Phase 2/Future 분류를 로드맵 3단계와 1:1 매핑 — PRD와 로드맵의 일관성이 평가자에게 전체 스토리 연결력 시연
- 의존성 그래프에 [Build]/[Enhance] 태그 — PRD-05 자산 활용 계획의 시각적 요약 역할도 수행
- 리스크 매트릭스에 KT 69% 독점, LLM 할루시네이션, 컴플라이언스 규제 등 Phase 1 시장 분석에서 식별된 핵심 리스크 직접 반영
- KPI 목표치(90일/180일/1년)를 마일스톤에 매핑하여 "언제 어떤 수치를 달성하는지" 한눈에 보이게 — PRD→KPI→로드맵 전체 연결

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 05-product-roadmap-document*
*Context gathered: 2026-04-02*
