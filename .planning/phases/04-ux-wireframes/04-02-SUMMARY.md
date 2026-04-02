---
phase: 04-ux-wireframes
plan: 02
subsystem: docs
tags: [ux-wireframes, ascii-wireframe, agent-assist, self-onboarding, pricing-tier, compliance]

# Dependency graph
requires:
  - phase: 02-product-vision-core-prd
    provides: Agent Assist MVP 기능셋(통화 전/중/후 워크플로우), 보이스봇-Agent Assist 연동 시나리오
  - phase: 03-prd-completion-pricing
    provides: KPI 정의(해결률/AHT/CSAT/컴플라이언스), 가격 3티어 구조(Starter/Professional/Enterprise)
  - phase: 04-ux-wireframes-plan-01
    provides: UX-01 관리 콘솔 와이어프레임, 주석 규약, 레이아웃 패턴
provides:
  - UX-02 Agent Assist 실시간 보조 화면 3칸럼 와이어프레임
  - 컴플라이언스 경고 인라인 시나리오 4단계 흐름도
  - 보이스봇 맥락 인수 시나리오
  - UX-03 셀프 온보딩 6스텝 위자드 와이어프레임 (상세 3 + 간략 3)
  - 결제 3티어 비교 카드 (pricing-strategy.md 수치 일치)
  - 테스트 콜 시뮬레이터 (품질 95%, 응답시간 1.2s)
  - 부록: 기존 AdminPanel 대비 6영역 개선 비교표
  - docs/ux-wireframes.md 전체 문서 완성 (862줄)
affects: [05-roadmap-document]

# Tech tracking
tech-stack:
  added: []
  patterns: [3칸럼 레이아웃 Agent Assist (좌30%/중40%/우30%), 6스텝 위자드 온보딩, 컴플라이언스 인라인 경고 4단계 흐름도, 3티어 비교 카드 레이아웃]

key-files:
  created: []
  modified: [docs/ux-wireframes.md]

key-decisions:
  - "Agent Assist 3칸럼 배치: 좌(전사/요약) 중(추천 응답/경고) 우(고객 정보/감정) -- 상담원 시선 흐름 기반"
  - "컴플라이언스 경고를 인라인(전사 하이라이트 + 중앙 배너) 방식으로 설계 -- 모달 팝업으로 상담 흐름을 끊지 않음"
  - "셀프 온보딩 깊이 배분: 상세 3단계(산업 템플릿, 시나리오 빌더, 테스트 콜, 결제) + 간략 2단계(프로필, 문서 업로드)"
  - "결제 3티어 가격을 pricing-strategy.md 2.2절과 정확히 일치시킴 (₩2,500/₩2,000/커스텀)"

patterns-established:
  - "Agent Assist 3칸럼: 좌(맥락 파악) 중(행동 유도) 우(참고 정보) 정보 계층"
  - "스텝 위자드 인디케이터: [v N]---[*현재*]---[ 미진행 ] 패턴"
  - "3티어 비교 카드: Starter | >>>추천<<< Professional | Enterprise 가로 배치"
  - "컴플라이언스 인라인 경고: 감지 -> 표시 -> 대응 -> 해제 4단계 순서도"

requirements-completed: [UX-02, UX-03]

# Metrics
duration: 4min
completed: 2026-04-02
---

# Phase 4 Plan 02: Agent Assist + 셀프 온보딩 와이어프레임 Summary

**UX-02 Agent Assist 3칸럼 실시간 보조 화면(인라인 컴플라이언스 경고 + 보이스봇 맥락 인수)과 UX-03 6스텝 셀프 온보딩(테스트 콜 시뮬레이터 + 3티어 결제 비교 카드)으로 docs/ux-wireframes.md 전체 문서(862줄) 완성**

## Performance

- **Duration:** 4min
- **Started:** 2026-04-02T05:23:00Z
- **Completed:** 2026-04-02T05:27:52Z
- **Tasks:** 2
- **Files modified:** 1

## Accomplishments
- UX-02 Agent Assist 3칸럼 레이아웃(좌30%/중40%/우30%)에 5개 기능(전사, 추천 응답, 컴플라이언스 경고, 고객 정보, 감정 분석) 배치 완성
- 컴플라이언스 경고 인라인 시나리오를 4단계 순서도(위반 감지 -> 경고 표시 -> 상담원 대응 -> 자동 해제)로 상세 표현
- 보이스봇 맥락 인수 시나리오: 전환 카드(고객 의도/질문 내용/보이스봇 응답 요약/미완료 항목/전환 사유) 상세 설계
- UX-03 6스텝 위자드(프로필 > 산업 템플릿 > 문서 업로드 > 시나리오 빌더 > 테스트 콜 > 결제) 전체 와이어프레임
- 결제 3티어 비교 카드에 pricing-strategy.md 수치 정확 반영 (₩2,500/₩2,000/커스텀, Agent Assist ₩800/₩600, 미해결건 ₩0)
- 부록: 기존 AdminPanel 대비 6영역(시나리오 관리/성과 모니터링/지식 관리/컴플라이언스/상담원 보조/온보딩) 개선 비교표
- 문서 전체 완성: UX-01 + UX-02 + UX-03 + 부록 4대 섹션 862줄

## Task Commits

Each task was committed atomically:

1. **Task 1: UX-02 Agent Assist 실시간 보조 화면 와이어프레임** - `1077f06` (feat)
2. **Task 2: UX-03 셀프 온보딩 + 부록 + 문서 완성** - `db162ed` (feat)

## Files Created/Modified
- `docs/ux-wireframes.md` - UX 와이어프레임 문서 (862줄). UX-02 Agent Assist 3칸럼 + UX-03 6스텝 온보딩 + 부록 추가하여 전체 완성

## Decisions Made
- Agent Assist 3칸럼 배치를 상담원 시선 흐름(좌->중->우) 기반으로 설계: 좌(맥락 파악: 전사/요약), 중(행동 유도: 추천 응답/경고), 우(참고 정보: 고객/감정)
- 컴플라이언스 경고를 인라인 방식(전사 텍스트 내 하이라이트 + 중앙 패널 배너)으로 설계하여 상담 흐름을 끊지 않으면서 대응 유도 (CONTEXT.md 결정사항 준수)
- 셀프 온보딩 깊이 배분: 핵심 가치 체험 단계(산업 템플릿/시나리오 빌더/테스트 콜/결제)를 상세, 행정적 단계(프로필/문서 업로드)를 간략으로 차등 배분
- 결제 3티어 가격을 pricing-strategy.md 2.2절과 정확히 일치시켜 문서 간 데이터 정합성 확보

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- Phase 4 전체 완성: docs/ux-wireframes.md에 3개 화면(UX-01/UX-02/UX-03) + 부록 포함
- Phase 5(로드맵 문서) 입력 준비 완료: 와이어프레임 기반 화면 복잡도/개발 공수 추정 가능
- KPI 예시값(65%/-25%/83점/0.3%)과 가격 데이터(₩2,500/₩2,000/커스텀)가 Phase 2/3 문서와 교차 검증 완료

## Self-Check: PASSED

- FOUND: docs/ux-wireframes.md
- FOUND: .planning/phases/04-ux-wireframes/04-02-SUMMARY.md
- FOUND: 1077f06 (Task 1 commit)
- FOUND: db162ed (Task 2 commit)

---
*Phase: 04-ux-wireframes*
*Completed: 2026-04-02*
