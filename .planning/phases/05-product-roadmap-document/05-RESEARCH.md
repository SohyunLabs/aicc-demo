# Phase 5: Product Roadmap Document - Research

**Researched:** 2026-04-02
**Domain:** 제품 로드맵 문서 작성 (기획서 산출물)
**Confidence:** HIGH

## Summary

Phase 5는 이 프로젝트의 마지막 퍼즐로, Phase 1~4의 모든 산출물(시장 분석, PRD, 가격 전략, UX 와이어프레임)을 종합하여 실행 가능한 제품 출시 계획을 하나의 로드맵 문서로 완성하는 단계다. 산출물은 `docs/product-roadmap.md` Markdown 문서이며, 코드 작성이 아닌 전략 문서 작성이 핵심 과제다.

이 Phase의 특수성은 단순한 "새 문서 작성"이 아니라 **앞선 4개 문서의 데이터 포인트를 일관되게 직조하는 통합 작업**이라는 점이다. PRD의 MVP/Phase 2/Future 분류가 로드맵의 3단계와 1:1 매핑되어야 하고, KPI 90일/180일/1년 목표가 마일스톤에 정확히 연결되어야 하며, 가격 전략의 성과 과금과 컴플라이언스 엔진이 MVP Phase 1에 반드시 포함되어야 한다. 또한 PM 입사 과제 맥락에서 가상 팀 구성과 리소스 가정이 현실적이고 설득력 있어야 한다.

**Primary recommendation:** Phase 4에서 확립된 고밀도 ASCII 시각화 패턴을 간트 차트와 의존성 그래프에 동일 수준으로 적용하고, Phase 3 PRD-05/06/07의 데이터를 로드맵의 모든 섹션에서 직접 참조하여 전체 기획서 세트의 일관성을 시연한다. 총 분량 8-12페이지(약 300-500줄)를 목표로 하되, 시각 자료의 밀도를 높여 임팩트를 극대화한다.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **Phase 구분과 리소스 가정**: 3단계 Phase 구분(MVP > 확장 > 고도화), Phase 3 PRD-06의 MVP/Phase 2/Future 분류와 직접 매핑. 가상 팀 구성 명시(역할별 인원 배치). T-shirt → 주 단위 매핑: S=1-2주, M=3-4주, L=6-8주, XL=10-12주. MVP Phase 범위: PRD-06 기준, Day 1 신뢰성 기준 + Build 6개(L Effort) 강제 포함. 성과 과금 + 컴플라이언스 엔진 MVP Phase 1 포함
- **의존성 그래프 표현**: ASCII 플로우차트(노드-엣지 형태). 기능 모듈 단위 구성(보이스봇 코어, Agent Assist, 컴플라이언스 엔진, 성과 과금, 온보딩 등). Build/Enhance 구분 표시
- **리스크 매트릭스**: 기술/시장/조직 3차원 분류. 3x3 그리드 + 상세 표. 완화 전략 + 담당/트리거
- **타임라인과 마일스톤**: ASCII 간트 차트(월별 타임라인). 월 단위 기간. KPI 목표치 연결(90일/180일/1년). 총 분량 8-12페이지

### Claude's Discretion
- 가상 팀 구성의 구체적 인원수와 역할 배분
- 3단계 Phase 각각의 구체적 기간(월수) 산정
- ASCII 간트 차트와 의존성 그래프의 구체적 레이아웃
- 리스크 항목 선별 및 우선순위
- 문서 내 섹션 순서 및 세부 분량 배분
- 각 마일스톤의 구체적 산출물 명세

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| RM-01 | Phase별 기능 배포 계획 -- 개발 리소스 가정 포함, 성과 과금+컴플라이언스 엔진 Phase 1 포함 | 가상 팀 구성 패턴, T-shirt→주 매핑, MVP 범위 정의(PRD-06 직접 매핑), 3단계 Phase 구조 |
| RM-02 | 타임라인 및 의존성/리스크 정의 -- 기술 의존성 그래프, 리스크 매트릭스, 마일스톤 | ASCII 시각화 패턴(간트 차트, 의존성 그래프), 3x3 리스크 매트릭스 프레임워크, KPI-마일스톤 매핑 |
</phase_requirements>

