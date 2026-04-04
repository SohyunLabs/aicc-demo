import { Activity, PhoneCall, AlertTriangle, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DemoMonitoringPage() {
  return (
    <Card>
      <CardContent className="py-16">
        <div className="flex flex-col items-center text-center max-w-md mx-auto">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
            <Activity className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-xl font-semibold mb-2">실시간 모니터링</h2>
          <p className="text-muted-foreground mb-6">
            보이스봇이 활성화되면 실시간 통화 현황, 컴플라이언스 경고, 상담 품질 지표가 이곳에 표시됩니다.
          </p>
          <Button variant="outline">보이스봇 활성화하기</Button>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full text-left mt-8">
            <div className="rounded-lg border p-3">
              <PhoneCall className="h-5 w-5 text-primary mb-2" />
              <p className="text-sm font-medium">실시간 통화</p>
              <p className="text-xs text-muted-foreground">진행 중인 AI/상담원 통화 현황</p>
            </div>
            <div className="rounded-lg border p-3">
              <AlertTriangle className="h-5 w-5 text-primary mb-2" />
              <p className="text-sm font-medium">컴플라이언스 알림</p>
              <p className="text-xs text-muted-foreground">규정 위반 감지 실시간 경고</p>
            </div>
            <div className="rounded-lg border p-3">
              <BarChart3 className="h-5 w-5 text-primary mb-2" />
              <p className="text-sm font-medium">품질 지표</p>
              <p className="text-xs text-muted-foreground">CSAT, FCR, AHT 실시간 추적</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
