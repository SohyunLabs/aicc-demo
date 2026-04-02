# Phase 4: UX Wireframes - Research

**Researched:** 2026-04-02
**Domain:** 고밀도 ASCII 와이어프레임 기획 문서 (AICC SaaS 관리 콘솔, Agent Assist, 셀프 온보딩)
**Confidence:** HIGH

## Summary

Phase 4의 산출물은 코드가 아니라 마크다운 기획 문서다. 세 가지 핵심 화면(보이스봇 관리 콘솔, Agent Assist 실시간 보조, 셀프 온보딩)의 정보 구조와 사용자 플로우를 고밀도 ASCII 와이어프레임으로 설계한다. CONTEXT.md에서 모든 주요 결정(GNB 5영역, 3칸럼 Agent Assist, 6스텝 온보딩 위자드)이 확정되었으며, UI-SPEC.md에서 레이아웃 구조, 카피라이팅, 주석 규약까지 정의되었다.

핵심 도전은 "평가자가 와이어프레임만 보고도 제품을 상상할 수 있는 수준"의 고밀도 ASCII를 만드는 것이다. Phase 2의 PRD 기능 목록을 UI 요소로 1:1 매핑하고, Phase 3의 KPI/가격 데이터를 실제 예시값으로 채워넣어야 한다. 기존 AdminPanel(텍스트 기반 프롬프트/토픽 관리) 대비 비주얼 플로우 빌더(노드-엣지 캔버스)로의 개선을 시각적으로 보여주는 것이 UX-01의 핵심 차별화 포인트다.

**Primary recommendation:** UI-SPEC.md의 레이아웃 계약과 카피라이팅 계약을 엄격히 따르면서, PRD/가격 전략 문서의 구체적 데이터를 와이어프레임에 직접 반영한다. 단일 마크다운 파일(`docs/ux-wireframes.md`)에 3개 화면을 섹션으로 분리하여 작성한다.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- GNB 5대 영역: 대시보드 + 시나리오 빌더 + 모니터링 + 지식 관리 + 설정/관리자 -- 엔터프라이즈 SaaS 관리 콘솔 기대치 반영
- 시나리오 빌더: 비주얼 플로우 빌더 (노드 기반) -- 기존 AdminPanel(AX PM)의 텍스트 목록 대비 핵심 개선점. 시나리오를 노드-엣지 캔버스에서 시각적으로 구성
- 모니터링 대시보드: 핵심 4개 KPI 카드(해결률, AHT 단축, CSAT, 컴플라이언스 위반률) -- Phase 3 PRD-07에서 정의한 지표 직접 반영
- 지식 관리: 문서 업로드 + 토픽 관리 화면 -- Hybrid RAG 내부 구조(Elasticsearch/Neo4j)는 사용자에게 노출하지 않고, 문서와 토픽 관점에서 관리
- Agent Assist 3칸럼 레이아웃: 좌(통화 전사/요약) | 중(추천 응답 + 컴플라이언스 경고) | 우(고객 정보 + 감정 분석) -- 상담원 시선 흐름(좌->우)에 맞춘 배치
- 컴플라이언스 경고: 인라인 방식 -- 전사 텍스트 옆에 빨간 하이라이트 + 추천 응답 영역에 해당 규정 조항 안내
- 보이스봇->상담원 맥락 인수: 전환 시 화면 상단에 '보이스봇 대화 요약' 카드 표시
- 셀프 온보딩: 스텝 위자드 -- 상단에 1->6 스텝 인디케이터, 각 단계는 독립 화면
- 깊이 배분: 핵심 3단계 집중 -- 산업 템플릿 선택, 시나리오 빌더(간이 버전), 테스트 콜을 상세 와이어프레임. 프로필 등록/문서 업로드/결제는 간략 표현
- 결제 화면: 3티어 비교 카드 -- Starter/Professional/Enterprise를 나란히 배치
- 테스트 콜: 시뮬레이터 화면 -- 통화 상태 표시 + AI 응답 확인 + 품질 피드백
- 상세도: 고밀도 ASCII -- 실제 필드명, 버튼 레이블, 데이터 예시값까지 포함
- 태스크 주석: 번호 마커(1)(2)(3) + 하단 태스크 설명
- 문서 형태: 원 파일 내 3개 화면(UX-01, UX-02, UX-03)을 섹션으로 분리

