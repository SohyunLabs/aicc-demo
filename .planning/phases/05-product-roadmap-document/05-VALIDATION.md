---
phase: 5
slug: product-roadmap-document
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-04-02
---

# Phase 5 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | 수동 검증 (문서 산출물) |
| **Config file** | none |
| **Quick run command** | 문서 리뷰 체크리스트 |
| **Full suite command** | 성공 기준 4항목 전수 검증 |
| **Estimated runtime** | ~5 minutes (수동 검증) |

---

## Sampling Rate

- **After every task commit:** 성공 기준 해당 항목 수동 확인
- **After every plan wave:** 전체 성공 기준 4항목 + PRD 데이터 일치 검증
- **Before `/gsd:verify-work`:** 전체 문서 세트(5개 문서) 간 일관성 크로스체크
- **Max feedback latency:** 5 minutes

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 05-01-01 | 01 | 1 | RM-01 | manual-only | 문서 내 기능 목록 vs PRD-06 대조 | N/A | ⬜ pending |
| 05-01-02 | 01 | 1 | RM-02 | manual-only | 문서 내 시각 자료 3종 존재 확인 | N/A | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

*Existing infrastructure covers all phase requirements.* (문서 산출물이므로 테스트 프레임워크 불필요)

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Phase별 기능 배포 계획 + 리소스 가정 | RM-01 | Markdown 문서 산출물 | PRD-06 20개 기능이 로드맵에 1:1 매핑되었는지 대조 |
| 성과 과금 + 컴플라이언스 엔진 Phase 1 포함 | RM-01 | 문서 구조 검증 | Phase 1 섹션에 해당 기능 명시 여부 확인 |
| 기술 의존성 그래프 | RM-02 | 시각적 표현 검증 | ASCII 다이어그램에 기능 간 선후관계 표현 확인 |
| 리스크 매트릭스 | RM-02 | 확률/영향도 분류 검증 | 리스크별 발생확률, 영향도, 완화전략 존재 확인 |
| 타임라인/마일스톤 시각화 | RM-02 | 시각적 표현 검증 | 간트 차트 형태의 ASCII 타임라인 존재 확인 |

---

## Validation Sign-Off

- [ ] All tasks have manual verification instructions
- [ ] Sampling continuity: every task has verification step
- [ ] Wave 0: N/A (문서 산출물)
- [ ] No watch-mode flags
- [ ] Feedback latency < 5 minutes
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
