import { Phone, Clock, CheckCircle, ArrowRightLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { MonitoringKpi } from "@/types/aicc";

interface MonitoringKpiProps {
  kpi: MonitoringKpi;
}

const kpiItems = [
  { key: "activeCalls" as const, title: "활성 통화", icon: Phone, suffix: "건", color: "text-blue-600 dark:text-blue-400" },
  { key: "avgWaitTime" as const, title: "평균 대기시간", icon: Clock, suffix: "초", color: "text-amber-600 dark:text-amber-400" },
  { key: "resolutionRate" as const, title: "해결률", icon: CheckCircle, suffix: "%", color: "text-emerald-600 dark:text-emerald-400" },
  { key: "escalationRate" as const, title: "에스컬레이션률", icon: ArrowRightLeft, suffix: "%", color: "text-rose-600 dark:text-rose-400" },
];

export function MonitoringKpiCards({ kpi }: MonitoringKpiProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpiItems.map((item) => (
        <Card key={item.key}>
          <CardContent className="flex items-center gap-4 pt-6">
            <item.icon className={`h-8 w-8 ${item.color}`} />
            <div>
              <p className="text-sm text-muted-foreground">{item.title}</p>
              <p className="text-2xl font-bold">
                {kpi[item.key]}{item.suffix}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
