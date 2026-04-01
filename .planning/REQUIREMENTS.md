# Requirements: 뤼튼 AICC 제품화 기획

**Defined:** 2026-04-01
**Core Value:** "틀리면 안 되는 상담에서, 검증된 AI 응답을 제공한다" — Hybrid RAG 기반 출처 추적 가능하고 신뢰 가능한 답변

## v1 Requirements

3일 이내 제출할 기획 문서 세트. 각 산출물은 독립 문서로 작성.

### PRD (제품 요구사항 문서)

- [ ] **PRD-01**: 제품 비전 및 포지셔닝 정의 — 기존 구축형 vs 신규 SaaS 포지셔닝, Perplexity 유사 비유 활용
- [ ] **PRD-02**: 타겟 고객 세그먼트 및 페르소나 정의 — 금융·보험·이커머스 3개 산업별 바이어 페르소나
- [ ] **PRD-03**: 보이스봇 MVP 기능셋 정의 — 산업 공통 + 산업별 특화 기능, 출처 추적 응답·할루시네이션 가드 Day 1 포함
- [ ] **PRD-04**: Agent Assist MVP 기능셋 정의 — 실시간 전사/요약/추천 응답/컴플라이언스 경고 등
- [ ] **PRD-05**: 기존 자산 활용 계획 vs 신규 개발 범위 — Build/Buy/Enhance 분류, 컴플라이언스 엔진은 기존 RAG 재포지셔닝
- [ ] **PRD-06**: 기능 우선순위 매트릭스 — MVP / Phase 2 / Future 분류, 리서치 기반 근거
- [ ] **PRD-07**: 성공 지표(KPI) 정의 — 해결률, AHT 단축, CSAT, 온보딩 소요시간, 컴플라이언스 위반률

### UX (화면 설계)

- [ ] **UX-01**: 보이스봇 관리 콘솔 와이어프레임 — 기존 AdminPanel 제품 수준 개선, 시나리오 빌더/모니터링/지식 관리
- [ ] **UX-02**: Agent Assist 실시간 보조 화면 — 실시간 통화 요약/추천 응답/고객 정보 패널/감정 분석/컴플라이언스 경고
- [ ] **UX-03**: 고객사 셀프 온보딩 화면 — 프로필 등록→산업 템플릿→문서 업로드→시나리오 빌더→테스트 콜→결제 플로우

### RM (로드맵)

- [ ] **RM-01**: Phase별 기능 배포 계획 — 개발 리소스 가정 포함, 성과 과금+컴플라이언스 엔진 Phase 1 포함
- [ ] **RM-02**: 타임라인 및 의존성·리스크 정의 — 기술 의존성 그래프, 리스크 매트릭스, 마일스톤

### PRC (가격 전략)

- [ ] **PRC-01**: 구축형 가격 구조 — 기존 프로젝트 기반 가격 체계 정리
- [ ] **PRC-02**: SaaS형 가격 구조 — 성과 기반 과금(Outcome-Based Pricing) 설계, "해결" 정의 기준 명시
- [ ] **PRC-03**: 경쟁력 있는 가격 포인트 근거 — 경쟁사(KT, Genesys, Sierra AI 등) 가격 대비 포지셔닝

### MKT (시장 분석)

- [ ] **MKT-01**: 경쟁사 분석 대비 포지셔닝 — KT 69% 점유, 통신 3사 전략 대응, 글로벌 플레이어 부재 분석
- [ ] **MKT-02**: 한국 AICC 시장 규모 및 성장 추세 — 3.5조원, CAGR 23.7%, Agentic AI 전환 트렌드
- [ ] **MKT-03**: "뾰족한 강점" 차별화 요소 정의 — 성과 기반 과금 × 컴플라이언스 엔진 복합 전략

## v2 Requirements

현 기획 범위 외. 향후 제품 개발 단계에서 상세화.

- **DEV-01**: 보이스봇 MVP 실제 구현 (코드)
- **DEV-02**: Agent Assist 실제 구현 (코드)
- **DEV-03**: 셀프 온보딩 플랫폼 구현 (코드)
- **DEV-04**: 아웃바운드 보이스봇 설계
- **DEV-05**: 다국어 지원 (영어/일본어)

## Out of Scope

| Feature | Reason |
|---------|--------|
| 실제 개발 코드 작성 | 기획 문서 산출물이 목표, 코드 아님 |
| 아웃바운드 보이스봇 상세 설계 | v1은 인바운드 우선, 규제 리스크 |
| 모바일 앱 설계 | 웹 기반 관리 콘솔 우선 |
| 텍스트 채팅봇 설계 | 보이스 채널에 집중 후 확장 |
| Figma/고해상도 목업 | ASCII/텍스트 와이어프레임 수준으로 충분 |
| 내부 실데이터 기반 분석 | 공개 데이터 + 산업 베스트 프랙티스 기반 추론 |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| PRD-01 | TBD | Pending |
| PRD-02 | TBD | Pending |
| PRD-03 | TBD | Pending |
| PRD-04 | TBD | Pending |
| PRD-05 | TBD | Pending |
| PRD-06 | TBD | Pending |
| PRD-07 | TBD | Pending |
| UX-01 | TBD | Pending |
| UX-02 | TBD | Pending |
| UX-03 | TBD | Pending |
| RM-01 | TBD | Pending |
| RM-02 | TBD | Pending |
| PRC-01 | TBD | Pending |
| PRC-02 | TBD | Pending |
| PRC-03 | TBD | Pending |
| MKT-01 | TBD | Pending |
| MKT-02 | TBD | Pending |
| MKT-03 | TBD | Pending |

**Coverage:**
- v1 requirements: 18 total
- Mapped to phases: 0
- Unmapped: 18 (roadmap creation will fill this)

---
*Requirements defined: 2026-04-01*
*Last updated: 2026-04-01 after initial definition*
