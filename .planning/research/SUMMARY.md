# Research Summary: AICC SaaS 제품화

**Domain:** AI Contact Center (AICC) SaaS
**Researched:** 2026-03-31 (보강 리서치 포함)
**Overall confidence:** HIGH (1차: 트레이닝 데이터 기반 → 2차: 웹 검색 실시간 데이터 보강)

## Executive Summary

### 시장 현실 (기존 리서치 대비 핵심 수정)

**기존 인식**: "글로벌 리더 Genesys가 주요 경쟁자, 한국 시장은 구축형 중심"
**실제 현실**: **KT가 한국 AICC 시장 69%를 장악**. 통신 3사(KT, SKT, LG U+)가 시장 지배. 글로벌 플레이어(Genesys, NICE)는 한국에 사실상 부재.

한국 AICC 시장은 2025년 **3.5조원** 시대에 진입했으며(YoY 12%), 2026년을 'AI 수익 안착의 분기점'으로 설정한 통신 3사가 에이전틱 AI(Agentic AI) 기반 AICC로 본격 경쟁 중이다.

### 기존 포지셔닝의 한계

**기존**: "Hybrid RAG 기반 출처 추적 답변" (기술 중심)
**문제**: 기술은 모방 가능하고, 비기술 바이어에게 전달 불가

### 새로운 뾰족한 강점: 복합 무기

> **"성과만큼만 내시고, 규제 걱정은 저희가 합니다."**

**성과 기반 과금(Outcome-Based Pricing)** × **컴플라이언스 엔진(Compliance Engine)** 결합이 시장에서 열린 빈 공간:
- 한국 기업 57%가 AI ROI 불확실성을 최대 장벽으로 꼽음 → 성과 기반 과금으로 해결
- 한국 금융회사 85%가 AI 리스크 관리 기준 미수립 → 컴플라이언스 엔진으로 해결
- **모든 경쟁사가 MODEL 레이어에서 경쟁** (KT 믿음 LLM, 솔트룩스 LUXIA, LG U+ 익시젠) — **BUSINESS MODEL + COMPLIANCE 레이어는 열려 있음**

## Key Findings

### 1차 리서치 (유지)
**Stack:** AWS + K8s 기반 마이크로서비스, 기존 Hybrid RAG 유지, LLM은 API 기반 (GPT-4o + Claude), 빌링은 Stripe + 토스페이먼츠
**Architecture:** 테넌트별 격리된 마이크로서비스, 이벤트 드리븐 (Kafka), API Gateway 패턴
**Critical pitfall:** 멀티테넌시 데이터 격리 미흡 시 금융 고객사 진입 불가

### 2차 보강 리서치 (신규)
**Market:** 글로벌 CCaaS $7.08B (2025), CAGR 17-20%. 한국 AICC 3.5조원, CAGR 23.7%
**Competition:** KT 69% 점유. 통신 3사 Agentic AI 경쟁. 글로벌 플레이어 한국 부재
**Technology shift:** Agentic AI 전환 — 2029년 80% 자율 해결 예측 (Gartner). Voice AI 배포 340% YoY 성장
**Regulation:** AI 기본법 시행 (2026.01), FSC AI 가이드라인, 금감원 AI 전담조직 — 컴플라이언스가 시장 진입 필수 조건화
**Pricing:** Per-seat → Outcome-based 전환 가속. Sierra AI ($10B), Zendesk, Intercom 사례
**Sharp weapon:** 성과 기반 과금 + 컴플라이언스 엔진 복합 전략 (상세: SHARP-WEAPON.md)

## Implications for Roadmap (수정)

기존 Phase 구조 유지하되, 핵심 관점 변경:

1. **Phase 1: SaaS 인프라 + 보이스봇 MVP + 컴플라이언스 엔진**
   - 기존: 멀티테넌시 강화, 셀프 온보딩, 빌링
   - **추가**: 감사 로그 시스템, 출처 추적 자동화, AI 고지/동의 플로우, 성과 기반 과금 인프라
   - **변경**: 빌링을 단순 구독형이 아닌 성과 기반 과금으로 설계