## Standard Stack

이 Phase의 "스택"은 소프트웨어 라이브러리가 아니라 **문서 구조와 시각화 도구**다.

### Core (문서 산출물 도구)
| 도구 | 용도 | 왜 표준인가 |
|------|------|------------|
| Markdown | 문서 작성 포맷 | 프로젝트 전체 확립 패턴. `docs/` 디렉토리에 저장 |
| ASCII Art | 시각화(간트 차트, 의존성 그래프, 리스크 매트릭스) | Phase 4에서 고밀도 ASCII 와이어프레임 862줄 확립. 일관성 필수 |
| Markdown 표 | 데이터 매트릭스(기능 배포 계획, 팀 구성, 리스크 상세) | Phase 1~4 전체에서 확립된 표 기반 데이터 제시 패턴 |

### Supporting (참조 입력)
| 소스 | 용도 | 참조 방법 |
|------|------|----------|
| `docs/prd-core.md` Section 5-7 | Build/Enhance 분류, 우선순위 매트릭스, KPI | PRD-05(자산 매핑), PRD-06(MVP 경계), PRD-07(KPI 목표치) 직접 인용 |
| `docs/pricing-strategy.md` | 성과 과금 구조, 3티어 요금제 | 성과 과금+컴플라이언스 엔진 MVP 포함 근거 |
| `docs/market-analysis.md` | 경쟁 구도, 규제 환경, 시장 리스크 | 리스크 매트릭스 시장 리스크 항목 근거 |
| `docs/ux-wireframes.md` | UI 복잡도, 화면 수 | 개발 공수 추정 참고 근거 |

### 산출물 위치
```
docs/product-roadmap.md    # 최종 로드맵 문서 (신규 생성)
```

## Architecture Patterns

### 문서 구조 (권장)

CONTEXT.md에서 결정된 사항과 성공 기준을 종합하면, 다음 구조가 최적이다.

```
docs/product-roadmap.md
├── Executive Summary                    # 1페이지 -- 전체 로드맵 개관
├── 1. 개발 팀 구성 및 리소스 가정         # 1페이지 -- 가상 팀, 역할별 배치
├── 2. Phase별 기능 배포 계획              # 2-3페이지 -- MVP/확장/고도화 3단계
│   ├── 2.1 MVP (Phase 1)               #   Day 1 신뢰성 기준, 18개 기능
│   ├── 2.2 확장 (Phase 2)              #   차별화 강화, 감정 분석/품질 스코어링
│   └── 2.3 고도화 (Phase 3)            #   아웃바운드, 다국어 등 Future
├── 3. 기술 의존성 그래프                  # 1-2페이지 -- ASCII 플로우차트
├── 4. 타임라인 및 마일스톤                # 1-2페이지 -- ASCII 간트 차트 + KPI 매핑
├── 5. 리스크 매트릭스                     # 1-2페이지 -- 3x3 그리드 + 상세 표
└── 출처                                  # 0.5페이지 -- 인용 문서 목록
```

**총 분량:** 8-12페이지 (약 300-500줄 Markdown)

### Pattern 1: Phase 3 데이터 직접 매핑 패턴

**What:** PRD-06의 MVP/Phase 2/Future 분류를 로드맵 3단계와 1:1 매핑
**When to use:** 모든 기능 배포 계획 작성 시

기능 배포 계획에서 PRD-06의 모든 18개 MVP 기능과 2개 Phase 2 기능을 누락 없이 로드맵에 매핑해야 한다. 각 기능에 PRD-05의 Build/Enhance 분류와 T-shirt 사이징을 표기하여, PRD에서 로드맵까지 데이터의 일관성을 시연한다.

```markdown
| 기능 | 분류 | Effort | 주수(가상팀 기준) | Phase |
|------|------|--------|-----------------|-------|
| STT/TTS 엔진 | Enhance | S | 1-2주 | MVP |
| Hybrid RAG 응답 | Enhance | M | 3-4주 | MVP |
| 할루시네이션 가드 | Build | L | 6-8주 | MVP |
| ... | ... | ... | ... | ... |
```

### Pattern 2: 고밀도 ASCII 시각화 패턴

