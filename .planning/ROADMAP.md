# Roadmap: AICC SaaS Product Planning

## Overview

3일 이내에 뤼튼테크놀로지스 AICC SaaS 제품화 기획서를 완성한다. 시장 분석에서 시작하여 PRD, 가격 전략, UX 와이어프레임, 제품 로드맵 순으로 문서를 적층 생산하며, 각 단계의 산출물이 다음 단계의 입력이 된다. 최종 산출물은 PM 입사 지원 과제로 제출 가능한 완결된 문서 세트다.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Market Foundation** - 한국 AICC 시장 분석, 경쟁 구도, 차별화 포지셔닝 확립
- [ ] **Phase 2: Product Vision & Core PRD** - 제품 비전, 페르소나, 보이스봇/Agent Assist MVP 기능 정의
- [ ] **Phase 3: PRD Completion & Pricing** - 자산 활용 계획, 우선순위 매트릭스, KPI, 가격 전략 완성
- [ ] **Phase 4: UX Wireframes** - 관리 콘솔, Agent Assist, 셀프 온보딩 화면 설계
- [ ] **Phase 5: Product Roadmap Document** - Phase별 배포 계획, 타임라인, 의존성, 리스크 정의

## Phase Details

### Phase 1: Market Foundation
**Goal**: 모든 후속 기획 문서의 근거가 되는 시장 분석과 차별화 전략이 확립된다
**Depends on**: Nothing (first phase)
**Requirements**: MKT-01, MKT-02, MKT-03
**Success Criteria** (what must be TRUE):
  1. 한국 AICC 시장 규모(3.5조원)와 성장률(CAGR 23.7%)이 출처와 함께 문서화되어 있다
  2. KT 69% 점유를 포함한 주요 경쟁사(통신 3사, 솔트룩스, 글로벌 플레이어)의 전략과 약점이 비교표로 정리되어 있다
  3. "성과 기반 과금 x 컴플라이언스 엔진" 복합 차별화 전략이 경쟁사 대비 빈 공간(white space)으로 논증되어 있다
  4. 후속 문서(PRD, 가격 전략)에서 인용할 수 있는 구체적 데이터 포인트가 10개 이상 포함되어 있다
**Plans**: 2 plans

Plans:
- [x] 01-01-PLAN.md — Executive Summary + 시장 기회 + 경쟁 구도 분석 (MKT-01, MKT-02)
- [x] 01-02-PLAN.md — White Space 차별화 전략 + 전략적 시사점 + 출처 (MKT-03)

### Phase 2: Product Vision & Core PRD
**Goal**: 제품의 정체성(누구를 위해, 무엇을, 왜)과 두 핵심 제품(보이스봇, Agent Assist)의 MVP 기능이 확정된다
**Depends on**: Phase 1
**Requirements**: PRD-01, PRD-02, PRD-03, PRD-04
**Success Criteria** (what must be TRUE):
  1. 구축형 vs SaaS 포지셔닝이 Perplexity 유사 비유를 활용하여 비기술 바이어도 이해 가능하게 서술되어 있다
  2. 금융, 보험, 이커머스 3개 산업별 바이어 페르소나(역할, 페인포인트, 구매 기준)가 구체적으로 정의되어 있다
  3. 보이스봇 MVP 기능셋이 산업 공통 + 산업별 특화로 구분되고, 출처 추적 응답과 할루시네이션 가드가 Day 1 필수로 포함되어 있다
  4. Agent Assist MVP 기능셋(실시간 전사/요약/추천 응답/컴플라이언스 경고)이 상담원 워크플로우 기준으로 정의되어 있다
  5. 두 제품의 기능 목록을 읽은 사람이 "이 제품이 무엇을 하는지" 바로 이해할 수 있다
**Plans**: 2 plans

Plans:
- [ ] 02-01-PLAN.md — Executive Summary + 제품 비전/포지셔닝 + 6개 바이어 페르소나 (PRD-01, PRD-02)
- [ ] 02-02-PLAN.md — 보이스봇 MVP 기능셋 + Agent Assist MVP 기능셋 + 기능 요약 매트릭스 + 최종 검토 (PRD-03, PRD-04)