2. **Phase 2: Agent Assist + 컴플라이언스 강화**
   - 기존: Agent Assist UI, 실시간 요약, 감정 분석
   - **추가**: 실시간 컴플라이언스 모니터링, 금융 도메인 가드레일

3. **Phase 3: 확장 + 수직 심화**
   - 기존: WFM 연동, CRM 연동, 멀티채널
   - **추가**: 산업별 컴플라이언스 패키지 (금융 → 보험 → 이커머스), 규제 보고서 자동 생성

**Phase ordering rationale 변경:**
- "기술 자산 SaaS화" → **"시장 진입 무기(성과 과금 + 컴플라이언스)를 먼저 장착하고 기술을 래핑"**
- Phase 1에서 컴플라이언스 엔진은 기존 Hybrid RAG(Neo4j + ES)를 재포지셔닝하는 것이므로 추가 개발 최소화 가능

## Research Files

| 파일 | 내용 | 신뢰도 |
|------|------|--------|
| STACK.md | 기술 스택 비교, Build/Buy/Enhance 분류 | MEDIUM |
| FEATURES.md | 기능 랜드스케이프, 차별화 기능, MVP 추천 | MEDIUM |
| ARCHITECTURE.md | 시스템 아키텍처, 실시간 음성 파이프라인, 멀티테넌시 | HIGH |
| PITFALLS.md | 11가지 위험 요소, 금융 컴플라이언스 | HIGH |
| **MARKET-2026.md** | 시장 규모, Agentic AI 전환, 규제 변화, 가격 모델 전환 | **HIGH (신규)** |
| **COMPETITORS-2026.md** | 경쟁사 최신 동향, KT 69% 점유, 통신 3사 전략, 한국 시장 판도 | **HIGH (신규)** |
| **SHARP-WEAPON.md** | 뾰족한 강점 분석, 5가지 후보 비교, 복합 전략 추천 | **HIGH (신규)** |

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | MEDIUM | 핵심 패턴은 확실하나 구체적 버전/서비스는 검증 필요 |
| Features | MEDIUM | 도메인 표준 기반이나 경쟁사 최신 기능 변동 미반영 가능 |
| Architecture | HIGH | CCaaS 아키텍처 패턴은 잘 정립됨 |
| Pitfalls | HIGH | 구축형->SaaS 전환 패턴의 공통 함정은 잘 알려져 있음 |
| **Market (2026)** | **HIGH** | 웹 검색 기반 최신 데이터, Gartner/McKinsey/Forrester 인용 |
| **Competition (2026)** | **HIGH** | 웹 검색 기반 실시간 경쟁사 데이터, 가격 포인트 포함 |
| **Sharp Weapon** | **HIGH** | 시장 데이터 기반 전략 분석, SaaS 차별화 사례 참조 |

## Remaining Gaps

- ~~경쟁사 2025년 하반기 이후 제품 업데이트~~ → ✅ COMPETITORS-2026.md에서 해결
- ~~한국 금융 클라우드 규제 최신 동향~~ → ✅ MARKET-2026.md에서 AI 기본법/FSC 가이드라인 반영
- ~~가격 전략 수립을 위한 경쟁사 실제 가격 포인트~~ → ✅ COMPETITORS-2026.md에서 글로벌 가격 포함
- 구체적인 STT/TTS 엔진 벤치마크 (한국어 음성 인식 정확도 비교) → 미해결
- ISMS-P 인증 타임라인 및 비용 추정 → 미해결
- **성과 기반 과금의 "해결" 정의 기준** → 신규 gap (PRC-02에서 정의 필요)
- **컴플라이언스 엔진의 구체적 기능 명세** → 신규 gap (PRD에서 정의 필요)
