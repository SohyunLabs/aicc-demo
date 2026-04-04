"use client";

import { ShieldAlert, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { EnrichedTranscript } from "@/components/agent-assist/enriched-transcript";
import { CustomerPanel } from "@/components/agent-assist/customer-panel";
import { CallStatusBar } from "@/components/agent-assist/call-status-bar";
import { AppSwitcher } from "@/components/layout/app-switcher";
import type { HandoffContext } from "@/types/aicc";

// === 보험상품 문의 시나리오 데이터 ===

const insuranceHandoffContext: HandoffContext = {
  customerIntent: "보험상품 문의 (암 진단비 포함 여부)",
  questionDetails: "암 진단비 포함 여부, 가입 후 즉시 보장 가능 여부",
  botResponse: "암 진단 특약 포함 상품 안내, 보장 내용 기본 설명 완료",
  incompleteItems: "면책기간(90일) 설명, 상세 보장 조건 안내",
  transferReason: "상세 보장 조건 문의 (복합 문의)",
  customerEmotion: "긍정 (관심 높음)",
  botCallDuration: "1분 15초",
};

const insuranceKeywords = ["암 진단비", "면책기간", "보장 범위", "특약", "90일"];

const handoffRows: { label: string; key: keyof HandoffContext }[] = [
  { label: "고객 의도", key: "customerIntent" },
  { label: "질문 내용", key: "questionDetails" },
  { label: "보이스봇 응답", key: "botResponse" },
  { label: "미완료 항목", key: "incompleteItems" },
  { label: "전환 사유", key: "transferReason" },
  { label: "고객 감정 상태", key: "customerEmotion" },
  { label: "통화 시간(보이스봇)", key: "botCallDuration" },
];

// 전사 항목 (대화 + 컴플라이언스 경고/해소 인라인)
const transcriptEntries = [
  {
    type: "message" as const,
    id: "t-1",
    speaker: "고객" as const,
    text: "이 보험에 암 진단비가 포함되어 있나요?",
    timestamp: "14:32:15",
  },
  {
    type: "message" as const,
    id: "t-2",
    speaker: "상담원" as const,
    text: "네, 해당 상품에 암 진단 특약이 포함되어 있습니다. 1차 암 진단 시 2,000만원이 지급됩니다.",
    timestamp: "14:32:22",
  },
  {
    type: "compliance-alert" as const,
    id: "ca-1",
    regulation: "보험업법 제95조의3",
    badgeText: "보험업법 제95조의3",
    message: "면책조항(90일 면책기간) 설명 누락 감지",
    detail: "계약일로부터 90일 이내 진단받을 경우 면책기간에 해당되어 보장되지 않습니다",
    source: "무배당 건강보험 약관 제22조 5 (면책조항)",
  },
  {
    type: "message" as const,
    id: "t-3",
    speaker: "고객" as const,
    text: "가입하고 바로 보장이 되는 건가요?",
    timestamp: "14:32:36",
  },
  {
    type: "message" as const,
    id: "t-4",
    speaker: "상담원" as const,
    text: "다만, 계약일로부터 90일 이내에 진단받을 경우 면책 기간에 해당되어 보장되지 않습니다. 90일 이후부터 보장이 시작됩니다.",
    timestamp: "14:32:42",
  },
  {
    type: "compliance-resolved" as const,
    id: "cr-1",
    message: "면책조항 설명 완료",
    timestamp: "14:32:42",
  },
  {
    type: "message" as const,
    id: "t-5",
    speaker: "고객" as const,
    text: "알겠습니다. 감사합니다.",
    timestamp: "14:32:55",
  },
];

const aiRecommendation = {
  text: "고객님께서 추가로 궁금하신 점이 있으시면 말씀해 주세요. 이 상품의 입원 일당 특약과 수술비 특약도 함께 안내드릴 수 있습니다. 월 보험료는 3만 2천원이며, 특약 추가 시 4만 5천원입니다.",
  confidence: 89,
  source: "무배당 건강보험 상품 안내서 §4.2",
  category: "추가 상품 안내",
};

// 고객 정보 (보험 시나리오)
const insuranceCustomerInfo = {
  name: "김민수",
  phone: "010-****-5678",
  tier: "일반" as const,
  previousCalls: 2,
  lastCallDate: "2026-03-20",
  issues: ["보험 문의"],
  recentTransaction: "무배당 건강보험 가입 상담",
  joinDate: "2025-08-10",
  lastConsultation: "2026-03-20 (보장 범위 문의)",
};

const insuranceSentimentData = {
  current: 0.3,
  trend: [
    { time: "0분", value: 0.1 },
    { time: "1분", value: 0.2 },
    { time: "2분", value: 0.15 },
    { time: "3분", value: 0.35 },
    { time: "4분", value: 0.3 },
  ],
};

// Agent Assist -- 보험업법 제95조 시나리오
// 좌측: 핸드오프 컨텍스트 + 컴플라이언스 규제 알림
// 중앙: 실시간 전사 (인라인 컴플라이언스 경고/해소) + AI 추천 응답
// 우측: 고객 정보 + 감정 분석
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
        {/* 좌측 25%: 핸드오프 컨텍스트 + 컴플라이언스 규제 알림 */}
        <div className="w-[25%] border-r p-4 overflow-y-auto space-y-4">
          {/* 핸드오프 컨텍스트 */}
          <Card className="bg-muted/50">
            <CardHeader className="py-3">
              <CardTitle className="text-sm">
                <Badge variant="outline" className="mr-2">보이스봇에서 전환됨</Badge>
                핸드오프 컨텍스트
              </CardTitle>
            </CardHeader>
            <CardContent className="py-2 space-y-3">
              <div className="pb-2">
                <p className="text-xs text-muted-foreground mb-2">핵심 키워드:</p>
                <div className="flex flex-wrap gap-1.5">
                  {insuranceKeywords.map((kw) => (
                    <Badge key={kw} variant="secondary" className="text-xs">{kw}</Badge>
                  ))}
                </div>
              </div>
              <table className="w-full text-sm border-t border-border/50 pt-2">
                <tbody>
                  {handoffRows.map((row) => (
                    <tr key={row.key} className="border-b border-border/50 last:border-b-0">
                      <td className="py-1.5 pr-3 font-medium text-muted-foreground whitespace-nowrap align-top">
                        {row.label}
                      </td>
                      <td className="py-1.5">{insuranceHandoffContext[row.key]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* 컴플라이언스 규제 알림 */}
          <Alert variant="destructive">
            <ShieldAlert className="h-4 w-4" />
            <AlertTitle className="text-sm font-semibold">보험업법 제95조의3 위반 감지</AlertTitle>
            <AlertDescription className="text-sm mt-1">
              면책조항(90일 면책기간) 설명 누락 감지
            </AlertDescription>
            <div className="flex items-center gap-2 mt-3">
              <Button variant="outline" size="sm" className="text-xs">
                경고 확인
              </Button>
              <Button variant="ghost" size="sm" className="text-xs gap-1">
                <BookOpen className="h-3 w-3" />
                해당 조항 보기
              </Button>
            </div>
          </Alert>
        </div>

        {/* 중앙 50%: 실시간 전사 + AI 추천 응답 */}
        <div className="w-[50%] border-r p-4 overflow-hidden">
          <EnrichedTranscript
            entries={transcriptEntries}
            recommendation={aiRecommendation}
          />
        </div>

        {/* 우측 25%: 고객 정보 + 감정 분석 */}
        <div className="w-[25%] p-4 overflow-y-auto">
          <CustomerPanel
            customer={insuranceCustomerInfo}
            sentiment={insuranceSentimentData}
          />
        </div>
      </div>

      {/* 하단: 통화 상태 바 */}
      <CallStatusBar />
    </div>
  );
}