### Phase 3: PRD Completion & Pricing
**Goal**: PRD의 실행 가능성(무엇을 새로 만들고, 무엇을 먼저 하고, 어떻게 측정하는지)과 수익 모델이 완성된다
**Depends on**: Phase 2
**Requirements**: PRD-05, PRD-06, PRD-07, PRC-01, PRC-02, PRC-03
**Success Criteria** (what must be TRUE):
  1. 모든 주요 기능이 Build / Buy / Enhance로 분류되고, 기존 자산(Hybrid RAG, AdminPanel 등) 재활용 범위가 명확하다
  2. MVP / Phase 2 / Future 우선순위 매트릭스가 리서치 기반 근거와 함께 제시되어 있다
  3. 해결률, AHT 단축, CSAT, 온보딩 소요시간, 컴플라이언스 위반률 등 KPI가 측정 방법과 목표치와 함께 정의되어 있다
  4. 구축형 가격 구조와 SaaS 성과 기반 과금 구조가 나란히 비교되어 있으며, "해결" 정의 기준이 명시되어 있다
  5. 경쟁사(KT, Genesys, Sierra AI 등) 가격 대비 뤼튼의 가격 포지셔닝 근거가 데이터로 뒷받침되어 있다
**Plans**: TBD

Plans:
- [ ] 03-01: TBD
- [ ] 03-02: TBD

### Phase 4: UX Wireframes
**Goal**: 세 가지 핵심 화면(관리 콘솔, Agent Assist, 셀프 온보딩)의 정보 구조와 사용자 플로우가 시각적으로 전달된다
**Depends on**: Phase 2
**Requirements**: UX-01, UX-02, UX-03
**Success Criteria** (what must be TRUE):
  1. 보이스봇 관리 콘솔 와이어프레임이 시나리오 빌더, 모니터링, 지식 관리 영역을 포함하며 기존 AdminPanel 대비 개선점이 드러난다
  2. Agent Assist 화면이 실시간 통화 요약, 추천 응답, 고객 정보 패널, 감정 분석, 컴플라이언스 경고를 하나의 화면에 배치하고 있다
  3. 셀프 온보딩 화면이 프로필 등록부터 테스트 콜, 결제까지의 전체 플로우를 단계별로 보여준다
  4. 와이어프레임만 보고도 각 화면의 핵심 사용자 태스크와 정보 계층을 파악할 수 있다
**Plans**: TBD

Plans:
- [ ] 04-01: TBD
- [ ] 04-02: TBD

### Phase 5: Product Roadmap Document
**Goal**: 기획서의 마지막 퍼즐로, 앞선 모든 문서를 종합하여 실행 가능한 제품 출시 계획이 완성된다
**Depends on**: Phase 3, Phase 4
**Requirements**: RM-01, RM-02
**Success Criteria** (what must be TRUE):
  1. Phase별 기능 배포 계획이 개발 리소스 가정과 함께 제시되고, 성과 과금 및 컴플라이언스 엔진이 Phase 1에 포함되어 있다
  2. 기술 의존성 그래프가 기능 간 선후 관계를 명확히 보여준다
  3. 리스크 매트릭스가 발생 확률과 영향도로 분류되어 있고, 각 리스크에 대한 완화 전략이 있다
  4. 타임라인과 마일스톤이 시각적으로 표현되어 있어 전체 출시 계획을 한눈에 파악할 수 있다
**Plans**: TBD

Plans:
- [ ] 05-01: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 -> 4 -> 5
(Phase 3 and Phase 4 can execute in parallel after Phase 2 completes)

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Market Foundation | 2/2 | Complete | 2026-04-02 |
| 2. Product Vision & Core PRD | 0/2 | Not started | - |
| 3. PRD Completion & Pricing | 0/TBD | Not started | - |
| 4. UX Wireframes | 0/TBD | Not started | - |
| 5. Product Roadmap Document | 0/TBD | Not started | - |
