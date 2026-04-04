"use client";

import { HandoffContextCard } from "@/components/agent-assist/handoff-context-card";
import { TranscriptCard } from "@/components/agent-assist/transcript-card";
import { CustomerInfoCard } from "@/components/agent-assist/customer-info-card";
import { SentimentCard } from "@/components/agent-assist/sentiment-card";
import { RecommendationPanel } from "@/components/agent-assist/recommendation-panel";
import { CallStatusBar } from "@/components/agent-assist/call-status-bar";
import {
  mockTranscript,
  mockRecommendations,
  mockComplianceAlerts,
  mockCustomerInfo,
  mockSentimentData,
  mockHandoffContext,
  mockRealtimeKeywords,
} from "@/lib/mock-aicc";
import { AppSwitcher } from "@/components/layout/app-switcher";

// Agent Assist -- 풀스크린 3칼럼 상담원 보조 화면
// 좌측 25%: 핸드오프 컨텍스트 + 고객 정보
// 중앙 50%: 실시간 전사 + AI 추천 응답
// 우측 25%: 감정 분석
export default function AgentAssistPage() {
  return (
    <div className="flex h-screen flex-col">
      {/* 상단 헤더 */}
      <div className="flex items-center justify-between border-b bg-background px-6 py-3">
        <AppSwitcher current="agent-assist" />
        <span className="text-sm text-muted-foreground">
          상담 ID: CALL-2026-0402-001
        </span>
      </div>

      {/* 3칼럼 메인 영역 */}
      <div className="flex flex-1 overflow-hidden">
        {/* 좌측 25%: 핸드오프 컨텍스트 + 고객 정보 */}
        <div className="w-[25%] border-r p-4 overflow-y-auto space-y-4">
          <HandoffContextCard
            handoffContext={mockHandoffContext}
            realtimeKeywords={mockRealtimeKeywords}
          />
          <CustomerInfoCard customer={mockCustomerInfo} />
        </div>

        {/* 중앙 50%: 실시간 전사 + AI 추천 응답 */}
        <div className="w-[50%] border-r p-4 overflow-y-auto space-y-4">
          <TranscriptCard messages={mockTranscript} />
          <RecommendationPanel
            recommendations={mockRecommendations}
            complianceAlerts={mockComplianceAlerts}
          />
        </div>

        {/* 우측 25%: 감정 분석 */}
        <div className="w-[25%] p-4 overflow-y-auto">
          <SentimentCard sentiment={mockSentimentData} />
        </div>
      </div>

      {/* 하단: 통화 상태 바 */}
      <CallStatusBar />
    </div>
  );
}
