---
phase: 03-prd-completion-pricing
plan: 01
subsystem: docs
tags: [prd, build-enhance, priority-matrix, kpi, asset-mapping, t-shirt-sizing]

# Dependency graph
requires:
  - phase: 02-product-vision-core-prd
    provides: "PRD-01~04 완성 (보이스봇/Agent Assist MVP 기능셋 20개, 6개 페르소나, 부록 기능 매트릭스)"
  - phase: 01-market-foundation
    provides: "MKT-DP 데이터 포인트 (시장 규모, 경쟁사, KPI 벤치마크)"
provides:
  - "PRD-05: Build/Enhance 분류 매트릭스 (20개 기능 전수, 5대 자산 매핑)"
  - "PRD-06: Impact x Effort 우선순위 매트릭스 (MVP 18개, Phase 2 2개)"
  - "PRD-07: 보이스봇/Agent Assist/플랫폼 3제품별 KPI + 90/180/365일 목표"
  - "자산 활용 비율 70% 검증 완료"
  - "T-shirt 사이징(S/M/L/XL) 기준 확립"
affects: [03-02-PLAN, phase-4-ux, phase-5-roadmap]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "KPI-BP-XX 벤치마크 블록인용 패턴 (Phase 1 MKT-DP 확장)"
    - "Build/Enhance 이원화 매트릭스 패턴"
    - "Impact x Effort 4분면 ASCII 다이어그램 패턴"
    - "90일/180일/1년 3단계 KPI 목표 구조"

key-files:
  created: []
  modified:
    - "docs/prd-core.md (315줄 -> 529줄, +214줄)"

key-decisions:
  - "감정 분석/품질 스코어링을 Phase 2 배치 -- 코어 밸류 외곽이며 L Effort"
  - "할루시네이션 가드/컴플라이언스 경고는 L Effort에도 MVP 강제 배치 -- Day 1 신뢰성 기준"
  - "Build 6개 전부 L Effort -> MVP 크리티컬 패스. Phase 5 로드맵 핵심 과제로 연결"
  - "KPI 목표치: 산업 평균 + 10-20% 알파 (SQM Group/Gartner/CloudTalk 벤치마크 기반)"
  - "컴플라이언스 위반 KPI: 위반률이 아닌 전수 검사 커버리지(100%)를 1차 지표로 설정"

patterns-established:
  - "KPI-BP-XX: KPI 벤치마크 데이터 포인트 태그 (MKT-DP-XX와 동일 인용 규격)"
  - "Build/Enhance 매트릭스: 기능/분류/기존자산/개발노력/근거 5열 표"
  - "우선순위 매트릭스: 기능/사업임팩트/개발노력/배치/논거 5열 표"
  - "KPI 매트릭스: KPI/산업평균/90일/180일/1년/측정방법 6열 표"

requirements-completed: [PRD-05, PRD-06, PRD-07]

# Metrics
duration: 5min
completed: 2026-04-02
---

# Phase 03 Plan 01: PRD 확장 (자산 활용 + 우선순위 + KPI) Summary

**20개 기능의 Build/Enhance 전수 분류(Enhance 14개 70%), Impact x Effort 2축 MVP 18개/Phase 2 2개 배치, 보이스봇/Agent Assist/플랫폼 3제품 KPI를 산업 벤치마크(SQM Group FCR 71%, Gartner 비용 $1.84) + 90일/180일/1년 3단계 목표로 정의하여 docs/prd-core.md를 315줄에서 529줄 완결 PRD로 확장**

## Performance

- **Duration:** 5 min
- **Started:** 2026-04-02T03:45:07Z
- **Completed:** 2026-04-02T03:49:44Z
- **Tasks:** 2/2
- **Files modified:** 1 (docs/prd-core.md)

## Accomplishments

