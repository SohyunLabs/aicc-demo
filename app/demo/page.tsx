import Link from "next/link";
import { LayoutDashboard, GitBranch, Activity, BookOpen, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const pages = [
  { icon: LayoutDashboard, label: "대시보드", desc: "KPI 카드 + 차트 빈 상태", href: "/demo/dashboard" },
  { icon: GitBranch, label: "시나리오 빌더", desc: "시나리오 생성 전 빈 상태", href: "/demo/scenarios" },
  { icon: Activity, label: "모니터링", desc: "실시간 모니터링 빈 상태", href: "/demo/monitoring" },
  { icon: BookOpen, label: "지식 관리", desc: "문서/토픽 업로드 전 빈 상태", href: "/demo/knowledge-empty" },
  { icon: Settings, label: "설정", desc: "조직/팀/API/알림 초기 상태", href: "/demo/settings" },
];

export default function DemoIndexPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <h2 className="text-xl font-semibold">데모 페이지 목록</h2>
      <p className="text-sm text-muted-foreground">각 화면의 Empty State(초기 상태)를 확인할 수 있습니다.</p>
      <div className="grid gap-3">
        {pages.map((p) => (
          <Link key={p.href} href={p.href}>
            <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
              <CardContent className="flex items-center gap-4 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <p.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{p.label}</p>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
