import { AiccKpiCards } from "@/components/dashboard/aicc-kpi-cards";
import { ActivityTimeline } from "@/components/dashboard/activity-timeline";
import { SystemStatusCard } from "@/components/dashboard/system-status";
import { mockAiccKpi, mockActivities, mockSystemStatus } from "@/lib/mock-aicc";

// AICC 대시보드 — KPI 요약 + 최근 활동 + 시스템 상태
export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* KPI 카드 4개 */}
      <AiccKpiCards kpi={mockAiccKpi} />

      {/* 최근 활동 타임라인 + 시스템 상태 */}
      <div className="grid gap-6 lg:grid-cols-7">
        <div className="lg:col-span-4">
          <ActivityTimeline activities={mockActivities} />
        </div>
        <div className="lg:col-span-3">
          <SystemStatusCard status={mockSystemStatus} />
        </div>
      </div>
    </div>
  );
}
