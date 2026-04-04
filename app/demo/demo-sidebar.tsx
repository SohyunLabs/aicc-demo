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
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/layout/brand-logo";
import { brand } from "@/lib/brand-config";

const navItems = [
  { icon: LayoutDashboard, label: "대시보드", href: "/demo/dashboard" },
  { icon: GitBranch, label: "시나리오 빌더", href: "/demo/scenarios" },
  { icon: Activity, label: "모니터링", href: "/demo/monitoring" },
  { icon: BookOpen, label: "지식 관리", href: "/demo/knowledge-empty" },
  { icon: Settings, label: "설정", href: "/demo/settings" },
];

export function DemoSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-sidebar-border bg-sidebar">
      <div className="flex h-14 items-center gap-2 border-b border-sidebar-border px-4">
        <BrandLogo size={20} />
        <span className="text-lg font-semibold text-sidebar-foreground">
          {brand.consoleName}
        </span>
      </div>

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

      <div className="border-t border-sidebar-border px-3 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sidebar-accent">
            <User className="h-4 w-4 text-sidebar-accent-foreground" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-sidebar-foreground">홍길동</p>
            <p className="truncate text-xs text-sidebar-foreground/60">CS팀장</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
