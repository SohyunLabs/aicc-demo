"use client";

import { Headset, ShieldAlert, MessageSquareText, User, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Agent Assist 데모 — Empty State (통화 대기 중)
// 좌측 25%: 핸드오프 컨텍스트 + 컴플라이언스 규제 알림
// 중앙 50%: 실시간 전사 + AI 추천 응답
// 우측 25%: 고객 정보 + 감정 분석
export default function DemoAgentAssistPage() {
  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col -m-6">
      {/* 3칼럼 메인 영역 */}
      <div className="flex flex-1 overflow-hidden">
        {/* 좌측 25%: 핸드오프 컨텍스트 + 컴플라이언스 */}
        <div className="w-[25%] border-r p-4 overflow-y-auto space-y-4">
          {/* 핸드오프 컨텍스트 — 빈 상태 */}
          <Card className="bg-muted/50">
            <CardHeader className="py-3">
              <CardTitle className="text-sm">
                <Badge variant="outline" className="mr-2">대기</Badge>
                핸드오프 컨텍스트
              </CardTitle>
            </CardHeader>
            <CardContent className="py-8">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted mb-3">
                  <Headset className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">
                  보이스봇에서 상담원으로 전환되면<br />핸드오프 컨텍스트가 표시됩니다.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 컴플라이언스 규제 알림 — 빈 상태 */}
          <Card>
            <CardHeader className="py-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <ShieldAlert className="h-4 w-4" />
                컴플라이언스 알림
              </CardTitle>
            </CardHeader>
            <CardContent className="py-6">
              <div className="flex flex-col items-center text-center">
                <p className="text-sm text-muted-foreground">
                  통화 중 규제 위반이 감지되면<br />실시간으로 경고가 표시됩니다.
                </p>
                <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                  <Badge variant="secondary" className="text-xs">보험업법</Badge>
                  <Badge variant="secondary" className="text-xs">전자금융거래법</Badge>
                  <Badge variant="secondary" className="text-xs">개인정보보호법</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 중앙 50%: 실시간 전사 + AI 추천 응답 */}
        <div className="w-[50%] border-r p-4 overflow-y-auto">
          <Card className="h-full flex flex-col">
            <CardHeader className="py-3 shrink-0">
              <CardTitle className="text-sm">실시간 전사</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center py-8">
              <div className="flex flex-col items-center text-center max-w-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <MessageSquareText className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-lg font-semibold mb-2">통화 대기 중</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  상담 통화가 연결되면 실시간 음성 전사, 컴플라이언스 경고/해소,
                  AI 추천 응답이 이 영역에 표시됩니다.
                </p>
                <div className="grid grid-cols-3 gap-3 w-full text-left">
                  <div className="rounded-lg border p-2.5">
                    <div className="h-2 w-2 rounded-full bg-blue-400 mb-2" />
                    <p className="text-xs font-medium">고객 발화</p>
                  </div>
                  <div className="rounded-lg border p-2.5">
                    <div className="h-2 w-2 rounded-full bg-emerald-400 mb-2" />
                    <p className="text-xs font-medium">상담원 발화</p>
                  </div>
                  <div className="rounded-lg border p-2.5">
                    <div className="h-2 w-2 rounded-full bg-primary mb-2" />
                    <p className="text-xs font-medium">AI 추천</p>
                  </div>
                </div>
                <Button variant="outline" className="mt-6">
                  데모 통화 시작
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 우측 25%: 고객 정보 + 감정 분석 */}
        <div className="w-[25%] p-4 overflow-y-auto space-y-4">
          {/* 고객 정보 — 빈 상태 */}
          <Card>
            <CardHeader className="py-3">
              <CardTitle className="text-sm">고객 정보</CardTitle>
            </CardHeader>
            <CardContent className="py-6">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted mb-3">
                  <User className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">
                  통화 연결 시 고객 정보가<br />자동으로 조회됩니다.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 감정 분석 — 빈 상태 */}
          <Card className="flex-1">
            <CardHeader className="py-3">
              <CardTitle className="text-sm">감정 분석</CardTitle>
            </CardHeader>
            <CardContent className="py-6">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted mb-3">
                  <BarChart3 className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">
                  실시간 감정 게이지와<br />추이 그래프가 표시됩니다.
                </p>
                {/* 비활성 게이지 미리보기 */}
                <div className="w-full mt-4">
                  <div className="h-3 w-full rounded-full bg-gradient-to-r from-rose-400 via-amber-300 to-emerald-400 opacity-15" />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-muted-foreground/50">불안</span>
                    <span className="text-xs text-muted-foreground/50">안심</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 하단: 통화 상태 바 — 대기 상태 */}
      <div className="flex items-center justify-between border-t bg-background px-6 py-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Headset className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">통화 대기 중</span>
            <span className="font-mono text-lg font-semibold tabular-nums text-muted-foreground/50">
              00:00
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1" disabled>
            음소거
          </Button>
          <Button variant="outline" size="sm" className="gap-1" disabled>
            보류
          </Button>
          <Button variant="destructive" size="sm" className="gap-1" disabled>
            통화 종료
          </Button>
        </div>
      </div>
    </div>
  );
}
