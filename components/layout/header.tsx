"use client";

// 상단 헤더: 라우트 기반 동적 타이틀 + 다크모드 토글 + 유저 아바타
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ThemeToggle } from "./theme-toggle";

// 라우트별 페이지 타이틀 매핑
const routeTitles: Record<string, string> = {
  "/dashboard": "대시보드",
  "/scenarios": "시나리오 빌더",
  "/monitoring": "모니터링",
  "/knowledge": "지식 관리",
  "/settings": "설정",
};

export function Header() {
  const pathname = usePathname();

  // 현재 경로에 맞는 타이틀 결정
  const title = routeTitles[pathname] ?? Object.entries(routeTitles).find(
    ([route]) => pathname.startsWith(route)
  )?.[1] ?? "뤼튼 AICC";

  return (
    <header className="flex h-14 items-center justify-between border-b bg-background px-6">
      <h1 className="text-lg font-semibold pl-10 md:pl-0">{title}</h1>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Avatar className="h-8 w-8">
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
