import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// 시나리오 프리뷰 — Phase 4 캔버스의 간소화 읽기 전용 버전
const previewNodes = [
  { id: "p1", label: "시작", type: "start", x: 50, y: 120 },
  { id: "p2", label: "의도 분류", type: "intent", x: 220, y: 120 },
  { id: "p3", label: "자동 응답", type: "response", x: 420, y: 60 },
  { id: "p4", label: "상담원 전환", type: "transfer", x: 420, y: 180 },
  { id: "p5", label: "종료", type: "end", x: 600, y: 120 },
];

const nodeColors: Record<string, string> = {
  start: "bg-emerald-200 dark:bg-emerald-800 border-emerald-500",
  intent: "bg-blue-200 dark:bg-blue-800 border-blue-500",
  response: "bg-amber-200 dark:bg-amber-800 border-amber-500",
  transfer: "bg-rose-200 dark:bg-rose-800 border-rose-500",
  end: "bg-gray-200 dark:bg-gray-700 border-gray-500",
};

const nodeShapes: Record<string, string> = {
  start: "rounded-full w-16 h-16",
  intent: "rounded-lg w-24 h-16",
  response: "rounded-lg w-24 h-16",
  transfer: "rounded-lg w-24 h-16",
  end: "rounded-full w-16 h-16",
};

export function StepPreview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>시나리오 프리뷰</CardTitle>
        <CardDescription>
          선택한 템플릿의 기본 시나리오입니다. 나중에 관리 콘솔에서 편집할 수 있습니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-[300px] w-full rounded-lg border bg-background overflow-hidden">
          {/* SVG 연결선 */}
          <svg className="absolute inset-0 h-full w-full pointer-events-none">
            <defs>
              <marker id="arrow-preview" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" className="fill-muted-foreground/40" />
              </marker>
            </defs>
            <line x1="115" y1="148" x2="220" y2="148" stroke="currentColor" strokeWidth="2" className="text-muted-foreground/30" markerEnd="url(#arrow-preview)" />
            <line x1="305" y1="130" x2="420" y2="88" stroke="currentColor" strokeWidth="2" className="text-muted-foreground/30" markerEnd="url(#arrow-preview)" />
            <line x1="305" y1="160" x2="420" y2="208" stroke="currentColor" strokeWidth="2" className="text-muted-foreground/30" markerEnd="url(#arrow-preview)" />
            <line x1="500" y1="88" x2="600" y2="138" stroke="currentColor" strokeWidth="2" className="text-muted-foreground/30" markerEnd="url(#arrow-preview)" />
            <line x1="500" y1="208" x2="600" y2="158" stroke="currentColor" strokeWidth="2" className="text-muted-foreground/30" markerEnd="url(#arrow-preview)" />
          </svg>

          {/* 노드 */}
          {previewNodes.map((node) => (
            <div
              key={node.id}
              className={`absolute flex items-center justify-center border-2 ${nodeColors[node.type]} ${nodeShapes[node.type]}`}
              style={{ left: node.x, top: node.y }}
            >
              <span className="text-xs font-medium">{node.label}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-4">
          {Object.entries(nodeColors).map(([type, color]) => (
            <div key={type} className="flex items-center gap-1.5">
              <div className={`h-3 w-3 rounded border ${color}`} />
              <span className="text-xs text-muted-foreground capitalize">
                {{ start: "시작", intent: "의도분류", response: "응답", transfer: "전환", end: "종료" }[type]}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