### Claude's Discretion
- 각 화면의 구체적 ASCII 박스 레이아웃과 칸 크기 비율
- 설정/관리자 영역의 세부 구성
- 대시보드 내 차트/그래프의 구체적 표현 방식
- 각 화면 내 빈 상태(empty state) 처리
- 온보딩 간략 단계(프로필, 문서 업로드)의 표현 수준

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| UX-01 | 보이스봇 관리 콘솔 와이어프레임 -- 기존 AdminPanel 제품 수준 개선, 시나리오 빌더/모니터링/지식 관리 | GNB 5영역 정의 완료, 시나리오 빌더 노드 유형 4가지 확정, KPI 카드 4개 데이터 확정, 지식 관리 문서/토픽 2탭 구조. UI-SPEC의 레이아웃 계약(사이드바 240px + flex-1 메인)과 노드 유형 정의가 직접 구현 가이드 |
| UX-02 | Agent Assist 실시간 보조 화면 -- 실시간 통화 요약/추천 응답/고객 정보 패널/감정 분석/컴플라이언스 경고 | 3칸럼 레이아웃(30%/40%/30%) 확정, 상담원 시선 흐름(좌->우) 기반 정보 배치 패턴, 인라인 컴플라이언스 경고 표현법, 보이스봇 맥락 인수 카드 위치/내용 정의. 업계 표준(Genesys multi-contextual panel)과 일치 |
| UX-03 | 고객사 셀프 온보딩 화면 -- 프로필 등록 > 산업 템플릿 > 문서 업로드 > 시나리오 빌더 > 테스트 콜 > 결제 플로우 | 6스텝 위자드 플로우 확정, 깊이 배분(상세 3단계 + 간략 3단계) 결정, 결제 3티어 데이터(pricing-strategy.md) 확보, 테스트 콜 시뮬레이터 핵심 요소 정의 |
</phase_requirements>

## Standard Stack

이 Phase의 산출물은 마크다운 기획 문서이므로, "라이브러리 설치"가 아닌 "문서 작성 규약과 입력 자료" 관점에서 정리한다.

### Core (입력 자료)
| 자료 | 위치 | 용도 | 중요도 |
|------|------|------|--------|
| UI-SPEC | `04-UI-SPEC.md` | 레이아웃 계약, 카피라이팅 계약, 주석 규약, 데이터 예시값 | 필수 -- 모든 와이어프레임이 이 계약을 따름 |
| PRD Core | `docs/prd-core.md` | 보이스봇 20개 기능 목록, Agent Assist 통화 전/중/후 워크플로우, 예시 대화 시나리오 | 필수 -- UI 요소 1:1 매핑 소스 |
| Pricing Strategy | `docs/pricing-strategy.md` | 3티어 가격 구조, TCO 비교, 해결 정의 | 필수 -- 결제 화면 데이터 소스 |
| CONTEXT.md | `04-CONTEXT.md` | 모든 locked decisions | 필수 -- 레이아웃/구조 결정사항 |

### Supporting (참고 자료)
| 자료 | 위치 | 용도 | 참조 시점 |
|------|------|------|----------|
| Market Analysis | `docs/market-analysis.md` | 경쟁사 대비 개선점 논증 | 관리 콘솔 "기존 대비 개선" 설명 시 |
| PROJECT.md | `.planning/PROJECT.md` | 코어 밸류, 기존 5대 자산 목록 | 와이어프레임 도입부 맥락 |
| Phase 3 CONTEXT | `03-CONTEXT.md` | KPI 정의, 측정 기간 3단계 | 모니터링 대시보드 KPI 카드 |

### 산출물 규격
| 항목 | 값 |
|------|-----|
| 파일 형식 | Markdown (.md) |
| 파일 위치 | `docs/ux-wireframes.md` |
| 와이어프레임 형식 | 고밀도 ASCII (Unicode box-drawing 또는 `+---+` 스타일) |
| 언어 | 한국어 (문서/주석/UI 라벨), 영어 (변수명은 해당 없음) |
| 섹션 구조 | UX-01, UX-02, UX-03 각각 독립 섹션 |

## Architecture Patterns

