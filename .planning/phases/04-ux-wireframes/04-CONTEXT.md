# Phase 4: UX Wireframes - Context

**Gathered:** 2026-04-02
**Status:** Ready for planning

<domain>
## Phase Boundary

세 가지 핵심 화면(보이스봇 관리 콘솔, Agent Assist 실시간 보조, 셀프 온보딩)의 정보 구조와 사용자 플로우를 고밀도 ASCII 와이어프레임으로 설계한다. 요구사항: UX-01(관리 콘솔), UX-02(Agent Assist), UX-03(셀프 온보딩). Phase 2의 기능 정의와 Phase 3의 KPI/가격 전략을 시각적으로 구현하는 단계다. 최종 산출물은 PM 입사 과제 평가자(리더십)가 와이어프레임만으로 제품을 상상할 수 있는 수준이어야 한다.

</domain>

<decisions>
## Implementation Decisions

### 보이스봇 관리 콘솔 (UX-01)
- GNB 5대 영역: 대시보드 + 시나리오 빌더 + 모니터링 + 지식 관리 + 설정/관리자 — 엔터프라이즈 SaaS 관리 콘솔 기대치 반영
- 시나리오 빌더: 비주얼 플로우 빌더 (노드 기반) — 기존 AdminPanel(AX PM)의 텍스트 목록 대비 핵심 개선점. 시나리오를 노드-엣지 캔버스에서 시각적으로 구성
- 모니터링 대시보드: 핵심 4개 KPI 카드(해결률, AHT 단축, CSAT, 컴플라이언스 위반률) — Phase 3 PRD-07에서 정의한 지표 직접 반영
- 지식 관리: 문서 업로드 + 토픽 관리 화면 — Hybrid RAG 내부 구조(Elasticsearch/Neo4j)는 사용자에게 노출하지 않고, 문서와 토픽 관점에서 관리

### Agent Assist 화면 (UX-02)
- 3칸럼 레이아웃: 좌(통화 전사/요약) | 중(추천 응답 + 컴플라이언스 경고) | 우(고객 정보 + 감정 분석) — 상담원 시선 흐름(좌→우)에 맞춘 배치
- 컴플라이언스 경고: 인라인 방식 — 전사 텍스트 옆에 빨간 하이라이트 + 추천 응답 영역에 해당 규정 조항 안내. 상담 흐름을 끊지 않으면서 대응 유도
- 보이스봇→상담원 맥락 인수: 전환 시 화면 상단에 '보이스봇 대화 요약' 카드 표시 — 고객 의도, 질문 내용, 보이스봇 응답 요약이 한눈에 보임

### 셀프 온보딩 (UX-03)
- 전체 플로우: 스텝 위자드 — 상단에 1→6 스텝 인디케이터, 각 단계는 독립 화면으로 와이어프레임
- 깊이 배분: 핵심 3단계 집중 — 산업 템플릿 선택, 시나리오 빌더(간이 버전), 테스트 콜을 상세 와이어프레임. 프로필 등록/문서 업로드/결제는 간략 표현
- 결제 화면: 3티어 비교 카드 — Starter/Professional/Enterprise를 나란히 배치, 각 티어의 포함 기능과 가격 비교 + 추천 티어 하이라이트
- 테스트 콜: 시뮬레이터 화면 — 통화 상태 표시 + AI 응답 확인 + 품질 피드백. '도입 전 검증' 경험이 셀프 온보딩의 핵심 차별화 포인트

### 와이어프레임 표현 수준
- 상세도: 고밀도 ASCII — 실제 필드명, 버튼 레이블, 데이터 예시값까지 포함. 평가자가 와이어프레임만으로 제품을 상상할 수 있는 수준
- 태스크 주석: 번호 마커(①②③) + 하단 태스크 설명 — 각 화면의 핵심 사용자 태스크와 정보 계층을 즉시 파악 가능
- 문서 형태: 원 파일 내 3개 화면(UX-01, UX-02, UX-03)을 섹션으로 분리. 각 섹션에 목적/와이어프레임/태스크 설명 포함

