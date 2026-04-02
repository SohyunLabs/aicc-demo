import type { ReactNode } from "react";

// 셀프 온보딩 위자드 레이아웃 (사이드바 없음, 인증 불필요)
export default function OnboardingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-muted/40">
      {children}
    </div>
  );
}