### Recommended Document Structure
```
docs/ux-wireframes.md
├── 도입부 (제품 개요, 와이어프레임 읽기 가이드, 주석 규약 설명)
├── UX-01: 보이스봇 관리 콘솔
│   ├── 목적 및 사용자
│   ├── 전체 GNB 구조 와이어프레임
│   ├── 대시보드 화면
│   ├── 시나리오 빌더 화면 (핵심 상세)
│   ├── 모니터링 대시보드 화면
│   ├── 지식 관리 화면
│   ├── (설정 -- 간략)
│   └── 태스크 설명
├── UX-02: Agent Assist 실시간 보조 화면
│   ├── 목적 및 사용자
│   ├── 3칸럼 레이아웃 와이어프레임
│   ├── 보이스봇 맥락 인수 시나리오
│   ├── 컴플라이언스 경고 인라인 시나리오
│   └── 태스크 설명
├── UX-03: 셀프 온보딩
│   ├── 목적 및 사용자
│   ├── 전체 플로우 개요
│   ├── Step 1: 프로필 등록 (간략)
│   ├── Step 2: 산업 템플릿 선택 (상세)
│   ├── Step 3: 문서 업로드 (간략)
│   ├── Step 4: 시나리오 빌더 간이 버전 (상세)
│   ├── Step 5: 테스트 콜 시뮬레이터 (상세)
│   ├── Step 6: 결제/플랜 선택 (상세)
│   └── 태스크 설명
└── 부록: 기존 AdminPanel 대비 개선 요약
```

### Pattern 1: 고밀도 ASCII 와이어프레임 작성 패턴

**What:** 모든 와이어프레임은 실제 필드명, 버튼 레이블, 데이터 예시값을 포함하여 "읽는 것만으로 제품을 이해"할 수 있는 수준으로 작성
**When to use:** 모든 화면
**Example:**
```
+--사이드바 (240px)--+--메인 콘텐츠-------------------------------+
| [로고] 뤼튼 AICC   | 대시보드 > 모니터링                         |
| =================== | ============================================ |
|                     | +--해결률--+ +--AHT----+ +--CSAT--+ +--컴플--+|
| (i) 대시보드        | | (1)      | |  (2)    | |  (3)   | |  (4)   ||
| (*) 시나리오 빌더   | | 65%      | | -25%    | | 83점   | | 0.3%   ||
| ( ) 모니터링        | | +3%p ↑   | | 기준선  | | +2점   | | 전수   ||
| ( ) 지식 관리       | | [차트]   | | 6분10초 | | [차트] | | [차트] ||
| ( ) 설정            | +----------+ +---------+ +--------+ +--------+|
|                     |                                               |
|                     | 실시간 통화 목록                              |
|                     | +--------------------------------------------+|
|                     | | 시각  | 고객 | 유형       | 상태    | 소요  ||
|                     | |-------|------|------------|---------|-------||
|                     | | 14:32 | 김OO | 적금 해지  | AI완결  | 1:42 ||
|                     | | 14:28 | 이OO | 면책조항   | 보조해결| 4:15 ||
|                     | +--------------------------------------------+|
+---------------------+-----------------------------------------------+
```

### Pattern 2: 태스크 번호 마커 + 하단 설명 패턴

**What:** 와이어프레임 내부에 (1)(2)(3) 번호를 배치하고, 와이어프레임 아래에 각 번호의 사용자 태스크를 설명
**When to use:** 모든 화면의 핵심 인터랙션 포인트
**Example:**
```
[와이어프레임 내부에 (1), (2), (3) 마커 배치]

**핵심 사용자 태스크:**
1. (1) 해결률 KPI 카드에서 현재 성과와 목표 대비 달성도를 즉시 확인한다
2. (2) AHT 단축률에서 AI 도입 전후의 통화 시간 변화를 파악한다
3. (3) CSAT 점수 추이에서 고객 만족도 트렌드를 모니터링한다
```

### Pattern 3: 기존 대비 개선 대조 패턴

**What:** UX-01에서 기존 AdminPanel(AX PM)의 한계를 명시하고, 새 와이어프레임이 어떻게 개선하는지를 대조
**When to use:** 시나리오 빌더 화면 (핵심 차별화 포인트)
**Example:**
```
기존 AdminPanel: 텍스트 기반 프롬프트/토픽 목록 → 시나리오 전체 흐름 파악 불가
→ 개선: 비주얼 노드-엣지 캔버스에서 시나리오 흐름을 한눈에 파악하고 드래그로 편집
```

### Anti-Patterns to Avoid

