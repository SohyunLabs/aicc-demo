"use client";

// 상단 헤더: 라우트 기반 동적 타이틀 + 다크모드 토글 + 유저 아바타/로그아웃
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  const { data: session } = useSession();
  const pathname = usePathname();

  // 현재 경로에 맞는 타이틀 결정
  const title = routeTitles[pathname] ?? Object.entries(routeTitles).find(
    ([route]) => pathname.startsWith(route)
  )?.[1] ?? "AICC Console";

  return (
    <header className="flex h-14 items-center justify-between border-b bg-background px-6">
      <h1 className="text-lg font-semibold pl-10 md:pl-0">{title}</h1>

      <div className="flex items-center gap-2">
        <ThemeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <Avatar className="h-8 w-8 cursor-pointer">
              <AvatarImage
                src={session?.user?.image ?? ""}
                alt={session?.user?.name ?? "사용자"}
              />
              <AvatarFallback>
                {session?.user?.name?.charAt(0) ?? "U"}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
              <p className="text-sm font-medium">{session?.user?.name}</p>
              <p className="text-xs text-muted-foreground">
                {session?.user?.email}
              </p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="cursor-pointer"
            >
              <LogOut className="mr-2 h-4 w-4" />
              로그아웃
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
