"use client";

import { useState } from "react";
import { Phone, Send, Bot, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SimMessage {
  speaker: "user" | "bot";
  text: string;
}

const demoResponses = [
  "안녕하세요! ABC 보험 AI 상담원입니다. 무엇을 도와드릴까요?",
  "보험 가입 문의시군요. 어떤 종류의 보험에 관심이 있으신가요? (자동차보험, 건강보험, 화재보험)",
  "자동차보험 안내해 드리겠습니다. 현재 운행 중인 차량의 연식과 차종을 알려주시면 맞춤 견적을 안내드릴 수 있습니다.",
  "감사합니다. 해당 차량 기준으로 기본 보장 플랜은 월 ₩45,000부터 시작합니다. 자세한 상담을 원하시면 상담원을 연결해 드릴까요?",
];

export function StepTestCall() {
  const [messages, setMessages] = useState<SimMessage[]>([
    { speaker: "bot", text: demoResponses[0] },
  ]);
  const [input, setInput] = useState("");
  const [responseIndex, setResponseIndex] = useState(1);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg: SimMessage = { speaker: "user", text: input };
    const botMsg: SimMessage = {
      speaker: "bot",
      text: demoResponses[responseIndex] ?? "감사합니다. 테스트가 완료되었습니다!",
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
    setResponseIndex((prev) => prev + 1);
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* 좌측: 시뮬레이터 */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            <CardTitle>테스트 콜 시뮬레이터</CardTitle>
          </div>
          <CardDescription>AI 보이스봇과 대화를 시뮬레이션합니다.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ScrollArea className="h-[300px] rounded-lg border p-3">
            <div className="space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.speaker === "user" ? "justify-end" : ""}`}>
                  {msg.speaker === "bot" && (
                    <div className="shrink-0 rounded-full bg-primary/10 p-1.5">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                      msg.speaker === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.speaker === "user" && (
                    <div className="shrink-0 rounded-full bg-muted p-1.5">
                      <User className="h-4 w-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="메시지를 입력하세요..."
            />
            <Button size="icon" onClick={sendMessage}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 우측: 결과 분석 */}
      <Card>
        <CardHeader>
          <CardTitle>테스트 결과</CardTitle>
          <CardDescription>AI 응답의 품질을 분석합니다.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">의도 인식 정확도</span>
              <Badge>92%</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">응답 관련도</span>
              <Badge variant="secondary">88%</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">컴플라이언스 준수</span>
              <Badge>100%</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">평균 응답 시간</span>
              <Badge variant="outline">230ms</Badge>
            </div>
          </div>

          <div className="rounded-lg bg-muted p-4">
            <h4 className="text-sm font-medium mb-2">분석 요약</h4>
            <p className="text-xs text-muted-foreground">
              테스트 콜에서 AI 보이스봇이 고객의 의도를 정확히 파악하고
              적절한 응답을 제공했습니다. 컴플라이언스 기준을 모두 충족하며,
              응답 시간이 목표치(500ms) 이내입니다.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
