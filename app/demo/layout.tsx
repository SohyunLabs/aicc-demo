import type { ReactNode } from "react";
import { DemoSidebar } from "./demo-sidebar";
import { DemoHeader } from "./demo-header";

// PRD 데모용 레이아웃 — 대시보드와 완전 분리
export default function DemoLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <DemoSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <DemoHeader />
        <main className="flex-1 overflow-y-auto bg-muted/40 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
