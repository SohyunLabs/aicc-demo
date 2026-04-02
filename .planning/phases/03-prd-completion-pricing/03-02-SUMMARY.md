---
phase: 03-prd-completion-pricing
plan: 02
subsystem: docs
tags: [pricing-strategy, outcome-based-pricing, tco-analysis, competitor-benchmarking]

# Dependency graph
requires:
  - phase: 01-market-foundation
    provides: "MKT-DP 시장 데이터 포인트 (KT 69%, Sierra AI $150M ARR, 경쟁사 가격 벤치마크)"
  - phase: 02-product-vision-core-prd
    provides: "6개 페르소나 예산 규모, 구축형 vs SaaS 비교표, 보이스봇/Agent Assist 기능 정의"
provides:
  - "PRC-01: 구축형 가격 구조 정리 (비용 항목표, 구조적 한계, 장점 인정)"
  - "PRC-02: SaaS 성과 기반 과금 3티어 (Starter ₩2,500/Professional ₩2,000/Enterprise ₩1,500~)"
  - "PRC-02: 해결(Resolution) 다층 정의 (보이스봇 완결/상담원 보조/미해결)"
  - "PRC-02: 금융/보험/이커머스 3개 산업별 TCO 비교 시나리오"
  - "PRC-03: 경쟁사 17개사 가격 비교표 + ASCII 포지셔닝 맵 + 고객사 규모별 포지셔닝"
affects: [04-ux-wireframes, 05-roadmap-document]

# Tech tracking
tech-stack:
  added: []
  patterns: ["PRC-BP 가격 벤치마크 블록인용 태그", "TCO 비교 시나리오 2열 비교표 패턴", "ASCII 가격 포지셔닝 맵"]

key-files:
  created: ["docs/pricing-strategy.md"]
  modified: []

key-decisions:
  - "보이스봇 완결 해결 단가 ₩2,000/건 (Professional): 글로벌 텍스트 채널 벤치마크 $1.50 x ₩1,350 + 보이스 프리미엄"
  - "Agent Assist 보조 해결 단가를 보이스봇 완결의 30% 수준으로 설정: AI 가치 기여분 비례"
  - "미해결 건 무과금 원칙: Sierra AI 동일 원칙 채택으로 고객사 도입 리스크 원천 제거"
  - "구축형 장점(보안 통제권, 커스터마이징) 솔직 인정: 편향 방지 및 객관성 확보"
  - "비공개 가격 추정치 대체 대신 '비공개 (공개 가격 정보 미확보)' 명시적 표기"

patterns-established:
  - "PRC-BP-XX 가격 벤치마크 블록인용: 본문 내 가격 데이터 포인트 인용 형식"
  - "TCO 시나리오 패턴: 구축형 vs SaaS 2열 비교 + 논거 bullet"
  - "비공개 데이터 표기: '비공개 (공개 가격 정보 미확보)' 일관 형식"

requirements-completed: [PRC-01, PRC-02, PRC-03]

# Metrics
duration: 4min
completed: 2026-04-02
---

# Phase 3 Plan 2: Pricing Strategy Summary

**SaaS 성과 기반 과금 3티어(₩1,500-2,500/건) + 해결 다층 정의 + 17개 경쟁사 가격 비교 + 3개 산업별 TCO 시나리오가 포함된 256줄 규모의 가격 전략 문서 완성**

## Performance

- **Duration:** 4min
- **Started:** 2026-04-02T03:45:05Z
- **Completed:** 2026-04-02T03:49:29Z
- **Tasks:** 2
- **Files modified:** 1

## Accomplishments
- docs/pricing-strategy.md 신규 생성 (256줄) -- PRC-01/02/03 전체 포함
- 해결(Resolution) 다층 정의: 보이스봇 완결 / 상담원 보조 / 미해결(무과금) 3단계 명확화
- 3티어 SaaS 요금제 구체적 단가 제시: Starter ₩2,500 / Professional ₩2,000 / Enterprise ₩1,500~/건
- 금융/보험/이커머스 3개 산업별 TCO 비교 시나리오로 구축형 대비 SaaS 경제적 논거 완성
- 17개 경쟁사 가격 비교표 + ASCII 포지셔닝 맵 + 고객사 규모별 포지셔닝 표
- PRC-BP-01~05 벤치마크 블록인용으로 가격 산정 근거 데이터 기반 논증

## Task Commits

Each task was committed atomically:

1. **Task 1: PRC-01 구축형 가격 구조 + PRC-02 SaaS 성과 기반 과금** - `6cfc027` (feat)
2. **Task 2: PRC-03 경쟁사 가격 포지셔닝 + 출처 섹션 + 문서 마무리** - `191686b` (feat)

## Files Created/Modified
- `docs/pricing-strategy.md` - 뤼튼 AICC 가격 전략 문서 (256줄): 구축형 가격 구조, SaaS 성과 기반 과금 3티어, 경쟁사 가격 포지셔닝, 출처

## Decisions Made
- **보이스봇 완결 해결 단가 ₩2,000/건 (Professional):** 글로벌 텍스트 채널 벤치마크 $0.99-$2.00에 보이스 프리미엄(STT/TTS) 가산. $1.50 x ₩1,350 = ₩2,025 ≈ ₩2,000. 산업 데이터 기반 산정.
- **Agent Assist 보조 해결 단가 30% 수준:** AI가 보조만 하고 상담원이 처리하므로, 가치 기여분 비례 원칙 적용. Professional ₩600/건.
- **미해결 건 무과금 원칙:** Sierra AI 동일 원칙 채택. "해결하지 못하면 청구하지 않는다"로 고객사 도입 리스크 원천 제거.
- **구축형 장점 인정:** 보안 통제권, 커스터마이징 자유도, 대기업 조달 프로세스 적합성을 솔직히 인정. 편향 방지.
- **비공개 가격 표기:** 한국 경쟁사(KT 에이센, 카카오, 채널톡) 가격은 "비공개 (공개 가격 정보 미확보)"로 표기. 추정치로 대체하지 않음.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- docs/pricing-strategy.md 완성으로 Phase 3 PRC-01~03 요구사항 충족
- Phase 4 (UX Wireframes)에서 가격 표시 화면 설계 시 3티어 요금제 데이터 참조 가능
- Phase 5 (Roadmap Document)에서 비즈니스 모델 섹션의 가격 전략 근거로 활용 가능

## Self-Check: PASSED

- FOUND: docs/pricing-strategy.md
- FOUND: .planning/phases/03-prd-completion-pricing/03-02-SUMMARY.md
- FOUND: 6cfc027 (Task 1 commit)
- FOUND: 191686b (Task 2 commit)

---
*Phase: 03-prd-completion-pricing*
*Completed: 2026-04-02*