**What:** Phase 4에서 확립한 노드-엣지 ASCII 표현을 간트 차트와 의존성 그래프에 적용
**When to use:** 모든 시각적 표현 섹션

Phase 4 UX 와이어프레임에서 862줄의 고밀도 ASCII를 성공적으로 사용했으므로, 동일한 수준의 시각적 밀도를 로드맵의 시각 요소에 적용해야 한다. 핵심은 텍스트 기반이면서도 한눈에 파악 가능한 레이아웃이다.

**의존성 그래프 예시 패턴:**
```
[보이스봇 코어] ─── [Build] ──→ [컴플라이언스 엔진]
     │                              │
     ▼                              ▼
[Agent Assist] ─── [Enhance] ──→ [성과 과금 엔진]
     │
     ▼
[셀프 온보딩] ─── [Enhance]
```

**간트 차트 예시 패턴:**
```
기능 모듈      M1   M2   M3   M4   M5   M6   M7   M8   M9
보이스봇 코어  ████████████
컴플라이언스        ████████████████
Agent Assist        ████████████
성과 과금                ████████
셀프 온보딩                   ████████
                              ↑ 알파 테스트  ↑ MVP 출시
```

### Pattern 3: KPI-마일스톤 연결 패턴

**What:** PRD-07의 90일/180일/1년 KPI 목표치를 로드맵 마일스톤에 직접 매핑
**When to use:** 타임라인 섹션에서 마일스톤 정의 시

```markdown
| 마일스톤 | 시점 | 핵심 KPI 목표 | 출처 |
|---------|------|-------------|------|
| MVP 출시 | M6-M9 | 자동 해결률 35%, 할루시네이션 <3% | PRD-07 90일 목표 |
| 안정화 | M12 | 자동 해결률 50%, AHT 단축 25% | PRD-07 180일 목표 |
| 성숙 | M18 | 자동 해결률 65%, 할루시네이션 <0.5% | PRD-07 1년 목표 |
```

### Pattern 4: 3차원 리스크 분류 패턴

**What:** 기술/시장/조직 3축으로 리스크를 분류하고, 3x3 확률-영향도 그리드로 시각화
**When to use:** 리스크 매트릭스 섹션

```
              영향도
         낮음    중간    높음
발  높음 │ M-1  │ M-2  │ T-3  │
생       │      │      │ O-1  │
확  중간 │      │ T-1  │ T-2  │
률       │      │ M-3  │      │
    낮음 │      │      │ O-2  │
         │      │      │      │

T=기술, M=시장, O=조직
```

그리드 아래에 각 리스크의 상세 표를 배치:

```markdown
| ID | 리스크 | 차원 | 확률 | 영향 | 완화 전략 | 담당 | 트리거 |
|----|--------|------|------|------|----------|------|--------|
| T-1 | LLM 할루시네이션 | 기술 | 중 | 높 | 다층 검증 방어 | AI팀 | 할루시네이션 >1% |
```

### Anti-Patterns to Avoid
- **데이터 불일치**: PRD에서 MVP로 분류한 기능을 로드맵에서 Phase 2로 배치하면 기획서 전체의 일관성이 깨진다. PRD-06 매트릭스와 1:1 대응을 반드시 검증
- **공허한 타임라인**: "6개월 후 출시" 같은 비구체적 표현 대신, 기능 모듈별 시작/종료 월과 병렬/직렬 관계를 명시
- **리스크 나열만**: 리스크를 나열하기만 하고 완화 전략이 없으면 PM 역량을 시연하지 못한다. 각 리스크에 반드시 구체적 완화 전략 + 담당 + 트리거 포함
- **이전 문서 무시**: 시장 분석(KT 69%, 규제 리스크)과 가격 전략(성과 과금 구조)을 리스크와 Phase 배치에 직접 반영하지 않으면 기획서 간 단절 발생

## Don't Hand-Roll

