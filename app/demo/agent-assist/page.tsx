"use client";

import { AlertTriangle, CheckCircle2, User, Headset, FileText, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// 대화 메시지 타입
interface Message {
  role: "customer" | "agent";
  text: string;
  time: string;
}

// 컴플라이언스 경고 타입
interface ComplianceAlert {
  afterIndex: number; // 이 메시지 뒤에 경고 표시
  resolved: boolean;
  regulation: string;
  issue: string;
  action: string;
  source: string;
}

const messages: Message[] = [
  { role: "customer", time: "14:32:15", text: "이 보험에 암 진단비가 포함되어 있나요?" },
  { role: "agent", time: "14:32:22", text: "네, 해당 상품에 암 진단 특약이 포함되어 있습니다. 1차 암 진단 시 2,000만원이 지급됩니다." },
  { role: "customer", time: "14:32:35", text: "가입하고 바로 보장이 되는 건가요?" },
  { role: "agent", time: "14:32:42", text: "다만, 계약일로부터 90일 이내에 진단된 암은 면책 기간에 해당하여 보장되지 않습니다. 90일 이후부터 보장이 시작됩니다." },
  { role: "customer", time: "14:32:55", text: "알겠습니다. 감사합니다." },
];

const alert: ComplianceAlert = {
  afterIndex: 1,
  resolved: true,
  regulation: "보험업법 제95조의5",
  issue: "면책조항(90일 면책기간) 설명 누락 감지",
  action: "\"계약일로부터 90일 이내 진단된 암은 면책기간에 해당하여 보장되지 않습니다\" 설명 필요",
  source: "무배당 건강보험 약관 제22조 (면책조항)",
};

export default function AgentAssistDemoPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[calc(100vh-8rem)]">
      {/* 좌측: 실시간 전사 + 컴플라이언스 경고 */}
      <div className="lg:col-span-2 flex flex-col gap-4">
        {/* 통화 정보 바 */}
        <div className="flex items-center justify-between rounded-lg border bg-card px-4 py-2">
          <div className="flex items-center gap-3">
            <Badge variant="default" className="gap-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              통화 중
            </Badge>
            <span className="text-sm font-medium">김민수 고객</span>
            <span className="text-xs text-muted-foreground">보험상품 문의</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            02:41
          </div>
        </div>

        {/* 실시간 전사 패널 */}
        <Card className="flex-1 overflow-auto">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">실시간 전사</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {messages.map((msg, i) => (
              <div key={i}>
                {/* 메시지 */}
                <div className={`flex gap-3 ${msg.role === "agent" ? "flex-row-reverse" : ""}`}>
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                    msg.role === "customer" ? "bg-muted" : "bg-primary/10"
                  }`}>
                    {msg.role === "customer"
                      ? <User className="h-4 w-4 text-muted-foreground" />
                      : <Headset className="h-4 w-4 text-primary" />
                    }
                  </div>
                  <div className={`max-w-[75%] ${msg.role === "agent" ? "text-right" : ""}`}>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-medium">
                        {msg.role === "customer" ? "고객" : "상담원"}
                      </span>
                      <span className="text-xs text-muted-foreground">{msg.time}</span>
                    </div>
                    <div className={`rounded-lg px-3 py-2 text-sm inline-block text-left ${
                      msg.role === "customer"
                        ? "bg-muted"
                        : "bg-primary/5 border"
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </div>

                {/* 컴플라이언스 경고 — 해당 메시지 뒤에 삽입 */}
                {alert.afterIndex === i && (
                  <div className="my-3 mx-2 rounded-lg border-2 border-destructive/50 bg-destructive/5 p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-destructive">
                            컴플라이언스 경고
                          </span>
                          <Badge variant="destructive" className="text-xs">
                            {alert.regulation}
                          </Badge>
                        </div>
                        <p className="text-sm font-medium">{alert.issue}</p>
                        <div className="rounded-md bg-background border p-3">
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">권장 안내:</span>{" "}
                            {alert.action}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <FileText className="h-3 w-3" />
                          출처: {alert.source}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 경고 해소 표시 — 상담원이 면책조항을 설명한 후 */}
                {i === 3 && alert.resolved && (
                  <div className="my-3 mx-2 flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/5 px-4 py-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-green-700 font-medium">
                      컴플라이언스 경고 해소 — 면책조항 설명 완료
                    </span>
                    <span className="text-xs text-green-600/70 ml-auto">14:32:42</span>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* 우측: 고객 정보 + 추천 응답 */}
      <div className="space-y-4">
        {/* 고객 정보 */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">고객 정보</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">이름</span>
              <span className="font-medium">김민수</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">가입 상품</span>
              <span className="font-medium">무배당 건강보험</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">계약일</span>
              <span className="font-medium">2026-03-15</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">이전 상담</span>
              <span className="font-medium">2건</span>
            </div>
          </CardContent>
        </Card>

        {/* 실시간 요약 */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">실시간 요약</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1.5 text-sm">
              <p><span className="font-medium">문의:</span> 암 진단비 보장 여부</p>
              <p><span className="font-medium">안내:</span> 1차 암 2,000만원 + 90일 면책</p>
              <p><span className="font-medium">상태:</span> 고객 확인 완료</p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-3">
              <Badge variant="outline" className="text-xs">암진단비</Badge>
              <Badge variant="outline" className="text-xs">면책조항</Badge>
              <Badge variant="outline" className="text-xs">90일</Badge>
            </div>
          </CardContent>
        </Card>

        {/* 추천 응답 */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">추천 응답</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border bg-muted/30 p-3 text-sm">
              <p className="mb-2">
                &quot;해당 상품의 암 진단 특약은 계약일로부터 90일 면책기간이 적용됩니다.
                90일 이후 진단 시 1차 암 2,000만원이 지급됩니다.&quot;
              </p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <FileText className="h-3 w-3" />
                약관 제15조 제2항, 제22조
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
