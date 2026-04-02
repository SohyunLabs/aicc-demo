---
phase: 05-product-roadmap-document
plan: 02
subsystem: documentation
tags: [product-roadmap, dependency-graph, gantt-chart, risk-matrix, ascii-visualization, milestones, kpi]

# Dependency graph
requires:
  - phase: 05-product-roadmap-document
    provides: "05-01 docs/product-roadmap.md 전반부 (Executive Summary + 팀 구성 + Phase별 기능 배포 계획)"
  - phase: 02-product-vision-core-prd
    provides: "PRD Section 5.3 Build/Enhance 매트릭스, Section 7 KPI 목표치"
  - phase: 01-market-foundation
    provides: "시장 리스크 데이터 (MKT-DP-04 KT 69%, MKT-DP-17 금융위 가이드라인, MKT-DP-14 Agentic AI)"
provides:
  - "docs/product-roadmap.md 완성본 (304줄): 기술 의존성 그래프 + 타임라인/마일스톤 + 리스크 매트릭스 + 출처"
  - "3종 ASCII 시각화: 의존성 그래프 (노드-엣지, Build/Enhance 태그), 간트 차트 (M1-M18), 리스크 3x3 그리드"
  - "마일스톤-KPI 매핑 5개: 알파/베타/MVP 출시/안정화/확장 완료 (PRD-07 90일/180일/1년)"
  - "리스크 매트릭스 8개: 기술 3 + 시장 3 + 조직 2 (완화 전략/담당/트리거 전수 명시)"
affects: []

# Tech tracking
tech-stack:
  added: []
  patterns: ["3x3 확률-영향도 리스크 그리드 패턴", "ASCII 간트 차트 패턴 (M1-M18)", "크리티컬 패스 이중선 강조 패턴"]

key-files:
  created: []
  modified: ["docs/product-roadmap.md"]

key-decisions:
  - "리스크 8개 식별: T-1 할루시네이션, T-2 음성인식, T-3 스케일링, M-1 KT독점, M-2 규제급변, M-3 가격경쟁, O-1 인력확보, O-2 일정지연"
  - "크리티컬 패스 기간: 할루시네이션 가드(M2-M5) > 컴플라이언스(M3-M7) > 성과 과금(M5-M8) 직렬 5-6개월"
  - "MVP 출시 마일스톤 M8-M9 = PRD-07 90일 목표 (해결률 35%, 할루시네이션 <3%, CSAT 78점)"

patterns-established:
  - "3x3 ASCII 리스크 그리드: 확률(높/중/낮) x 영향도(낮/중/높), [T-N][M-N][O-N] ID 체계"
  - "리스크 상세 표 8칼럼: ID/리스크/차원/확률/영향/완화 전략/담당/트리거"
  - "마일스톤-KPI 매핑 표: 마일스톤/시점/핵심 KPI 목표/출처 4칼럼"

requirements-completed: [RM-02]

# Metrics
duration: 4min
completed: 2026-04-02
---

# Phase 5 Plan 02: 기술 의존성 그래프 + 타임라인 + 리스크 매트릭스 Summary

**3종 ASCII 시각화(의존성 그래프, 간트 차트, 리스크 3x3 그리드)와 8개 리스크 완화 전략으로 docs/product-roadmap.md 304줄 완성본을 완결하고, PRD-07 KPI를 5개 마일스톤에 매핑**

## Performance

- **Duration:** 4min
- **Started:** 2026-04-02T06:25:46Z
- **Completed:** 2026-04-02T06:29:48Z
- **Tasks:** 2
- **Files modified:** 1

## Accomplishments
- 기술 의존성 그래프 ASCII 완성 (9개 노드, Build/Enhance 태그, 크리티컬 패스 이중선 강조)
- ASCII 간트 차트 완성 (M1-M18, MVP/확장/고도화 Phase 경계, 마일스톤 행)
- 마일스톤-KPI 매핑 표 5개 (PRD-07 90일/180일/1년 수치 정확 매핑)
- 리스크 매트릭스 3x3 ASCII 그리드 + 상세 표 8개 리스크 (기술3/시장3/조직2)
- 출처 섹션 (선행 문서 5개 + 외부 참고 4개)

## Task Commits

Each task was committed atomically:

1. **Task 1: 기술 의존성 그래프 + 타임라인 및 마일스톤** - `e472a14` (feat)
2. **Task 2: 리스크 매트릭스 + 출처 섹션 + 문서 완성** - `c44c9d4` (feat)

## Files Created/Modified
- `docs/product-roadmap.md` - 뤼튼 AICC SaaS 제품 로드맵 완성본 (Section 3 의존성 그래프 + Section 4 타임라인 + Section 5 리스크 + 출처)

## Decisions Made
- **리스크 8개 선별:** 필수 5개(T-1 할루시네이션, T-2 음성인식, M-1 KT독점, M-2 규제급변, O-1 인력확보) + 추가 3개(T-3 스케일링, O-2 일정지연, M-3 가격경쟁) -- 기술/시장/조직 균형 배분
- **크리티컬 패스 시각 강조:** 이중선(═══) + 별도 영역으로 분리하여 의존성 그래프 내 시각적 우선순위 부여
- **MVP 출시 시점 M8-M9:** 크리티컬 패스 5-6개월 + QA 버퍼 고려, RESEARCH.md 추천 범위 내

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- docs/product-roadmap.md 전체 문서(304줄) 완성
- Phase 5 전체(Plan 01 + Plan 02) 완료 -- RM-01, RM-02 모두 충족
- 기획서 5문서 세트 완결: market-analysis.md + prd-core.md + pricing-strategy.md + ux-wireframes.md + product-roadmap.md

## Self-Check: PASSED

- FOUND: docs/product-roadmap.md
- FOUND: .planning/phases/05-product-roadmap-document/05-02-SUMMARY.md
- FOUND: e472a14 (Task 1 commit)
- FOUND: c44c9d4 (Task 2 commit)

---
*Phase: 05-product-roadmap-document*
*Completed: 2026-04-02*
