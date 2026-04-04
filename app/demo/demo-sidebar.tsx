"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  GitBranch,
  Activity,
  BookOpen,
  Settings,
  User,
  ChevronsUpDown,
  Headset,
  Rocket,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/layout/brand-logo";
import { brand } from "@/lib/brand-config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

// 앱 전환 (실제 AppSwitcher와 동일 구조)
const apps = [
  { id: "console", label: brand.consoleName, desc: "관리 콘솔", href: "/demo/dashboard" },
  { id: "agent-assist", label: "Agent Assist", desc: "상담원 실시간 보조", href: "/demo/agent-assist" },
  { id: "onboarding", label: "온보딩", desc: "셀프 서비스 시작하기", href: "/onboarding" },
];

// 콘솔 GNB
const consoleNav = [
  { icon: LayoutDashboard, label: "대시보드", href: "/demo/dashboard" },
  { icon: GitBranch, label: "시나리오 빌더", href: "/demo/scenarios" },
  { icon: Activity, label: "모니터링", href: "/demo/monitoring" },
  { icon: BookOpen, label: "지식 관리", href: "/demo/knowledge-empty" },
  { icon: Settings, label: "설정", href: "/demo/settings" },
];

// Agent Assist GNB
const agentAssistNav = [
  { icon: Headset, label: "상담 보조", href: "/demo/agent-assist" },
];

export function DemoSidebar() {
  const pathname = usePathname();
  const isAgentAssist = pathname.startsWith("/demo/agent-assist");
  const currentApp = isAgentAssist ? apps[1] : apps[0];
  const navItems = isAgentAssist ? agentAssistNav : consoleNav;

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-sidebar-border bg-sidebar">
      {/* AppSwitcher */}
      <div className="flex h-14 items-center border-b border-sidebar-border px-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-sidebar-accent/50 transition-colors">
              {isAgentAssist
                ? <Headset className="h-4 w-4 text-sidebar-foreground" />
                : <BrandLogo size={18} />
              }
              <span className="text-base font-semibold text-sidebar-foreground">
                {currentApp.label}
              </span>
              <ChevronsUpDown className="h-4 w-4 text-sidebar-foreground/50" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            {apps.map((app, i) => (
              <div key={app.id}>
                {i > 0 && <DropdownMenuSeparator />}
                <DropdownMenuItem asChild>
                  <Link href={app.href} className="flex items-center gap-2 cursor-pointer">
                    {app.id === "console" && <BrandLogo size={16} />}
                    {app.id === "agent-assist" && <Headset className="h-4 w-4" />}
                    {app.id === "onboarding" && <Rocket className="h-4 w-4" />}
                    <div>
                      <p className="text-sm font-medium">{app.label}</p>
                      <p className="text-xs text-muted-foreground">{app.desc}</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* 네비게이션 */}
      <nav className="flex-1 space-y-1 p-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
              )}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* 유저 */}
      <div className="border-t border-sidebar-border px-3 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sidebar-accent">
            <User className="h-4 w-4 text-sidebar-accent-foreground" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-sidebar-foreground">김지현</p>
            <p className="truncate text-xs text-sidebar-foreground/60">CS팀장</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