| 문제 | 직접 만들지 마라 | 대신 사용하라 | 이유 |
|------|---------------|-------------|------|
| MVP 기능 목록 | 새로 기능 분류 | PRD-06 우선순위 매트릭스 그대로 인용 | PRD와의 일관성이 평가의 핵심 |
| KPI 목표치 | 새로운 수치 창작 | PRD-07의 90일/180일/1년 목표 그대로 | 동일 문서 세트 내 숫자 불일치는 치명적 |
| 경쟁/시장 리스크 | 새로운 시장 분석 | Phase 1 market-analysis.md 데이터 포인트(MKT-DP-XX) 인용 | 시장 분석과 리스크 매트릭스 연결성 |
| 가격 구조 | 가격 재설계 | pricing-strategy.md 3티어 구조 인용 | 가격 전략과 MVP 범위 일관성 |
| 자산 활용 분류 | 새로운 Build/Enhance 판단 | PRD-05 Build/Enhance 매트릭스 인용 | 자산 활용 계획과 의존성 그래프 일관성 |

**Key insight:** 이 Phase의 본질은 "새로운 정보 생산"이 아니라 "기존 정보의 전략적 배열과 시각화"다. 앞선 4개 문서에서 이미 정의된 기능, KPI, 가격, 시장 데이터를 로드맵이라는 프레임에 맞춰 재구성하는 것이 핵심이다.

## Common Pitfalls

### Pitfall 1: PRD-로드맵 데이터 불일치
**What goes wrong:** PRD에서 18개 기능을 MVP로 분류했는데, 로드맵에서 다른 기능 수나 다른 기능 이름을 사용
**Why it happens:** PRD와 로드맵을 별도 문서로 인식하고 독립적으로 작성
**How to avoid:** PRD-06 우선순위 매트릭스의 기능 목록을 그대로 복사하여 로드맵 Phase에 매핑. 기능 이름, 분류(Build/Enhance), Effort 사이징을 정확히 일치시킴
**Warning signs:** 기능 수가 PRD와 다르거나, T-shirt 사이징이 다르거나, Build/Enhance 태그가 불일치

### Pitfall 2: 비현실적 타임라인
**What goes wrong:** T-shirt 사이징(S=1-2주)을 단순 합산하여 "모든 MVP를 12주에 완성" 같은 비현실적 일정 제시
**Why it happens:** 병렬 개발 가능 범위, 기능 간 의존성, QA/통합 테스트 시간을 고려하지 않음
**How to avoid:** (1) 의존성 그래프로 직렬/병렬 관계 먼저 정의 (2) 크리티컬 패스(Build L 6개 기능) 기준으로 전체 일정 산정 (3) 통합 테스트/QA 버퍼 1-2개월 추가
**Warning signs:** MVP 출시가 4개월 미만, 또는 18개월 초과

### Pitfall 3: 리스크의 피상적 나열
**What goes wrong:** "LLM 할루시네이션 리스크가 있다"만 기술하고, 구체적 완화 전략 없음
**Why it happens:** 리스크 식별에만 집중하고 대응 전략 설계를 생략
**How to avoid:** 각 리스크에 반드시 (1) 완화 전략 (2) 담당 역할 (3) 트리거 조건(언제 발동하는지) 3가지를 명시. PM의 실행 역량을 시연하는 핵심 요소
**Warning signs:** 리스크 표에 "완화 전략" 칸이 비어있거나 "모니터링" 같은 비구체적 표현만 있음

### Pitfall 4: 시각 자료 부재 또는 부실
**What goes wrong:** 텍스트 위주 서술만으로 로드맵을 작성하여 한눈에 파악 불가
**Why it happens:** ASCII 시각화의 난이도를 과소평가하거나, 텍스트로 충분하다고 판단
**How to avoid:** 최소 3개 시각 자료 필수: (1) 의존성 그래프 (2) 간트 차트 (3) 리스크 매트릭스 그리드. Phase 4 와이어프레임 수준의 ASCII 밀도 유지
**Warning signs:** 문서에 시각 요소가 1개 이하, 또는 표만 있고 다이어그램 없음

### Pitfall 5: 성과 과금/컴플라이언스 Phase 1 누락
**What goes wrong:** 성과 기반 과금 엔진과 컴플라이언스 엔진이 MVP(Phase 1)에서 빠짐
**Why it happens:** Build L Effort 기능이라 일정상 Phase 2로 밀려남
**How to avoid:** CONTEXT.md 잠금 결정: "성과 과금 + 컴플라이언스 엔진 MVP Phase 1 포함". 이것은 Day 1 신뢰성 기준의 직접적 결과이며, 핵심 차별화 전략(성과 기반 과금 x 컴플라이언스)의 실행 계획이므로 반드시 MVP에 배치
**Warning signs:** MVP 기능 목록에서 "상품 안내 컴플라이언스", "불완전판매 방지 체크", "설명의무 이행 추적", "컴플라이언스 경고" 누락

