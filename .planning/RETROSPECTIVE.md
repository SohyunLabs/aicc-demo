# Project Retrospective

*A living document updated after each milestone. Lessons feed forward into future planning.*

## Milestone: v1.0 — AICC SaaS Product Planning

**Shipped:** 2026-04-02
**Phases:** 5 | **Plans:** 10 | **Tasks:** 20

### What Was Built
- 한국 AICC 시장 분석 문서 (market-analysis.md, 467줄) — 시장 규모, 경쟁 구도, 차별화 전략
- PRD 코어 문서 (prd-core.md, 529줄) — 제품 비전, 페르소나, 보이스봇/Agent Assist MVP 기능셋
- 가격 전략 문서 (pricing-strategy.md, 256줄) — 구축형/SaaS 이중 가격 체계, 성과 기반 과금
- UX 와이어프레임 (ux-wireframes.md, 862줄) — 관리 콘솔, Agent Assist, 셀프 온보딩 ASCII 목업
- 제품 로드맵 (product-roadmap.md, 304줄) — 기능 배포 계획, 의존성 그래프, 리스크 매트릭스

### What Worked
- 문서 적층 생산 패턴: 각 Phase 산출물이 다음 Phase 입력으로 직접 연결되어 일관성 유지
- Phase 3/4 병렬화 가능 구조: PRD 완성과 UX 설계가 독립적으로 진행 가능
- PRD-06 기능 목록을 후속 문서(가격, UX, 로드맵)에서 1:1 매핑하여 추적성 확보
- 인라인 참조 형식 "(PRD-06 참조)" 패턴으로 문서 간 교차 검증 가능

### What Was Inefficient
- Phase 3-5의 ROADMAP.md 체크박스가 업데이트되지 않아 실행 완료 후에도 `[ ]` 상태로 남음
- STATE.md 성능 메트릭이 Phase 2까지만 구조화되고 이후는 비정형 테이블로 추가됨

### Patterns Established
- 문서별 Executive Summary 3-bullet 패턴
- 듀얼 페르소나 (CXO + 실무자) 구조
- ASCII 시각화 3종 세트 (의존성 그래프, 간트 차트, 리스크 3x3 그리드)
- 인라인 참조 + 출처 섹션 이중 추적 패턴

### Key Lessons
1. 기획 문서 프로젝트는 코드 프로젝트와 달리 테스트/빌드가 없어 Phase 실행이 매우 빠름 (평균 4-5min/plan)
2. 문서 간 데이터 일관성(예: 기능 개수, 가격 수치)이 가장 중요한 품질 지표
3. "해결(resolution)" 같은 핵심 용어 정의를 초기에 확정하면 후속 문서 전체에 파급

### Cost Observations
- Model mix: executor opus, verifier sonnet
- Profile: quality
- Notable: 기획 문서 프로젝트라 Plan당 2 tasks × 10 plans = 20 tasks, 모두 단일 파일(docs/*.md) 수정

---

## Cross-Milestone Trends

### Process Evolution

| Milestone | Phases | Plans | Key Change |
|-----------|--------|-------|------------|
| v1.0 | 5 | 10 | 초기 마일스톤 — 문서 적층 생산 패턴 확립 |

### Top Lessons (Verified Across Milestones)

1. 문서 간 데이터 일관성 교차 검증이 품질의 핵심
2. 적층 생산(각 문서가 이전 문서 참조)은 일관성에 효과적이나, 초기 문서 변경 시 연쇄 영향 주의