### Claude's Discretion
- 각 화면의 구체적 ASCII 박스 레이아웃과 칸 크기 비율
- 설정/관리자 영역의 세부 구성
- 대시보드 내 차트/그래프의 구체적 표현 방식
- 각 화면 내 빈 상태(empty state) 처리
- 온보딩 간략 단계(프로필, 문서 업로드)의 표현 수준

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### 프로젝트 정의
- `.planning/PROJECT.md` — 프로젝트 비전, 핵심 가치("틀리면 안 되는 상담"), 기존 자산 목록, 제약조건(3일 이내 제출, ASCII 목업 수준)
- `.planning/REQUIREMENTS.md` — UX-01(관리 콘솔), UX-02(Agent Assist), UX-03(셀프 온보딩) 상세 정의

### Phase 2 산출물 (기능 정의 — 와이어프레임의 직접 입력)
- `docs/prd-core.md` — 보이스봇 MVP 기능셋(공통 코어 + 산업 애드온), Agent Assist MVP 기능셋(통화 전/중/후 워크플로우), 보이스봇-Agent Assist 연동 시나리오
- `.planning/phases/02-product-vision-core-prd/02-CONTEXT.md` — 보이스봇/Agent Assist 기능 경계 결정, 기존 자산 70% 활용 추정

### Phase 3 산출물 (KPI + 가격 전략 — 모니터링/결제 화면 입력)
- `docs/pricing-strategy.md` — 3티어 가격 구조(Starter/Professional/Enterprise), 성과 기반 과금 단가, TCO 비교 시나리오
- `.planning/phases/03-prd-completion-pricing/03-CONTEXT.md` — KPI 정의(해결률, AHT, CSAT, 컴플라이언스 위반률), 측정 기간 90일/180일/1년

### Phase 1 산출물 (시장 분석 — 포지셔닝 참고)
- `docs/market-analysis.md` — 시장 규모, 경쟁사 분석, White Space 차별화 전략

### 로드맵
- `.planning/ROADMAP.md` — Phase 4 성공 기준 4항목, Phase 5 의존성

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- 이 프로젝트는 기획 문서 산출물이 목표 — 코드 자산 해당 없음

### Established Patterns
- Markdown 기반 문서 체계 (.planning/ 디렉토리 구조)
- 한국어 문서 + 영어 변수명 규칙 (CLAUDE.md)
- 전략 제안서 톤: 경영진 대상, 데이터 기반 논증, 시각 자료(비교표/포지셔닝 맵) 활용 (Phase 1/2/3 확립)
- 인용 형식: 본문 내 각주([MKT-DP-XX]) + 문서 말미 출처 목록 (Phase 1 확립)
- 통합 문서 1개 내 섹션 구분 방식 (Phase 2 확립)

### Integration Points
- Phase 2 PRD(`docs/prd-core.md`)의 기능 목록 → 각 화면의 UI 요소 직접 매핑
- Phase 3 KPI 정의 → 모니터링 대시보드의 KPI 카드 구성
- Phase 3 가격 3티어 → 셀프 온보딩 결제 화면의 티어 비교 카드
- Phase 4 와이어프레임 → Phase 5 로드맵 문서에서 화면 참조 (UI 복잡도 기반 개발 공수 추정)

</code_context>

<specifics>
## Specific Ideas

- 시나리오 빌더를 비주얼 플로우 빌더(노드-엣지 캔버스)로 구현 — 기존 AdminPanel의 텍스트 기반 프롬프트/토픽 관리 대비 직관적 개선을 시각적으로 보여주는 것이 Phase 4의 핵심 차별화
- Agent Assist의 컴플라이언스 경고를 인라인으로 처리 — 모달 팝업으로 상담 흐름을 끊지 않으면서 규정 위반을 감지하고 대응을 유도하는 UX가 "틀리면 안 되는 상담" 코어 밸류를 화면에서 직접 시연
- 셀프 온보딩의 테스트 콜 시뮬레이터 — 고객사가 돈을 내기 전에 AI 품질을 직접 확인하는 경험. 구축형(6-12개월 PoC) 대비 SaaS 셀프 온보딩의 가장 극적인 차별화 장면
- 고밀도 ASCII + 번호 태스크 주석 — 평가자가 와이어프레임만 보고도 "이 제품이 무엇을 하는지, 사용자가 어떤 흐름으로 쓰는지" 즉시 파악 가능한 수준

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 04-ux-wireframes*
*Context gathered: 2026-04-02*