- **저밀도 와이어프레임:** 빈 박스에 "여기에 차트" 같은 placeholder만 넣는 것. 반드시 실제 데이터 예시값(65%, ₩2,000/건 등)을 채워야 한다
- **코드 수준 상세:** HTML/CSS 속성이나 컴포넌트 prop을 와이어프레임에 넣는 것. 이것은 기획 문서이지 개발 스펙이 아니다
- **기능 나열식 와이어프레임:** 기능 목록을 나열하는 것이 아니라, 사용자가 화면을 보며 수행하는 태스크 흐름을 보여줘야 한다
- **PRD와 중복되는 기능 설명:** 기능의 "왜"는 PRD에 있다. 와이어프레임은 "어디에, 어떤 형태로"만 보여준다
- **과도한 상태 분기:** 빈 상태, 에러 상태 등을 모든 화면에 상세 기술하면 문서가 비대해진다. 핵심 화면의 기본 상태에 집중하고, empty state는 UI-SPEC의 카피를 참조하는 정도로 간략 처리

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| 와이어프레임 데이터 예시값 | 임의 숫자 생성 | PRD-07 KPI 정의 + pricing-strategy.md 가격표 | 내부 일관성: 기획서 전체에서 동일 숫자가 반복되어야 평가자 신뢰 확보 |
| 레이아웃 구조 | 자유형 레이아웃 | UI-SPEC.md의 레이아웃 계약 | CONTEXT.md에서 확정된 결정사항을 UI-SPEC이 구체화함 |
| 카피라이팅 | 즉흥 UI 텍스트 | UI-SPEC.md Copywriting Contract | CTA, 에러 메시지, empty state 카피가 이미 확정됨 |
| 주석 규약 | 임의 표기법 | UI-SPEC.md Wireframe Annotation Convention | (1)(2)(3), [버튼], [*CTA*], [!경고!] 등 표기법 확정됨 |
| 노드 유형 정의 | 새로운 노드 유형 | UI-SPEC.md 시나리오 빌더 노드 유형 4가지 | 시작(원형)/의도 분류(마름모)/응답(사각형)/상담원 전환(육각형)/종료(이중 원) |
| 결제 3티어 데이터 | 새로운 가격 | pricing-strategy.md 2.2절 3티어 SaaS 요금제 | Starter ₩2,500, Professional ₩2,000, Enterprise 커스텀 -- 확정 데이터 |

**Key insight:** Phase 4의 와이어프레임은 Phase 2(기능 정의)와 Phase 3(KPI/가격)의 시각적 구현이다. 새로운 정보를 만드는 것이 아니라 기존 결정사항을 화면으로 옮기는 작업이므로, 상위 문서의 데이터를 정확히 인용하는 것이 핵심이다.

## Common Pitfalls

### Pitfall 1: 데이터 불일치
**What goes wrong:** 와이어프레임의 KPI 숫자나 가격이 PRD/가격 전략 문서와 다른 값을 사용
**Why it happens:** 여러 문서를 참조하면서 수치를 기억에 의존하여 기재
**How to avoid:** UI-SPEC.md의 "Data Examples" 섹션에 이미 정의된 예시값을 그대로 사용. KPI 카드 예시(해결률 65%, AHT -25%, CSAT 83점, 컴플라이언스 0.3%), 결제 3티어 가격(₩2,500/₩2,000/커스텀)
**Warning signs:** 와이어프레임 완성 후 PRD/가격 문서와 숫자 교차 검증 시 불일치 발견

### Pitfall 2: 정보 과부하
**What goes wrong:** 하나의 와이어프레임에 모든 기능, 모든 상태, 모든 엣지 케이스를 담으려다 읽기 어려워짐
**Why it happens:** "고밀도"를 "모든 것을 넣는 것"으로 오해
**How to avoid:** "고밀도"는 "핵심 태스크의 구체적 표현"을 의미. 각 화면당 핵심 태스크 3-5개에 집중하고, 부수적 기능(설정, 에러 처리)은 텍스트 설명으로 보완. CONTEXT.md의 깊이 배분(상세 3단계 + 간략 3단계) 결정을 따름
**Warning signs:** 하나의 ASCII 와이어프레임이 화면 너비를 초과하여 줄바꿈되거나, 텍스트가 겹침

