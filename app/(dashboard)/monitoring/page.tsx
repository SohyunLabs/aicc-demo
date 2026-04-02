import { MonitoringKpiCards } from "@/components/monitoring/monitoring-kpi";
import { CallListTable } from "@/components/monitoring/call-list-table";
import { mockMonitoringKpi, mockCallRecords } from "@/lib/mock-aicc";

// 실시간 상담 모니터링 — KPI 요약 + 상담 목록 + 필터
export default function MonitoringPage() {
  return (
    <div className="space-y-6">
      <MonitoringKpiCards kpi={mockMonitoringKpi} />
      <CallListTable calls={mockCallRecords} />
    </div>
  );
}
