import { LayoutDashboard, PhoneIncoming, Bot, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DemoDashboardPage() {
  return (
    <div className="space-y-6">
      {/* KPI 카드 — 빈 상태 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: PhoneIncoming, label: "오늘 인입 건수", value: "—" },
          { icon: Bot, label: "AI 자동 해결률", value: "—" },
          { icon: Clock, label: "평균 처리 시간", value: "—" },
          { icon: TrendingUp, label: "고객 만족도", value: "—" },
        ].map((kpi) => (
          <Card key={kpi.label}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <kpi.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{kpi.label}</p>
                  <p className="text-2xl font-bold">{kpi.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 차트 영역 — 빈 상태 */}
      <Card>
        <CardContent className="py-16">
          <div className="flex flex-col items-center text-center max-w-sm mx-auto">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
              <LayoutDashboard className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-xl font-semibold mb-2">대시보드 준비 중</h2>
            <p className="text-muted-foreground mb-4">
              보이스봇과 Agent Assist가 연결되면 실시간 상담 데이터가 이곳에 표시됩니다.
            </p>
            <Button variant="outline">보이스봇 연결하기</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