### Pitfall 3: 기존 대비 개선점 미흡
**What goes wrong:** 시나리오 빌더 와이어프레임이 기존 AdminPanel 대비 무엇이 개선되었는지 명시하지 않음
**Why it happens:** 평가자가 기존 AdminPanel을 알고 있다고 가정하거나, 개선점을 별도 섹션으로 분리하지 않음
**How to avoid:** 시나리오 빌더 화면에 "기존 AdminPanel: 텍스트 목록" vs "신규: 비주얼 노드 캔버스" 대조를 명시적으로 포함. 이것이 Phase 4 성공 기준 1번("기존 AdminPanel 대비 개선점이 드러난다")의 핵심
**Warning signs:** 와이어프레임을 보고 "이게 기존과 뭐가 다른지" 질문이 나올 수 있는 상태

### Pitfall 4: 플로우 연결 누락
**What goes wrong:** 셀프 온보딩의 6단계가 각각 독립적으로 보이고, 단계 간 전환의 조건이나 흐름이 불명확
**Why it happens:** 각 스텝의 UI를 개별적으로 설계하고, 전체 플로우를 조감하는 다이어그램을 빠뜨림
**How to avoid:** 문서 상단에 전체 플로우 다이어그램([1]-->[2]-->[3]-->[4]-->[5]-->[6])을 배치하고, 각 스텝 와이어프레임에 스텝 인디케이터를 포함
**Warning signs:** 독자가 "이 단계 다음에 뭐가 오지?" 질문을 해야 하는 상태

### Pitfall 5: Agent Assist 시선 흐름 무시
**What goes wrong:** 3칸럼에 정보를 배치하되 상담원의 실제 업무 흐름과 맞지 않는 배치
**Why it happens:** 좌->우 시선 흐름이 아닌 기능 카테고리 기반으로 배치
**How to avoid:** CONTEXT.md 확정 배치를 엄격히 따름. 좌(지금 무슨 대화가 오가는지) -> 중(뭘 해야 하는지) -> 우(참고 맥락). 가장 긴급한 정보(전사)가 가장 먼저 눈에 들어오는 위치에
**Warning signs:** 추천 응답이 우측에 있거나 고객 정보가 좌측에 있는 등 시선 흐름과 불일치

## Code Examples

이 Phase의 산출물은 코드가 아니라 마크다운 문서이므로, "코드 예시" 대신 "와이어프레임 작성 예시"를 제공한다.

### 고밀도 KPI 카드 와이어프레임 작성 예시
```
+--해결률--------------------+
| (1)                        |
|  [== 65% ==]               |
|  목표 대비 +3%p ↑          |
|  [---■■■■■■■□□□---] 70%    |
|  ┌─최근 7일 추이──────┐    |
|  │  ╱╲  ╱╲            │    |
|  │╱    ╲╱  ╲──        │    |
|  └────────────────────┘    |
+----------------------------+
```
Source: UI-SPEC.md Data Examples + PRD-07 KPI 정의

### Agent Assist 인라인 컴플라이언스 경고 예시
```
+--실시간 전사 (좌측 패널)-----+
| 고객: "이 보험에 암 진단비가 |
|       포함되어 있나요?"      |
| 상담원: "네, 1차 암 진단 시  |
|         2,000만원..."        |
| [!! 설명의무 누락 !!]        |
| (면책조항 미설명 감지)        |
+------------------------------+

+--컴플라이언스 경고 (중앙 패널)-+
| [!] 보험업법 제95조 위반 감지  |
|     면책조항 제22조 참조:      |
|     면책 기간(90일) 설명 필요  |
|     [경고 확인] [해당 조항 보기]|
+--------------------------------+
```
Source: UI-SPEC.md Copywriting Contract + PRD Section 4.2 컴플라이언스 경고 기능 정의

### 시나리오 빌더 노드 캔버스 예시
```
   (시작)
     |
     v
"안녕하세요, 뤼튼
 AI 상담원입니다"
     |
     v
  /의도 분류\
 / 어떤 문의  \
/   인가요?    \
\              /
 \            /
  +----+----+----+
  |    |    |    |
  v    v    v    v
[적금] [대출] [카드] [기타]
  |
  v
+--적금 응답---------+
| RAG: 정기적금       |
| 상품설명서 기반 응답 |
| (출처: 제8조)       |
+--------------------+
  |
  v
 ((종료))
```
Source: UI-SPEC.md 시나리오 빌더 노드 유형 정의 + PRD Section 3.3 예시 대화