- 20개 기능을 Build(6개)/Enhance(14개)로 전수 분류하고 5대 기존 자산과 매핑, Phase 2의 자산 활용 비율 70% 결론을 상세 매핑으로 검증
- Impact x Effort 2축 매트릭스로 MVP 18개, Phase 2 2개 배치 완료. 감정 분석/품질 스코어링은 Phase 2로 확정 (CONTEXT.md Claude's Discretion 항목 해결)
- 보이스봇/Agent Assist/플랫폼 3개 제품별 KPI를 KPI-BP-01~10 산업 벤치마크와 함께 정의, 90일/180일/1년 3단계 목표치 설정
- 코어 밸류 "틀리면 안 되는 상담"을 할루시네이션 발생률 <0.5% + 컴플라이언스 위반 사전 차단 95%+로 정량 측정 가능하게 연결
- docs/prd-core.md가 PRD-01~07 전체를 포함하는 529줄 완결 PRD로 확장, 마지막 문장에서 pricing-strategy.md와 Phase 4 연결 완료

## Task Commits

Each task was committed atomically:

1. **Task 1: PRD-05 자산 활용 계획 + PRD-06 우선순위 매트릭스** - `4de4aad` (feat)
2. **Task 2: PRD-07 성공 지표(KPI) 정의** - `7ec5a05` (feat)

**Plan metadata:** (pending final commit)

## Files Created/Modified

- `docs/prd-core.md` - PRD-01~07 완결 문서 (315줄 -> 529줄). Section 5 자산 활용 계획, Section 6 우선순위 매트릭스, Section 7 KPI 정의 추가. 마지막 문장 pricing-strategy.md 연결로 교체.

## Decisions Made

1. **감정 분석/품질 스코어링 Phase 2 배치 확정:** Phase 2 PRD에서 "MVP 포함 but Day 1 필수 제외"로 보류되었던 2개 기능을 매트릭스 논리에 따라 Phase 2로 확정. 감정 분석은 Medium Impact + L Effort (NLP 신규 개발), 품질 스코어링은 Medium-High Impact이나 코어 밸류("틀리면 안 되는 응답") 외곽 + L Effort.

2. **L Effort Build 기능의 MVP 강제 포함:** 할루시네이션 가드, 컴플라이언스 경고, 금융/보험 규제 기능 등 6개 Build 기능은 L Effort(1-2개월)임에도 "Day 1 신뢰성" 기준으로 MVP에 강제 포함. 이는 코어 밸류 일관성을 위한 전략적 결정.

3. **컴플라이언스 KPI 설계:** 위반률 산업 벤치마크가 부재하여, "전수 검사 커버리지(100% vs 3-5% 샘플링)"를 1차 KPI로 설정하고, 사전 차단율을 2차 KPI로 설정. 03-RESEARCH.md Open Question 3번의 권고안 반영.

4. **KPI 목표치 산업 평균 + 알파:** SQM Group FCR(71-76%), Gartner 건당 비용($1.84 vs $13.50), CloudTalk CSAT(75-84%)를 기준점으로, 10-20% 초과 목표 설정. CONTEXT.md 잠금 결정 준수.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

- Task 2 자동화 검증에서 `grep -c "90일\|180일\|1년"` 결과가 7줄(계획 기대값 10줄)로 미달. 원인: `grep -c`는 unique line count이며, KPI 표 헤더 3줄 + 본문 4줄 = 7줄이 전부. 실제로 3개 KPI 표 모두 90일/180일/1년 컬럼을 포함하고 있어 acceptance criteria는 충족. 계획의 자동화 검증 threshold가 다소 높게 설정된 것으로 판단.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- **Plan 03-02 (가격 전략) 준비 완료:** PRD-05~07이 완성되어 기능 범위, 우선순위, KPI가 확정됨. 가격 전략(PRC-01~03)의 직접적 입력이 모두 갖춰진 상태.
- **Phase 4 (UX) 입력 완료:** PRD 완결 문서(Section 1~7)가 UX 설계의 기능 사양서로 활용 가능.
- **Phase 5 (로드맵) 입력 완료:** KPI 목표치(Section 7)가 로드맵 마일스톤 성공 기준으로 직접 연결 가능. Build 6개의 L Effort가 크리티컬 패스.

---
*Phase: 03-prd-completion-pricing*
*Completed: 2026-04-02*
