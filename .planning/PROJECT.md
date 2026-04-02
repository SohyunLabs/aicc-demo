# 뤼튼 AICC 제품화 기획

## What This Is

뤼튼테크놀로지스의 다수 기업 구축 납품 경험을 기반으로, AI Contact Center(AICC) 솔루션을 범용 SaaS 제품으로 전환하는 기획 과제다.
제품은 **AI 보이스봇** (인바운드 자동 응대)과 **Agent Assist** (상담원 실시간 보조) 두 축으로 구성되며, 금융·보험·이커머스를 메인 타겟으로 한다.
v1.0에서 시장 분석 → PRD → 가격 전략 → UX 와이어프레임 → 제품 로드맵 5문서 세트를 완결하여 PM 입사 지원 과제로 제출 가능한 상태다.

## Core Value

**"틀리면 안 되는 상담에서, 검증된 AI 응답을 제공한다"** — 금융·보험·이커머스에서 잘못된 상담은 법적·재무적 리스크이므로, Hybrid RAG 기반의 출처 추적 가능하고 신뢰 가능한 답변이 핵심 차별점이다.

## Requirements

### Validated

- ✓ 보이스봇 코어 엔진 (실시간 음성 응답) — 기존 구축 납품
- ✓ Hybrid RAG 지식 기반 (Elasticsearch 시맨틱 검색 + Neo4j Knowledge Graph) — 기존 구축 납품
- ✓ AX Product Manager 1 (프롬프트·토픽·품질 테스트·녹음 관리) — 기존 구축 납품
- ✓ 멀티테넌시 지원 — 기존 구축 납품
- ✓ React 기반 관리자 패널 + 고객용 채팅/음성 인터페이스 — 기존 구축 납품
- ✓ MKT-01: 경쟁사 분석 대비 포지셔닝 — v1.0
- ✓ MKT-02: 한국 AICC 시장 규모 및 성장 추세 — v1.0
- ✓ MKT-03: "뾰족한 강점" 차별화 요소 정의 — v1.0
- ✓ PRD-01: 제품 비전 및 포지셔닝 정의 — v1.0
- ✓ PRD-02: 타겟 고객 세그먼트 및 페르소나 정의 — v1.0
- ✓ PRD-03: 보이스봇 MVP 기능셋 정의 — v1.0
- ✓ PRD-04: Agent Assist MVP 기능셋 정의 — v1.0
- ✓ PRD-05: 기존 자산 활용 계획 vs 신규 개발 범위 명세 — v1.0
- ✓ PRD-06: 기능 우선순위 매트릭스 — v1.0
- ✓ PRD-07: 성공 지표(KPI) 정의 — v1.0
- ✓ PRC-01: 구축형 가격 구조 — v1.0
- ✓ PRC-02: SaaS형 가격 구조 (성과 기반 과금 포함) — v1.0
- ✓ PRC-03: 경쟁력 있는 가격 포인트 근거 — v1.0
- ✓ UX-01: 보이스봇 관리 콘솔 와이어프레임 — v1.0
- ✓ UX-02: Agent Assist 실시간 보조 화면 — v1.0
- ✓ UX-03: 고객사 셀프 온보딩 화면 — v1.0
- ✓ RM-01: Phase별 기능 배포 계획 — v1.0
- ✓ RM-02: 타임라인 및 의존성·리스크 정의 — v1.0

### Active

(None — next milestone requirements to be defined via `/gsd:new-milestone`)

### Out of Scope

- 아웃바운드 보이스봇 상세 설계 — v1은 인바운드 우선, 아웃바운드는 Phase 2 이후
- 모바일 앱 — 웹 기반 관리 콘솔 우선
- 실시간 채팅봇 (텍스트 채널) — 보이스 채널에 집중 후 확장
- 실제 개발 코드 작성 — 기획 문서 산출물이 목표

## Current State

**v1.0 shipped (2026-04-02)** — 5문서 세트 완결:
1. `docs/market-analysis.md` (467줄) — 시장 분석 + 차별화 전략
2. `docs/prd-core.md` (529줄) — PRD 코어 + 기능 정의
3. `docs/pricing-strategy.md` (256줄) — 가격 전략
4. `docs/ux-wireframes.md` (862줄) — UX 와이어프레임
5. `docs/product-roadmap.md` (304줄) — 제품 로드맵

## Context

- **기존 자산**: 실제 금융, 이커머스, 전자 산업 구축 운영 경험 보유 — 시장 검증된 기술
- **경쟁 구도**: Genesys(글로벌 엔터프라이즈), 카카오엔터프라이즈(카카오i), 솔트룩스, 마인즈랩 등이 주요 경쟁자
- **시장 트렌드**: LLM 기반 AICC로 전환 가속화, 그러나 할루시네이션·컴플라이언스 우려가 진입 장벽
- **Perplexity 유사 포지셔닝**: ChatGPT(범용 AI) 대비 Perplexity(출처 기반 검색)처럼, "컴플라이언스 세이프한 도메인 특화 AICC"로 포지셔닝
- **자산 활용 비율**: 70% (14/20 기능) 기존 구축 자산 SaaS 전환

## Constraints

- **Timeline**: 3일 이내 제출 (완료)
- **Tech Stack**: 기존 뤼튼 기술 자산 최대 활용 (새로 만들지 않고 제품화)
- **No Real Internal Data**: 시장 공개 데이터 + 산업 베스트 프랙티스 기반 추론
- **Format**: 와이어프레임은 텍스트/ASCII 목업 수준으로 작성 (Figma 불필요)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| 인바운드 우선 SaaS | 아웃바운드는 규제 리스크 있음, 인바운드부터 PMF 확보 | ✓ Good — PRD/UX/로드맵에 일관 반영 |
| Hybrid RAG 차별화 핵심 포지셔닝 | 경쟁사 대비 "신뢰할 수 있는 답변"이 금융·보험에서 결정적 | ✓ Good — Perplexity 비유로 비기술 바이어 이해 유도 |
| 성과 기반 과금 도입 | 구축형 → SaaS 전환 시 고객 저항 최소화, 가치 증명 선행 | ✓ Good — Sierra AI 모델 참조, 미해결건 무과금 원칙 |
| 셀프 온보딩 화면 신규 개발 | 구축형의 긴 PoC 기간을 단축, SaaS 확장성 핵심 | ✓ Good — 6스텝 위자드 + 테스트 콜 플로우 설계 |
| 해결 측정 엔진 MVP 추가 | 성과 과금의 핵심 기능, PRD-06 18개에 추가 | ✓ Good — 크리티컬 패스에 배치 |
| 가상 팀 10명 구성 | 신사업부 최소 구성, Build L 병렬 개발 가능 | ✓ Good — 리서치 추천(10-12명) 범위 내 |

---
*Last updated: 2026-04-02 after v1.0 milestone*
