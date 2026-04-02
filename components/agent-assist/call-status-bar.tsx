"use client";

import { useState, useEffect } from "react";
import { Phone, Mic, MicOff, PhoneOff, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function CallStatusBar() {
  // 와이어프레임 기준 03:42 시작
  const [elapsed, setElapsed] = useState(222);
  const [isMuted, setIsMuted] = useState(false);

  // 통화 타이머
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;

  return (
    <div className="flex items-center justify-between border-t bg-background px-6 py-2">
      <div className="flex items-center gap-4">
        {/* 통화 시간 */}
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">통화 시간</span>
          <span className="font-mono text-lg font-semibold tabular-nums">
            {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
          </span>
        </div>

        <span className="text-muted-foreground">|</span>

        {/* 녹음 상태 */}
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-500" />
          <Badge variant="outline" className="gap-1">
            녹음 중
          </Badge>
        </div>

        <span className="text-muted-foreground">|</span>

        {/* 전환 정보 */}
        <span className="text-sm text-muted-foreground">
          보이스봇→상담원 전환 (14:29:00)
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant={isMuted ? "destructive" : "outline"}
          size="sm"
          className="gap-1"
          onClick={() => setIsMuted(!isMuted)}
        >
          {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          {isMuted ? "음소거 해제" : "음소거"}
        </Button>
        <Button variant="outline" size="sm" className="gap-1">
          <Pause className="h-4 w-4" />
          보류
        </Button>
        <Button variant="destructive" size="sm" className="gap-1">
          <PhoneOff className="h-4 w-4" />
          통화 종료
        </Button>
      </div>
    </div>
  );
}
