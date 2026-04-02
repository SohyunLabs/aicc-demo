"use client";

// AICC 관리 콘솔 사이드바 네비게이션
// 데스크톱: 접기/펼치기 가능, 모바일: 오버레이로 표시
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  GitBranch,
  Activity,
  BookOpen,
  Settings,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  ChevronsUpDown,
  Monitor,
  Headset,
  Rocket,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

// AICC 관리 콘솔 네비게이션 메뉴
const navItems = [
  { icon: LayoutDashboard, label: "대시보드", href: "/dashboard" },
  { icon: GitBranch, label: "시나리오 빌더", href: "/scenarios" },
  { icon: Activity, label: "모니터링", href: "/monitoring" },
  { icon: BookOpen, label: "지식 관리", href: "/knowledge" },
  { icon: Settings, label: "설정", href: "/settings" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* 모바일 햄버거 메뉴 버튼 */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-3 left-3 z-50 md:hidden"
        onClick={() => setMobileOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* 모바일 오버레이 배경 */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* 사이드바 본체 */}
      <aside
        className={cn(
          "flex h-screen flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300",
          "hidden md:flex",
          collapsed ? "w-16" : "w-64",
          mobileOpen && "!fixed inset-y-0 left-0 z-50 !flex w-64"
        )}
      >
        {/* 상단: 앱 스위처 + 모바일 닫기 */}
        <div className="flex h-14 items-center justify-between border-b border-sidebar-border px-4">
          {!collapsed && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-sidebar-accent transition-colors">
                  <Monitor className="h-4 w-4 text-sidebar-foreground" />
                  <span className="text-lg font-semibold text-sidebar-foreground">
                    AICC Console
                  </span>
                  <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/dashboard" className="flex items-center gap-2 cursor-pointer">
                    <Monitor className="h-4 w-4" />
                    <div>
                      <p className="text-sm font-medium">AICC Console</p>
                      <p className="text-xs text-muted-foreground">관리 콘솔</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/agent-assist" className="flex items-center gap-2 cursor-pointer">
                    <Headset className="h-4 w-4" />
                    <div>
                      <p className="text-sm font-medium">Agent Assist</p>
                      <p className="text-xs text-muted-foreground">상담원 실시간 보조</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/onboarding" className="flex items-center gap-2 cursor-pointer">
                    <Rocket className="h-4 w-4" />
                    <div>
                      <p className="text-sm font-medium">온보딩</p>
                      <p className="text-xs text-muted-foreground">셀프 서비스 시작하기</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* 네비게이션 메뉴 */}
        <nav className="flex-1 space-y-1 p-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                )}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* 하단: 접기/펼치기 버튼 (데스크톱만) */}
        <div className="hidden border-t border-sidebar-border p-2 md:block">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="w-full"
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>
      </aside>
    </>
  );
}