## Code Examples

이 Phase는 코드가 아닌 문서 산출물이므로, "코드 예시" 대신 **문서 구성 패턴**을 제시한다.

### Executive Summary 구성 패턴
```markdown
## Executive Summary

핵심 메시지는 세 가지로 요약된다.

- **MVP 6-9개월:** [가상 팀 구성]으로 [MVP 기능 18개]를 출시한다.
  성과 기반 과금 엔진과 컴플라이언스 엔진이 Day 1부터 포함된다.
- **3단계 로드맵:** MVP(6-9개월) → 확장(+6개월) → 고도화(+6-12개월).
  PRD 우선순위 매트릭스(PRD-06)의 MVP/Phase 2/Future 분류와 1:1 매핑.
- **리스크 관리:** 기술/시장/조직 [X개] 리스크 식별,
  각각에 완화 전략과 트리거 조건 정의.
```

### 가상 팀 구성 표 패턴
```markdown
| 역할 | 인원 | 주요 책임 | Phase별 배치 |
|------|------|----------|-------------|
| 백엔드 엔지니어 | 3명 | 보이스봇 코어, RAG 엔진, API | MVP 전체 |
| AI/ML 엔지니어 | 2명 | 할루시네이션 가드, 컴플라이언스 엔진, 감정 분석 | MVP + Phase 2 |
| 프론트엔드 엔지니어 | 2명 | 관리 콘솔, Agent Assist UI, 셀프 온보딩 | MVP 전체 |
| QA 엔지니어 | 1명 | 전수 테스트, 컴플라이언스 검증 | MVP 전체 |
| PM | 1명 | 일정 관리, 이해관계자 조율 | 전체 |
| 디자이너 | 1명 | UI/UX 상세 설계 | MVP 전반부 |
```

### 의존성 그래프 ASCII 패턴
```markdown
                    ┌─────────────────┐
                    │ STT/TTS 엔진    │ [Enhance][S]
                    │ 대화 관리        │ [Enhance][S]
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              ▼              ▼              ▼
   ┌──────────────┐ ┌───────────────┐ ┌──────────────┐
   │ Hybrid RAG   │ │ 실시간 전사   │ │ 상담원 전환  │
   │ [Enhance][M] │ │ [Enhance][S]  │ │ [Enhance][S] │
   └──────┬───────┘ └───────┬───────┘ └──────────────┘
          │                 │
     ┌────┴────┐      ┌────┴─────────┐
     ▼         ▼      ▼              ▼
┌─────────┐ ┌─────────────┐ ┌─────────────────┐
│ 할루시네│ │ 추천 응답   │ │ 실시간 요약     │
│ 이션가드│ │ [Enhance][S]│ │ [Enhance][M]    │
│[Build][L]│ └─────────────┘ └─────────────────┘
└────┬─────┘
     │
     ▼
┌──────────────────────┐
│ 컴플라이언스 엔진    │ [Build][L]
│ (상품 안내/불완전판매│
│  /설명의무/경고)     │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ 성과 과금 엔진       │ [Build][L]
│ (해결 측정/건당 과금)│
└──────────────────────┘
```

### 간트 차트 ASCII 패턴
```markdown
기능 모듈         M1    M2    M3    M4    M5    M6    M7    M8    M9
─────────────────────────────────────────────────────────────────────
인프라/플랫폼     ██████
보이스봇 코어     ██████████████
Hybrid RAG SaaS화       ████████████
컴플라이언스 엔진       ████████████████████████
Agent Assist                  ████████████████
성과 과금 엔진                      ████████████████
셀프 온보딩                               ████████████
통합 테스트/QA                                  ████████████
─────────────────────────────────────────────────────────────────────
마일스톤          ↑알파          ↑베타 테스트     ↑MVP 출시
                  M2             M6               M9
KPI 목표                                         해결률 35%
                                                 할루시네이션 <3%
```

