"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, PhoneOff, SkipForward, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// 통화 상태 타입
type CallStatus = "idle" | "connecting" | "active" | "ended";

// 시뮬레이션 대화 데이터
const scenarioSteps = [
  {
    speaker: "customer" as const,
    text: "적금 중도해지하면 이자가 어떻게 되나요?",
  },
  {
    speaker: "ai" as const,
    text: '중도해지 시 약정 이율의 50%가 적용됩니다. 12개월 미만 해지 시 기본 이율의 50%만 적용됩니다.',
    source: "정기적금 상품설명서 제8조",
  },
  {
    speaker: "customer" as const,
    text: "그러면 지금 해지하면 이자 손해가 얼마나 되나요?",
  },
  {
    speaker: "ai" as const,
    text: "현재 6개월 납입 기준, 약정 이율 4.5% 대신 중도해지 이율 2.25%가 적용되어 약 ₩112,500의 이자 차이가 발생합니다.",
    source: "정기적금 상품설명서 제8조 2항",
  },
];

export function StepTestCall() {
  const [callStatus, setCallStatus] = useState<CallStatus>("idle");
  const [elapsed, setElapsed] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<typeof scenarioSteps>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // 통화 타이머
  useEffect(() => {
    if (callStatus === "active") {
      timerRef.current = setInterval(() => {
        setElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [callStatus]);

  const formatTime = (seconds: number) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  // 테스트 콜 시작
  const startCall = () => {
    setCallStatus("connecting");
    setElapsed(0);
    setStepIndex(0);
    setVisibleSteps([]);
    // 1.5초 후 통화 시작 + 첫 발화 표시
    setTimeout(() => {
      setCallStatus("active");
      setVisibleSteps([scenarioSteps[0]]);
      setStepIndex(1);
    }, 1500);
  };

  // 다음 발화
  const nextUtterance = () => {
    if (stepIndex < scenarioSteps.length) {
      setVisibleSteps((prev) => [...prev, scenarioSteps[stepIndex]]);
      setStepIndex((prev) => prev + 1);
    }
  };

  // 통화 종료
  const endCall = () => {
    setCallStatus("ended");
    if (timerRef.current) clearInterval(timerRef.current);
  };

  // 마지막 AI 응답 찾기 (결과 패널 표시용)
  const lastAiResponse = [...visibleSteps].reverse().find((s) => s.speaker === "ai");

  return (
    <div>
      <h2 className="text-lg font-semibold mb-1">AI 상담 품질을 직접 확인하세요</h2>
      <p className="text-sm text-muted-foreground mb-6">
        실제 시나리오로 테스트 콜을 진행합니다. AI의 응답 정확도와 출처 추적을 확인할 수 있습니다.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {/* 좌측: 시뮬레이터 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <CardTitle>시뮬레이터</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* 고객 시나리오 선택 */}
            <div>
              <label className="text-sm font-medium mb-1.5 block">고객 시나리오 선택:</label>
              <select className="w-full rounded-md border bg-background px-3 py-2 text-sm">
                <option>적금 중도해지 이자 문의</option>
              </select>
            </div>

            {/* 테스트 콜 시작 CTA */}
            {callStatus === "idle" && (
              <Button className="w-full" onClick={startCall}>
                <Phone className="h-4 w-4 mr-2" />
                테스트 콜 시작
              </Button>
            )}

            {/* 통화 상태 표시 */}
            {callStatus !== "idle" && (
              <div className="rounded-lg border p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">통화 상태:</span>
                  {callStatus === "connecting" && (
                    <Badge variant="outline" className="animate-pulse">연결 중...</Badge>
                  )}
                  {callStatus === "active" && (
                    <Badge className="bg-emerald-500 text-white">
                      통화 중 ({formatTime(elapsed)})
                    </Badge>
                  )}
                  {callStatus === "ended" && (
                    <Badge variant="secondary">종료 ({formatTime(elapsed)})</Badge>
                  )}
                </div>

                {/* 대화 로그 */}
                {visibleSteps.length > 0 && (
                  <div className="space-y-2 mt-2 max-h-[180px] overflow-y-auto">
                    {visibleSteps.map((step, i) => (
                      <div
                        key={i}
                        className={`text-xs rounded-lg px-3 py-2 ${
                          step.speaker === "customer"
                            ? "bg-muted text-foreground ml-4"
                            : "bg-primary/10 text-primary mr-4"
                        }`}
                      >
                        <span className="font-medium">
                          {step.speaker === "customer" ? "고객:" : "AI:"}
                        </span>{" "}
                        {step.text}
                      </div>
                    ))}
                  </div>
                )}

                {/* 다음 발화 / 통화 종료 버튼 */}
                {callStatus === "active" && (
                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={nextUtterance}
                      disabled={stepIndex >= scenarioSteps.length}
                    >
                      <SkipForward className="h-3 w-3 mr-1" />
                      다음 발화
                    </Button>
                    <Button size="sm" variant="destructive" onClick={endCall}>
                      <PhoneOff className="h-3 w-3 mr-1" />
                      통화 종료
                    </Button>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* 우측: 결과 패널 */}
        <Card>
          <CardHeader>
            <CardTitle>결과 패널</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* AI 응답 + 출처 */}
            <div>
              <h4 className="text-sm font-medium mb-2">AI 응답:</h4>
              {lastAiResponse ? (
                <div className="rounded-lg bg-muted p-3 space-y-2">
                  <p className="text-sm">{lastAiResponse.text}</p>
                  {"source" in lastAiResponse && lastAiResponse.source && (
                    <div className="flex items-center gap-1.5 pt-1 border-t">
                      <FileText className="h-3 w-3 text-primary" />
                      <span className="text-xs font-medium text-primary">
                        출처: &quot;{lastAiResponse.source}&quot;
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="rounded-lg bg-muted p-3">
                  <p className="text-sm text-muted-foreground">
                    테스트 콜을 시작하면 AI 응답이 여기에 표시됩니다.
                  </p>
                </div>
              )}
            </div>

            {/* 품질 점수 */}
            <div>
              <h4 className="text-sm font-medium mb-2">품질 점수:</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">정확도</span>
                  <Badge>{callStatus === "ended" || visibleSteps.length > 1 ? "95%" : "-"}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">응답시간</span>
                  <Badge variant="secondary">
                    {callStatus === "ended" || visibleSteps.length > 1 ? "1.2s" : "-"}
                  </Badge>
                </div>
              </div>
            </div>

            {/* 할루시네이션 감지 */}
            <div>
              <h4 className="text-sm font-medium mb-2">할루시네이션 감지:</h4>
              <div className="rounded-lg bg-emerald-50 dark:bg-emerald-950/30 p-3 border border-emerald-200 dark:border-emerald-800">
                <p className="text-sm text-emerald-700 dark:text-emerald-400">
                  {callStatus === "ended" || visibleSteps.length > 1
                    ? '"미감지 (출처 확인됨)"'
                    : "테스트 완료 후 결과가 표시됩니다."}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
