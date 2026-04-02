import { Server, Zap, GitBranch, ArrowUpCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { SystemStatus } from "@/types/aicc";

interface SystemStatusCardProps {
  status: SystemStatus;
}

export function SystemStatusCard({ status }: SystemStatusCardProps) {
  const serviceVariant =
    status.service === "정상" ? "default" : status.service === "점검중" ? "secondary" : "destructive";

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">시스템 상태</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Server className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">서비스 상태</span>
          </div>
          <Badge variant={serviceVariant}>{status.service}</Badge>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">평균 응답 속도</span>
          </div>
          <span className="text-sm font-medium">{status.responseTime}ms</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GitBranch className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">활성 시나리오</span>
          </div>
          <span className="text-sm font-medium">{status.activeScenarios}개</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ArrowUpCircle className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">가동률</span>
          </div>
          <span className="text-sm font-medium">{status.uptime}%</span>
        </div>
      </CardContent>
    </Card>
  );
}