### 리스크 매트릭스 3x3 ASCII 패턴
```markdown
           │  영향도: 낮음  │  영향도: 중간  │  영향도: 높음  │
───────────┼───────────────┼───────────────┼───────────────┤
확률: 높음 │               │ [M-1] KT 독점 │ [T-3] LLM     │
           │               │  시장 관성    │  할루시네이션  │
───────────┼───────────────┼───────────────┼───────────────┤
확률: 중간 │               │ [O-1] AI/ML   │ [T-2] 음성인식│
           │               │  인력 확보    │  정확도       │
───────────┼───────────────┼───────────────┼───────────────┤
확률: 낮음 │               │ [M-2] 규제    │ [T-1] 스케일링│
           │               │  환경 급변    │  병목        │
───────────┴───────────────┴───────────────┴───────────────┘
```

## State of the Art

| 관점 | 전통적 접근 | 현재 접근 (2025-2026) | 적용 |
|------|------------|---------------------|------|
| 로드맵 초점 | 기능/타임라인 나열 (Output-driven) | 성과 목표 연결 (Outcome-driven) | KPI-마일스톤 매핑으로 "무엇을 달성하는지" 중심 |
| 리스크 관리 | 리스크 리스트만 작성 | 완화 전략 + 담당 + 트리거 조건 포함 | PM 실행 역량 시연 |
| 추정 방식 | 정밀 일정(주/일 단위) | T-shirt → 범위 기반 추정 | 기획서 단계에 적합한 추상 수준 |
| 시각화 | PowerPoint/Figma 기반 | ASCII 텍스트 기반 (PM 과제 맥락) | Phase 4 고밀도 ASCII 패턴 계승 |
| 팀 구성 | 고정 팀 가정 | 역할 기반 가상 팀 + Phase별 유동 배치 | PM 리소스 플래닝 역량 시연 |

## Input Data Map (선행 Phase 산출물 → 로드맵 섹션 매핑)

이 Phase의 핵심은 "앞선 문서의 데이터를 정확히 참조하는 것"이므로, 입력-출력 매핑을 명확히 한다.

| 소스 문서 | 소스 섹션 | 로드맵 섹션 | 매핑 내용 |
|-----------|----------|-----------|----------|
| `prd-core.md` Section 5.3 | Build/Enhance 매트릭스 (20개 기능) | 2. Phase별 배포 계획 + 3. 의존성 그래프 | 각 기능의 Build/Enhance 태그, Effort 사이징 |
| `prd-core.md` Section 6.3 | 우선순위 매트릭스 (MVP 18개, Phase 2 2개) | 2. Phase별 배포 계획 | MVP/Phase 2/Future 배치, 논거 |
| `prd-core.md` Section 7.2-7.4 | KPI (90일/180일/1년) | 4. 마일스톤 | 마일스톤별 성공 기준 수치 |
| `pricing-strategy.md` Section 2 | 성과 기반 과금 구조 | 2.1 MVP Phase 1 | 성과 과금 엔진 MVP 포함 근거 |
| `market-analysis.md` Section 2-3 | 경쟁 구도, 규제 환경 | 5. 리스크 매트릭스 | KT 69% 독점, 금융위 가이드라인 등 시장 리스크 |
| `ux-wireframes.md` | 3개 핵심 화면 복잡도 | 1. 리소스 가정 | 프론트엔드 개발 공수 추정 참고 |

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | 수동 검증 (문서 산출물) |
| Config file | none |
| Quick run command | 문서 리뷰 체크리스트 |
| Full suite command | 성공 기준 4항목 전수 검증 |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| RM-01 | Phase별 기능 배포 계획, 개발 리소스 가정, 성과 과금+컴플라이언스 Phase 1 포함 | manual-only | 문서 내 기능 목록 vs PRD-06 대조 | N/A |
| RM-02 | 의존성 그래프, 리스크 매트릭스, 타임라인/마일스톤 시각적 표현 | manual-only | 문서 내 시각 자료 3종 존재 확인 | N/A |

**Manual-only 사유:** 코드 산출물이 아닌 Markdown 문서로, 자동화 테스트가 불가능. 대신 성공 기준 4항목을 체크리스트로 검증.

