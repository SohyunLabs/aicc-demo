"use client";

import { TranscriptPanel } from "@/components/agent-assist/transcript-panel";
import { RecommendationPanel } from "@/components/agent-assist/recommendation-panel";
import { CustomerPanel } from "@/components/agent-assist/customer-panel";
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

      {/* 2컬럼 메인 영역 */}
      <div className="flex flex-1 overflow-hidden">
        {/* 좌측 60%: 전사 + AI 추천응답(인라인) */}
        <div className="w-[60%] border-r p-4 overflow-y-auto space-y-4">
          <TranscriptPanel
            messages={mockTranscript}
            handoffContext={mockHandoffContext}
            realtimeKeywords={mockRealtimeKeywords}
          />
          <RecommendationPanel
            recommendations={mockRecommendations}
            complianceAlerts={mockComplianceAlerts}
          />
        </div>

        {/* 우측 40%: 고객정보 + 핸드오프 컨텍스트 + 감정분석 */}
        <div className="w-[40%] p-4 overflow-y-auto">
          <CustomerPanel
            customer={mockCustomerInfo}
            sentiment={mockSentimentData}
          />
        </div>
      </div>

      {/* 하단: 통화 상태 바 */}
      <CallStatusBar />
    </div>
  );
}
