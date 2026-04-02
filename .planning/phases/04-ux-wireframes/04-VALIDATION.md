---
phase: 4
slug: ux-wireframes
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-04-02
---

# Phase 4 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | 수동 검증 (기획 문서 산출물) |
| **Config file** | none |
| **Quick run command** | N/A — 문서 리뷰 기반 |
| **Full suite command** | N/A — 성공 기준 4항목 체크리스트 기반 |
| **Estimated runtime** | ~0 seconds (수동 검증) |

---

## Sampling Rate

- **After every task commit:** 해당 요구사항의 와이어프레임 + 태스크 주석 완성도 확인
- **After every plan wave:** 전체 3개 화면의 데이터 일관성 교차 검증 (PRD/가격 문서 대조)
- **Before `/gsd:verify-work`:** 성공 기준 4항목 전체 충족 확인
- **Max feedback latency:** 0 seconds (수동 검증)

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 04-01-XX | 01 | 1 | UX-01 | manual-only | 문서 내 GNB 5영역 존재 + "기존 대비 개선" 섹션 확인 | -- | ⬜ pending |
| 04-02-XX | 02 | 1 | UX-02 | manual-only | 문서 내 3칸럼 레이아웃에 5개 요소 배치 확인 | -- | ⬜ pending |
| 04-03-XX | 03 | 1 | UX-03 | manual-only | 문서 내 6스텝 각각의 와이어프레임 존재 확인 | -- | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

*Existing infrastructure covers all phase requirements.*

기획 문서 산출물이므로 테스트 인프라 불필요. 검증은 성공 기준 체크리스트 기반.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| 관리 콘솔 와이어프레임에 시나리오 빌더, 모니터링, 지식 관리 포함 + 기존 대비 개선점 | UX-01 | 기획 문서 시각적 검토 필요 | GNB 5영역 와이어프레임 존재 확인, "기존 AdminPanel 대비 개선" 대조 섹션 확인 |
| Agent Assist 5개 기능을 하나의 화면에 배치 | UX-02 | 기획 문서 시각적 검토 필요 | 3칸럼 레이아웃에 통화 요약, 추천 응답, 고객 정보, 감정 분석, 컴플라이언스 경고 배치 확인 |
| 셀프 온보딩 프로필~결제 전체 플로우 | UX-03 | 기획 문서 시각적 검토 필요 | 6스텝 각각의 와이어프레임 존재 + 전체 플로우 다이어그램 확인 |
| 핵심 사용자 태스크와 정보 계층 파악 가능 | 성공기준4 | 주관적 판단 필요 | 각 화면의 태스크 번호 마커 + 하단 설명 존재, 정보 계층이 시각적으로 구분 |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 0s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
