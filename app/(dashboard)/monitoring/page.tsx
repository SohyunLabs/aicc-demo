import { MonitoringKpiCards } from "@/components/monitoring/monitoring-kpi";
import { CallListTable } from "@/components/monitoring/call-list-table";
import { mockAiccKpi, mockCallRecords } from "@/lib/mock-aicc";

// 실시간 상담 모니터링 — 4대 KPI (해결률/AHT/CSAT/컴플라이언스) + 상담 목록 + 필터
export default function MonitoringPage() {
  return (
    <div className="space-y-6">
      <MonitoringKpiCards kpi={mockAiccKpi} />
      <CallListTable calls={mockCallRecords} />
    </div>
  );
}
