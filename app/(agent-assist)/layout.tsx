import type { ReactNode } from "react";

// Agent Assist 풀스크린 레이아웃 (사이드바 없음)
export default function AgentAssistLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen overflow-hidden bg-background">
      {children}
    </div>
  );
}
