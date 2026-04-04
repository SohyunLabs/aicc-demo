"use client";

import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { brand } from "@/lib/brand-config";

const routeTitles: Record<string, string> = {
  "/demo/dashboard": "대시보드",
  "/demo/scenarios": "시나리오 빌더",
  "/demo/monitoring": "모니터링",
  "/demo/knowledge-empty": "지식 관리",
  "/demo/settings": "설정",
  "/demo/agent-assist": "Agent Assist",
};

export function DemoHeader() {
  const pathname = usePathname();
  const title = routeTitles[pathname] ?? brand.displayName;

  return (
    <header className="flex h-14 items-center justify-between border-b bg-background px-6">
      <h1 className="text-lg font-semibold">{title}</h1>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Avatar className="h-8 w-8">
          <AvatarFallback>홍</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
