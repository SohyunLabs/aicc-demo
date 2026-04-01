---
phase: 1
slug: market-foundation
status: draft
nyquist_compliant: false
wave_0_complete: true
created: 2026-04-01
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | 수동 검증 (문서 산출물이므로 자동화 테스트 해당 없음) |
| **Config file** | N/A |
| **Quick run command** | N/A |
| **Full suite command** | N/A |
| **Estimated runtime** | N/A (수동 검토) |

---

## Sampling Rate

- **After every task commit:** 성공 기준 체크리스트 수동 확인
- **After every plan wave:** 전체 문서 통독 + 데이터 포인트 10개 이상 존재 여부 확인
- **Before `/gsd:verify-work`:** 성공 기준 4개 항목 모두 충족 확인
- **Max feedback latency:** N/A (수동 검토)

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 01-01-01 | 01 | 1 | MKT-02 | manual-only | 문서 내 수치 + 각주 출처 확인 | N/A | ⬜ pending |
| 01-01-02 | 01 | 1 | MKT-01 | manual-only | 문서 내 비교표 존재 + 데이터 출처 확인 | N/A | ⬜ pending |
| 01-01-03 | 01 | 1 | MKT-03 | manual-only | 포지셔닝 맵 존재 + white space 논증 확인 | N/A | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

*Existing infrastructure covers all phase requirements.*

Phase 1 산출물은 Markdown 문서(전략 제안서)이므로 테스트 인프라 불필요.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| 경쟁사 7+3사 비교표 존재 + 전략/약점 데이터 기반 서술 | MKT-01 | 문서 산출물 — 코드 테스트 불가 | 비교표 존재 여부 확인, 각 경쟁사 약점이 출처와 함께 서술되었는지 검토 |
| 시장 규모(3.5조원)와 성장률(CAGR 23.7%) 출처 포함 문서화 | MKT-02 | 문서 산출물 — 코드 테스트 불가 | 본문 내 수치 존재 + 각주 출처 표기 확인 |
| 2축 포지셔닝 맵에서 성과기반 과금 x 컴플라이언스 빈 공간 논증 | MKT-03 | 문서 산출물 — 코드 테스트 불가 | 포지셔닝 맵 존재 + white space가 시각적으로 식별 가능한지 확인 |
| 후속 문서 인용 가능 데이터 포인트 10개 이상 | SC-04 | 문서 산출물 — 코드 테스트 불가 | 데이터 포인트 목록에서 10개 이상 번호 매겨져 있는지 확인 |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [x] Sampling continuity: no 3 consecutive tasks without automated verify (N/A — all manual, document phase)
- [x] Wave 0 covers all MISSING references (N/A — no test infra needed)
- [x] No watch-mode flags
- [ ] Feedback latency < N/A (수동 검토)
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
