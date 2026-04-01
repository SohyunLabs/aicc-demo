# Phase 1: Market Foundation - Context

**Gathered:** 2026-04-01
**Status:** Ready for planning

<domain>
## Phase Boundary

한국 AICC 시장 분석, 경쟁 구도, 차별화 포지셔닝을 확립하는 기초 문서 작성. 이 문서는 후속 모든 기획 문서(PRD, 가격 전략, UX, 로드맵)가 인용하는 데이터 기반이 된다. 요구사항: MKT-01, MKT-02, MKT-03.

</domain>

<decisions>
## Implementation Decisions

### 리서치 소스 전략
- 시점 기준: 2024-2025 최신 데이터 우선, 2023년 이전 자료는 트렌드 보조용으로만 활용
- 소스 유형: 공신력 리포트(Gartner, IDC, 과기부 보고서, 통신사 IR)를 기본 프레임으로, 뉴스/기사로 최신성 보강하는 혼합 방식
- 해외 데이터: 한국 AICC 시장이 주력, 글로벌(Genesys, Five9 등)은 벤치마크/비교 대상으로만 활용
- 인용 형식: 본문 내 각주 표기 + 문서 말미 출처 목록

### 문서 구조와 깊이
- 키 톤: 전략 제안서 (경영진/리더십 대상, 설득력 중심)
- 시각 자료: 비교표, 시장 규모 표, 포지셔닝 맵 등 텍스트/ASCII 목업 적극 활용
- 분량: 15-20페이지 수준
- 언어: 한국어 전용

### 경쟁사 분석 범위
- 한국 플레이어: KT, 카카오엔터프라이즈, 솔트룩스, 마인즈랩, SKT/LGU+ (5사) + 채널톡
- 글로벌 벤치마크: Genesys, Five9 등 2-3사
- 비교 축: 기능 + 과금모델(구축형/SaaS/성과기반) + 타겟 산업
- 약점 분석: 각 경쟁사의 약점/빈 공간을 데이터 기반으로 명시적 서술
- KT 69% 점유율: 위협이자 기회로 프레이밍 — 독점 구축형 의존도 높음 = SaaS 대안 수요 존재

### 차별화 논증 방식
- 핵심 프레임: White Space 분석 — 과금모델 x 컴플라이언스 2차원 포지셔닝 맵으로 경쟁사가 채우지 못한 빈 공간 시각화
- Perplexity 비유: 핵심 내러티브로 문서 초반에 배치 — "범용 LLM AICC vs 컴플라이언스 세이프 도메인 특화 AICC"
- 기술 깊이: 비즈니스 가치 중심 서술 (성과 지표로 논증, 기술 원리는 간략히)
- 산업별 페인포인트: 금융(잘못된 상품 안내), 보험(설명의무 위반), 이커머스(반품/교환 오안내) 구체적 시나리오 포함 → Phase 2 페르소나와 연결

### Claude's Discretion
- 문서의 세부 섹션 순서 및 흐름 구성
- 각 섹션별 구체적 분량 배분
- 시각 자료(표, 맵)의 세부 디자인
- 데이터 포인트 10개 이상 선별 기준

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### 프로젝트 정의
- `.planning/PROJECT.md` — 프로젝트 비전, 핵심 가치("틀리면 안 되는 상담"), 기존 자산 목록, 제약조건
- `.planning/REQUIREMENTS.md` — MKT-01(경쟁사 분석), MKT-02(시장 규모), MKT-03(차별화 요소) 상세 정의

### 로드맵
- `.planning/ROADMAP.md` — Phase 1 성공 기준 4항목, 후속 Phase 의존성

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- 이 프로젝트는 기획 문서 산출물이 목표 — 코드 자산 해당 없음

### Established Patterns
- Markdown 기반 문서 체계 (.planning/ 디렉토리 구조)
- 한국어 문서 + 영어 변수명 규칙 (CLAUDE.md)

### Integration Points
- Phase 1 산출물 → Phase 2(PRD), Phase 3(가격 전략)에서 데이터 인용
- 시장 규모/성장률 데이터는 Phase 3 가격 포지셔닝의 근거로 직접 사용
- 경쟁사 약점 분석은 Phase 2 차별화 기능 정의에 입력

</code_context>

<specifics>
## Specific Ideas

- "Perplexity vs ChatGPT" 비유를 문서 초반에 핵심 내러티브로 사용 — 비기술 바이어가 즉시 이해할 수 있는 프레이밍
- KT 69% 독점 구조를 "SaaS 전환 기회"로 재해석하는 전략적 시각
- 채널톡을 경쟁사에 포함 — 스타트업/SMB 세그먼트에서의 경쟁 인식
- 금융/보험/이커머스 각 산업의 "잘못된 상담이 만드는 실제 비용" 시나리오를 통해 컴플라이언스 엔진의 필요성 논증

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 01-market-foundation*
*Context gathered: 2026-04-01*
