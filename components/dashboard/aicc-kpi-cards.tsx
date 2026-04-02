import { CheckCircle, Clock, Star, Shield, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { AiccKpi } from "@/types/aicc";

interface AiccKpiCardsProps {
  kpi: AiccKpi;
}

// 와이어프레임 기준 상세 KPI 카드 설정
const kpiConfig = [
  {
    key: "resolutionRate" as const,
    title: "자동 해결률",
    icon: CheckCircle,
    suffix: "%",
    subtitle: "목표 대비 +3%p 상승",
    detail: "목표: 70%",
    trend: "up" as const,
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/50",
  },
  {
    key: "ahtReduction" as const,
    title: "AHT 단축률",
    icon: Clock,
    prefix: "-",
    suffix: "%",
    subtitle: "기준선 6분10초 대비",
    detail: "현재: 4분38초",
    trend: "down" as const,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-950/50",
  },
  {
    key: "csatScore" as const,
    title: "CSAT",
    icon: Star,
    suffix: "점",
    subtitle: "전월 대비 +2점",
    detail: "5점 만족도 분포",
    trend: "up" as const,
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-50 dark:bg-amber-950/50",
  },
  {
    key: "complianceViolation" as const,
    title: "컴플라이언스",
    icon: Shield,
    suffix: "%",
    subtitle: "전수 검사 기반",
    detail: "전월: 0.5%",
    trend: "down" as const,
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
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">
                {config.prefix ?? ""}
                {kpi[config.key]}
                {config.suffix}
              </span>
              {/* 미니 트렌드 표시 */}
              {config.trend === "up" ? (
                <TrendingUp className="h-4 w-4 text-emerald-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-blue-500" />
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {config.subtitle}
            </p>
            <p className="text-xs text-muted-foreground/70 mt-0.5">
              {config.detail}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
