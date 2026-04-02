import { CheckCircle, Clock, Star, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { AiccKpi } from "@/types/aicc";

interface AiccKpiCardsProps {
  kpi: AiccKpi;
}

const kpiConfig = [
  {
    key: "resolutionRate" as const,
    title: "자동 해결률",
    icon: CheckCircle,
    suffix: "%",
    description: "보이스봇이 상담원 없이 해결한 비율",
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/50",
  },
  {
    key: "ahtReduction" as const,
    title: "AHT 감소",
    icon: Clock,
    prefix: "-",
    suffix: "%",
    description: "평균 처리시간(AHT) 감소율",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-950/50",
  },
  {
    key: "csatScore" as const,
    title: "CSAT 점수",
    icon: Star,
    suffix: "점",
    description: "고객 만족도 점수 (100점 만점)",
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-50 dark:bg-amber-950/50",
  },
  {
    key: "complianceViolation" as const,
    title: "컴플라이언스 위반",
    icon: Shield,
    suffix: "%",
    description: "규정 위반 발생률",
    color: "text-rose-600 dark:text-rose-400",
    bgColor: "bg-rose-50 dark:bg-rose-950/50",
  },
];

export function AiccKpiCards({ kpi }: AiccKpiCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpiConfig.map((config) => (
        <Card key={config.key}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {config.title}
            </CardTitle>
            <div className={`rounded-md p-2 ${config.bgColor}`}>
              <config.icon className={`h-4 w-4 ${config.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {config.prefix ?? ""}
              {kpi[config.key]}
              {config.suffix}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {config.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
