"use client";

import Link from "next/link";
import { ChevronsUpDown, Monitor, Headset, Rocket } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface AppSwitcherProps {
  current: "console" | "agent-assist" | "onboarding";
}

const apps = [
  { id: "console" as const, icon: Monitor, label: "뤼튼 AICC", desc: "관리 콘솔", href: "/dashboard" },
  { id: "agent-assist" as const, icon: Headset, label: "Agent Assist", desc: "상담원 실시간 보조", href: "/agent-assist" },
  { id: "onboarding" as const, icon: Rocket, label: "온보딩", desc: "셀프 서비스 시작하기", href: "/onboarding" },
];

export function AppSwitcher({ current }: AppSwitcherProps) {
  const currentApp = apps.find((a) => a.id === current)!;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-accent transition-colors">
          <currentApp.icon className="h-4 w-4" />
          <span className="text-lg font-semibold">{currentApp.label}</span>
          <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        {apps.map((app, i) => (
          <div key={app.id}>
            {i > 0 && <DropdownMenuSeparator />}
            <DropdownMenuItem asChild>
              <Link href={app.href} className="flex items-center gap-2 cursor-pointer">
                <app.icon className="h-4 w-4" />
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
  );
}
