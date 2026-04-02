---
phase: 3
slug: prd-completion-pricing
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-04-02
---

# Phase 3 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | 수동 검증 (기획 문서 산출물 — 코드 없음) |
| **Config file** | none |
| **Quick run command** | `grep -c` / 문서 구조 검증 |
| **Full suite command** | ROADMAP.md 성공 기준 5항목 대조 |
| **Estimated runtime** | ~10 seconds (grep 기반) |

---

## Sampling Rate

- **After every task commit:** 해당 요구사항의 성공 기준 항목 확인
- **After every plan wave:** 전체 성공 기준 5항목 + 문서 간 일관성 확인
- **Before `/gsd:verify-work`:** 5개 성공 기준 모두 PASS
- **Max feedback latency:** 10 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 03-01-01 | 01 | 1 | PRD-05 | manual-only | `grep -c "Build\|Enhance" docs/prd-core.md` | ❌ W0 | ⬜ pending |
| 03-01-02 | 01 | 1 | PRD-06 | manual-only | `grep -c "MVP\|Phase 2\|Future" docs/prd-core.md` | ❌ W0 | ⬜ pending |
| 03-01-03 | 01 | 1 | PRD-07 | manual-only | `grep -c "KPI\|벤치마크\|목표치" docs/prd-core.md` | ❌ W0 | ⬜ pending |
| 03-02-01 | 02 | 1 | PRC-01 | manual-only | `grep -c "구축형" docs/pricing-strategy.md` | ❌ W0 | ⬜ pending |
| 03-02-02 | 02 | 1 | PRC-02 | manual-only | `grep -c "SaaS\|성과 기반\|해결" docs/pricing-strategy.md` | ❌ W0 | ⬜ pending |
| 03-02-03 | 02 | 1 | PRC-03 | manual-only | `grep -c "경쟁사\|Genesys\|KT" docs/pricing-strategy.md` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `docs/prd-core.md` 확장 — PRD-05~07 섹션 추가 (Phase 2 문서 확장)
- [ ] `docs/pricing-strategy.md` — 가격 전략 신규 문서 (PRC-01~03)

*Existing infrastructure covers phase — no test framework install needed.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| 20개 기능 Build/Enhance 분류 완전성 | PRD-05 | 기능 분류 정확성은 도메인 판단 필요 | Phase 2 기능 목록과 1:1 대조 |
| Impact x Effort 매트릭스 논리 일관성 | PRD-06 | 매트릭스 배치 논리는 주관적 판단 포함 | Day 1 필수 기능이 MVP에 포함되었는지 확인 |
| KPI 벤치마크 출처 검증 | PRD-07 | 출처 신뢰도는 자동화 불가 | Gartner/SQM Group 등 인용 데이터 대조 |
| 구축형 가격 현실성 | PRC-01 | 시장 데이터 대조 필요 | KT/레거시 구축형 범위와 비교 |
| SaaS 과금 "해결" 정의 명확성 | PRC-02 | 다층 정의의 경계 판단 | 보이스봇 완결 vs 상담원 보조 기준 명확성 확인 |
| 경쟁사 비교 공정성 | PRC-03 | 비교 프레임 편향 여부 | 비공개 데이터 "비공개" 표기 확인 |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 10s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
