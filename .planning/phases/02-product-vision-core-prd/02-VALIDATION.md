---
phase: 2
slug: product-vision-core-prd
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-04-02
---

# Phase 2 — Validation Strategy

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

- **After every task commit:** 해당 섹션의 성공 기준 충족 여부 확인
- **After every plan wave:** 전체 문서 통독 + 10페이지 이내 분량 확인 + 독립 가독성 검증
- **Before `/gsd:verify-work`:** 성공 기준 5개 항목 모두 충족 확인
- **Max feedback latency:** N/A (수동 검토)

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 02-01-xx | 01 | 1 | PRD-01 | manual-only | 문서 내 Perplexity 비유 존재 + 포지셔닝 서술 명확성 확인 | N/A | ⬜ pending |
| 02-01-xx | 01 | 1 | PRD-02 | manual-only | 6개 페르소나 카드 존재 + 각 카드의 7개 항목 완성도 확인 | N/A | ⬜ pending |
| 02-02-xx | 02 | 1 | PRD-03 | manual-only | 공통/특화 구분 표 존재 + Day 1 필수 기능에 출처 추적/할루시네이션 가드 포함 확인 | N/A | ⬜ pending |
| 02-02-xx | 02 | 1 | PRD-04 | manual-only | 통화 전/중/후 구분 + 4대 기능 존재 + 보이스봇 연동 시나리오 존재 확인 | N/A | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

*Existing infrastructure covers all phase requirements.* (문서 작성 Phase이므로 테스트 인프라 불필요)

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| 구축형 vs SaaS 포지셔닝이 Perplexity 비유로 비기술 바이어도 이해 가능하게 서술 | PRD-01 | Markdown 문서 품질 판단은 자동화 불가 | 비전 섹션에서 Perplexity 비유 존재 확인 + 포지셔닝 설명을 비기술자가 읽고 이해 가능한지 판단 |
| 금융/보험/이커머스 3개 산업별 바이어 페르소나 정의 | PRD-02 | 페르소나 품질/완성도 판단 필요 | 6개 카드(산업별 2명) 존재 + 각 카드에 역할/페인/구매기준/예산 포함 확인 |
| 보이스봇 MVP: 공통 코어 + 산업 애드온, 출처 추적 + 할루시네이션 가드 Day 1 필수 | PRD-03 | 기능 분류 적절성 판단 필요 | 공통/특화 구분 표 존재 + Day 1 필수에 출처 추적/할루시네이션 가드 명시 확인 |
| Agent Assist MVP: 상담원 워크플로우 기준 4대 기능 + 보이스봇 연동 | PRD-04 | 워크플로우 매핑 적절성 판단 필요 | 통화 전/중/후 구분 존재 + 4대 기능(전사/요약/추천/컴플라이언스) 배치 확인 + 보이스봇 연동 시나리오 존재 |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency acceptable
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
