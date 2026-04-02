# 뤼튼 AICC 제품화 기획

## What This Is

뤼튼테크놀로지스의 다수 기업 구축 납품 경험을 기반으로, AI Contact Center(AICC) 솔루션을 범용 SaaS 제품으로 전환하는 기획 과제다.
제품은 **AI 보이스봇** (인바운드 자동 응대)과 **Agent Assist** (상담원 실시간 보조) 두 축으로 구성되며, 금융·보험·이커머스를 메인 타겟으로 한다.
이 기획서는 PM 입사 지원 과제로, 시장 기회 정의 → PRD → 화면 설계 → 로드맵 → 가격 전략을 완결된 문서 세트로 제출하는 것이 목표다.

## Core Value

**"틀리면 안 되는 상담에서, 검증된 AI 응답을 제공한다"** — 금융·보험·이커머스에서 잘못된 상담은 법적·재무적 리스크이므로, Hybrid RAG 기반의 출처 추적 가능하고 신뢰 가능한 답변이 핵심 차별점이다.

## Requirements

### Validated

- ✓ 보이스봇 코어 엔진 (실시간 음성 응답) — 기존 구축 납품
- ✓ Hybrid RAG 지식 기반 (Elasticsearch 시맨틱 검색 + Neo4j Knowledge Graph) — 기존 구축 납품
- ✓ AX Product Manager 1 (프롬프트·토픽·품질 테스트·녹음 관리) — 기존 구축 납품
- ✓ 멀티테넌시 지원 — 기존 구축 납품
- ✓ React 기반 관리자 패널 + 고객용 채팅/음성 인터페이스 — 기존 구축 납품

### Active

**[PRD]**
- [x] PRD-01: 제품 비전 및 포지셔닝 정의 (기존 구축형 vs 신규 SaaS 포지셔닝) — Validated in Phase 02
- [x] PRD-02: 타겟 고객 세그먼트 및 페르소나 정의 (금융·보험·이커머스 3개 산업별) — Validated in Phase 02
- [x] PRD-03: 핵심 기능 정의 — 보이스봇 MVP 기능셋 — Validated in Phase 02
- [x] PRD-04: 핵심 기능 정의 — Agent Assist MVP 기능셋 — Validated in Phase 02
- [x] PRD-05: 기존 자산 활용 계획 vs 신규 개발 범위 명세 — Validated in Phase 03
- [x] PRD-06: 기능 우선순위 (MVP / Phase 2 / Future) 매트릭스 — Validated in Phase 03
- [x] PRD-07: 성공 지표 (KPI) 정의 — Validated in Phase 03

**[화면 설계]**
- [x] UX-01: 보이스봇 관리 콘솔 — 기존 AdminPanel 제품 수준 개선 와이어프레임 — Validated in Phase 04
- [x] UX-02: Agent Assist 실시간 보조 화면 (실시간 통화 요약 / 추천 응답 / 고객 정보 패널 / 감정 분석) — Validated in Phase 04
- [x] UX-03: 고객사 셀프 온보딩 화면 (신규) — Validated in Phase 04

**[로드맵]**
- [ ] RM-01: Phase별 기능 배포 계획 (개발 리소스 가정 포함)
- [ ] RM-02: 타임라인 및 의존성·리스크 정의

**[가격 전략]**
- [x] PRC-01: 구축형 가격 구조 — Validated in Phase 03
- [x] PRC-02: SaaS형 가격 구조 (성과 기반 과금 포함) — Validated in Phase 03
- [x] PRC-03: 경쟁력 있는 가격 포인트 근거 — Validated in Phase 03

**[시장 분석 — 차별화 근거]** — Validated in Phase 01: market-foundation
- [x] MKT-01: 경쟁사 분석 (Genesys, 카카오엔터프라이즈, 솔트룩스 등) 대비 포지셔닝
- [x] MKT-02: 한국 AICC 시장 규모 및 성장 추세
- [x] MKT-03: "뾰족한 강점" 정의 — 뤼튼만이 제공할 수 있는 차별화 요소

### Out of Scope

- 아웃바운드 보이스봇 상세 설계 — v1은 인바운드 우선, 아웃바운드는 Phase 2 이후
- 모바일 앱 — 웹 기반 관리 콘솔 우선
- 실시간 채팅봇 (텍스트 채널) — 보이스 채널에 집중 후 확장
- 실제 개발 코드 작성 — 기획 문서 산출물이 목표

## Context

- **기존 자산**: 실제 금융, 이커머스, 전자 산업 구축 운영 경험 보유 — 시장 검증된 기술
- **경쟁 구도**: Genesys(글로벌 엔터프라이즈), 카카오엔터프라이즈(카카오i), 솔트룩스, 마인즈랩 등이 주요 경쟁자
- **시장 트렌드**: LLM 기반 AICC로 전환 가속화, 그러나 할루시네이션·컴플라이언스 우려가 진입 장벽
- **Perplexity 유사 포지셔닝**: ChatGPT(범용 AI) 대비 Perplexity(출처 기반 검색)처럼, 범용 LLM 대비 "컴플라이언스 세이프한 도메인 특화 AICC"로 포지셔닝 가능
- **입사 지원 과제**: 3일 이내 PRD + 화면 설계 + 로드맵 + 가격 전략 제출

## Constraints

- **Timeline**: 3일 이내 제출
- **Tech Stack**: 기존 뤼튼 기술 자산 최대 활용 (새로 만들지 않고 제품화)
- **No Real Internal Data**: 시장 공개 데이터 + 산업 베스트 프랙티스 기반 추론
- **Format**: 와이어프레임은 텍스트/ASCII 목업 수준으로 작성 (Figma 불필요)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| 인바운드 우선 SaaS | 아웃바운드는 규제 리스크 있음, 인바운드부터 PMF 확보 | — Pending |
| Hybrid RAG 차별화 핵심 포지셔닝 | 경쟁사 대비 "신뢰할 수 있는 답변"이 금융·보험에서 결정적 | — Pending |
| 성과 기반 과금 도입 | 구축형 → SaaS 전환 시 고객 저항 최소화, 가치 증명 선행 | — Pending |
| 셀프 온보딩 화면 신규 개발 | 구축형의 긴 PoC 기간을 단축, SaaS 확장성 핵심 | — Pending |

---
*Last updated: 2026-04-02 after Phase 04 (ux-wireframes) completion — 3개 핵심 화면(관리 콘솔, Agent Assist, 셀프 온보딩) 고밀도 ASCII 와이어프레임 862줄 완성, 기존 AdminPanel 대비 개선점 명시*