### 결제 3티어 비교 카드 예시
```
+--Starter--------+--*Professional*----+--Enterprise------+
| 중소/SMB         | >>>추천<<<          | 대기업            |
| 상담원 10-50명   | 상담원 50-200명     | 상담원 200명+     |
|                  |                     |                  |
| 보이스봇         | 보이스봇             | 보이스봇          |
| ₩2,500/건       | ₩2,000/건           | 커스텀 (₩1,500~) |
|                  |                     |                  |
| Agent Assist     | Agent Assist        | Agent Assist     |
| ₩800/건         | ₩600/건             | 커스텀 (₩400~)   |
|                  |                     |                  |
| 미해결건 ₩0     | 미해결건 ₩0         | 미해결건 ₩0      |
|                  |                     |                  |
| 보이스봇 코어    | + 산업 특화 모듈     | + 전용 인프라     |
|                  | + 컴플라이언스 엔진  | + SLA 99.95%     |
|                  |                     | + 전담 CSM       |
|                  |                     |                  |
| 월 최소 ₩50만   | 월 최소 ₩200만      | 별도 협의         |
|                  |                     |                  |
| [Starter 플랜    | [*Professional 플랜 | [Enterprise 도입  |
|  시작]           |  시작*]             |  문의]            |
+------------------+---------------------+------------------+
```
Source: pricing-strategy.md 2.2절 + UI-SPEC.md Copywriting Contract

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| 텍스트 기반 시나리오 관리 (프롬프트 목록) | 비주얼 노드-엣지 캔버스 플로우 빌더 | 2023-2025 (Voiceflow, HighLevel 등) | 비기술 사용자도 시나리오 흐름을 시각적으로 이해/편집 가능 |
| 단일 패널 상담원 화면 (탭 전환) | 다중 컨텍스트 패널 동시 표시 | 2024-2025 (Genesys multi-contextual panels) | 상담원이 통화 중 여러 정보를 동시에 참조, 탭 전환 없이 워크플로우 유지 |
| 구축형 PoC (6-12개월) | 셀프서비스 온보딩 위자드 (수일-수주) | 2024-2025 (SaaS PLG 트렌드) | 고객사가 스스로 설정/테스트하여 가치를 확인한 후 결제 |
| 수동 QA 샘플링 (3-5%) | AI 기반 전수 실시간 모니터링 | 2024-2025 (Level AI, NICE 등) | 모든 통화를 실시간 분석하여 컴플라이언스 위반 사전 차단 |
| 고해상도 Figma 목업 | ASCII/텍스트 와이어프레임 (AI 친화적) | 2024-2025 (Mockdown, BareMinimum) | 버전 관리 가능, AI 도구로 바로 구현 가능, 구조에 집중 |

**Deprecated/outdated:**
- 단일 탭 기반 Agent Desktop: Genesys가 2025년 8월에 legacy 인터페이스를 공식 폐기하고 multi-contextual panel로 전환 -- 다중 패널 동시 표시가 업계 표준
- 전체 화면 모달 팝업 경고: 상담 흐름을 끊는 모달 방식은 인라인 경고로 대체되는 추세

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | 수동 검증 (기획 문서 산출물) |
| Config file | none |
| Quick run command | N/A -- 문서 리뷰 기반 |
| Full suite command | N/A -- 성공 기준 4항목 체크리스트 기반 |

### Phase Requirements -> Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| UX-01 | 관리 콘솔 와이어프레임이 시나리오 빌더, 모니터링, 지식 관리 영역 포함 + 기존 AdminPanel 대비 개선점 | manual-only | 문서 내 GNB 5영역 존재 여부 + "기존 대비 개선" 섹션 존재 확인 | -- |
| UX-02 | Agent Assist가 5개 기능(통화 요약, 추천 응답, 고객 정보, 감정 분석, 컴플라이언스 경고)을 하나의 화면에 배치 | manual-only | 문서 내 3칸럼 레이아웃에 5개 요소 배치 확인 | -- |
| UX-03 | 셀프 온보딩이 프로필 등록~결제까지 전체 플로우를 단계별로 표현 | manual-only | 문서 내 6스텝 각각의 와이어프레임 존재 확인 | -- |

### Sampling Rate
- **Per task commit:** 해당 요구사항의 와이어프레임 + 태스크 주석 완성도 확인
- **Per wave merge:** 전체 3개 화면의 데이터 일관성 교차 검증 (PRD/가격 문서 대조)
- **Phase gate:** 성공 기준 4항목 전체 충족 확인

