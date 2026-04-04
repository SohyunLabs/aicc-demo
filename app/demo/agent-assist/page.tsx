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

// Agent Assist 데모 — 2컬럼 레이아웃
// 좌측: 전사 + AI 추천응답(인라인)
// 우측: 고객정보 + 핸드오프 컨텍스트 + 감정분석
export default function DemoAgentAssistPage() {
  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col -m-6">
      {/* 2컬럼 메인 영역 */}
      <div className="flex flex-1 overflow-hidden">
        {/* 좌측: 전사 + AI 추천응답 */}
        <div className="w-[60%] border-r p-4 overflow-y-auto space-y-4">
          <TranscriptPanel
            messages={mockTranscript}
            handoffContext={mockHandoffContext}
            realtimeKeywords={mockRealtimeKeywords}
          />
          {/* AI 추천응답을 전사 아래에 인라인 배치 */}
          <RecommendationPanel
            recommendations={mockRecommendations}
            complianceAlerts={mockComplianceAlerts}
          />
        </div>

        {/* 우측: 고객정보 + 핸드오프 컨텍스트 + 감정분석 */}
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