### Sampling Rate
- **Per task commit:** 성공 기준 해당 항목 수동 확인
- **Per wave merge:** 전체 성공 기준 4항목 + PRD 데이터 일치 검증
- **Phase gate:** 전체 문서 세트(5개 문서) 간 일관성 크로스체크

### Wave 0 Gaps
None -- 기존 테스트 인프라가 필요하지 않음 (문서 산출물)

## Open Questions

1. **가상 팀 규모의 적정 수준**
   - What we know: CONTEXT.md에서 "역할별 인원 배치(예: 백엔드 3명, 프론트 2명, AI/ML 2명, QA 1명)" 예시 제시
   - What's unclear: PM 과제 맥락에서 어떤 팀 규모가 "현실적"으로 보이는지 (너무 크면 비현실적, 너무 작으면 일정이 안 맞음)
   - Recommendation: 총 10-12명 규모 가상 팀. 이유: AICC SaaS 스타트업/신사업부 규모에 적합하고, Build L 6개 기능의 병렬 개발이 가능한 최소 규모

2. **MVP Phase 1의 구체적 기간**
   - What we know: T-shirt 매핑(S=1-2주, M=3-4주, L=6-8주), Build 6개(L)가 크리티컬 패스, Enhance 12개(S-M)는 병렬 가능
   - What's unclear: 실제 병렬도를 어떻게 가정할지
   - Recommendation: 6-9개월 (M6-M9). 이유: Build L 기능 6개의 최장 직렬 경로(할루시네이션 가드 → 컴플라이언스 엔진 → 성과 과금) 약 5-6개월 + 통합 테스트/QA 1-2개월 + 버퍼

3. **고도화(Phase 3)의 범위**
   - What we know: 현재 PRD에 Future 기능 0개, Out of Scope에 아웃바운드 보이스봇/다국어/모바일 등 나열
   - What's unclear: 고도화 Phase에 어떤 기능을 배치할지
   - Recommendation: Out of Scope 항목 중 사업 확장성 높은 것들(아웃바운드 보이스봇, 다국어 지원)을 고도화 Phase에 비전으로 배치. 단, 현 PRD 범위 외이므로 구체적 기능 정의 없이 방향성만 제시

## Sources

### Primary (HIGH confidence)
- `docs/prd-core.md` Section 5-7 -- Build/Enhance 분류, 우선순위 매트릭스, KPI 목표치
- `docs/pricing-strategy.md` Section 2 -- 성과 기반 과금 구조, 3티어 요금제
- `docs/market-analysis.md` Section 2-3 -- 경쟁 구도(KT 69%), 시장 리스크
- `docs/ux-wireframes.md` -- UI 복잡도 기반 개발 공수 참고
- `.planning/phases/05-product-roadmap-document/05-CONTEXT.md` -- 사용자 결정사항

### Secondary (MEDIUM confidence)
- [Product Roadmap Best Practices 2025](https://www.aakashg.com/product-roadmap-best-practices/) -- outcome-driven 로드맵 패턴
- [Risk Matrix Guide](https://www.cascade.app/blog/risk-matrix-guide) -- 3x3 확률-영향도 프레임워크
- [SaaS MVP Development Strategy](https://saasfractionalcpo.com/blog/saas-mvp-development-guide/) -- MVP 3-6개월 타임라인 벤치마크, 팀 구성
- [Mermaid Gantt Chart Syntax](https://mermaid.js.org/syntax/gantt.html) -- 텍스트 기반 간트 차트 참조 (ASCII로 변환 적용)

### Tertiary (LOW confidence)
- None -- 이 Phase는 기존 산출물 종합이므로 외부 소스 의존도가 낮음

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- 문서 산출물이므로 기술 스택 불확실성 없음. 확립된 Markdown + ASCII 패턴 사용
- Architecture: HIGH -- 문서 구조는 CONTEXT.md에서 대부분 결정됨. 선행 Phase 패턴 계승
- Pitfalls: HIGH -- 선행 4개 Phase 완료로 데이터 일관성 리스크를 구체적으로 식별 가능
- Input data: HIGH -- 모든 입력 문서(4개)가 이미 완성되어 있어 참조 데이터 확정

**Research date:** 2026-04-02
**Valid until:** 2026-04-09 (7일 -- PM 과제 제출 기한 내)