### Wave 0 Gaps
None -- 기획 문서 산출물이므로 테스트 인프라 불필요. 검증은 성공 기준 체크리스트 기반.

## Open Questions

1. **ASCII 와이어프레임의 가로 폭 제한**
   - What we know: 마크다운의 코드 블록은 가로 스크롤이 가능하지만, 읽기 편의성을 위해 80-120자 이내가 권장됨
   - What's unclear: 3칸럼 Agent Assist 레이아웃(30%/40%/30%)을 80자 안에 표현하면 내용이 압축될 수 있음
   - Recommendation: Agent Assist는 120자 폭까지 허용하거나, 3칸럼을 2단으로 분리(좌+중 / 우)하는 대안 고려. 가독성 우선

2. **설정/관리자 영역 상세도**
   - What we know: Claude's Discretion으로 분류됨 -- 세부 구성은 자율
   - What's unclear: 테넌트 설정, 사용자 관리, API 키, 빌링 중 어디까지 와이어프레임으로 표현할지
   - Recommendation: "설정" 메뉴는 GNB에 포함하되, 하위 화면은 텍스트 목록(테넌트 설정, 사용자 관리, API 키, 빌링)으로만 나열. 와이어프레임 없이 간략 처리하여 문서 분량 관리

3. **기존 AdminPanel 비교 자료의 구체성**
   - What we know: CONTEXT.md에서 "기존 AdminPanel(AX PM)의 텍스트 목록 대비 핵심 개선점"으로 명시
   - What's unclear: 기존 AdminPanel의 실제 화면을 직접 참조할 수 없어, "텍스트 기반 프롬프트/토픽 관리" 수준의 추상적 비교만 가능
   - Recommendation: PROJECT.md의 5대 기존 자산 설명("AX Product Manager 1: 프롬프트/토픽/품질 테스트/녹음 관리")을 근거로 대조 표 작성. 구체적 스크린샷 비교는 불가능하므로 기능 영역별 before/after 대조로 대체

## Sources

### Primary (HIGH confidence)
- `04-CONTEXT.md` -- 모든 레이아웃/구조 결정사항 (locked decisions)
- `04-UI-SPEC.md` -- 레이아웃 계약, 카피라이팅 계약, 주석 규약, 데이터 예시값
- `docs/prd-core.md` -- 보이스봇 20개 기능 목록, Agent Assist 워크플로우, 예시 대화
- `docs/pricing-strategy.md` -- 3티어 가격 구조, TCO 비교, 해결 정의

### Secondary (MEDIUM confidence)
- [Genesys Agent UI multi-contextual panels](https://help.genesys.cloud/announcements/agent-ui-multiple-contextual-panels/) -- Agent Assist 다중 패널 업계 표준 확인
- [SaaS Onboarding Best Practices 2025](https://productled.com/blog/5-best-practices-for-better-saas-user-onboarding) -- 스텝 위자드 패턴, 진행률 표시, skip 옵션
- [Dashboard Wireframe Guide](https://www.visily.ai/blog/how-to-create-a-dashboard-wireframe/) -- KPI 카드 레이아웃, F-패턴 시선 흐름
- [Flow Builder Overview (Voiso)](https://docs.voiso.com/docs/inbound-flow-builder-overview) -- 노드-엣지 플로우 빌더 UI 패턴

### Tertiary (LOW confidence)
- [Mockdown ASCII Wireframe Editor](https://www.mockdown.design/) -- ASCII 와이어프레임 도구 참고 (직접 사용하지 않음, 표현 패턴만 참고)
- [BareMinimum ASCII Wireframe Generator](https://bareminimum.design) -- Unicode box-drawing 와이어프레임 트렌드 확인

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- 입력 자료(CONTEXT.md, UI-SPEC.md, PRD, 가격 전략)가 모두 확정됨. 새로운 기술 선택이 불필요
- Architecture: HIGH -- 문서 구조와 레이아웃 계약이 UI-SPEC.md에서 완전히 정의됨. 와이어프레임 표현 규약도 확정
- Pitfalls: HIGH -- 기획 문서 작성의 일반적 위험(데이터 불일치, 정보 과부하, 플로우 연결 누락)이 잘 알려진 패턴

**Research date:** 2026-04-02
**Valid until:** 2026-05-02 (안정적 -- 입력 자료가 확정되어 변경 가능성 낮음)
