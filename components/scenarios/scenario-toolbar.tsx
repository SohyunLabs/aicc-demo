import { Play, Save, Plus, Undo, Redo, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Scenario } from "@/types/aicc";

interface ScenarioToolbarProps {
  scenario: Scenario;
}

const statusColor: Record<string, string> = {
  "활성": "bg-emerald-500",
  "비활성": "bg-gray-500",
  "편집중": "bg-amber-500",
};

export function ScenarioToolbar({ scenario }: ScenarioToolbarProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border bg-background p-2">
      <div className="flex items-center gap-2">
        <h2 className="text-sm font-semibold px-2">{scenario.name}</h2>
        <Badge variant="outline" className="gap-1">
          <span className={`h-2 w-2 rounded-full ${statusColor[scenario.status]}`} />
          {scenario.status}
        </Badge>
      </div>

      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" className="h-8 w-8" title="실행 취소">
          <Undo className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8" title="다시 실행">
          <Redo className="h-4 w-4" />
        </Button>
        <Separator orientation="vertical" className="h-6 mx-1" />
        <Button variant="ghost" size="icon" className="h-8 w-8" title="축소">
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8" title="확대">
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Separator orientation="vertical" className="h-6 mx-1" />
        <Button variant="ghost" size="sm" className="h-8 gap-1">
          <Plus className="h-4 w-4" />
          노드 추가
        </Button>
        <Button variant="outline" size="sm" className="h-8 gap-1">
          <Save className="h-4 w-4" />
          저장
        </Button>
        <Button size="sm" className="h-8 gap-1">
          <Play className="h-4 w-4" />
          테스트
        </Button>
      </div>
    </div>
  );
}
