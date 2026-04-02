"use client";

import type { ScenarioNode, ScenarioEdge } from "@/types/aicc";

interface ScenarioCanvasProps {
  nodes: ScenarioNode[];
  edges: ScenarioEdge[];
  onNodeSelect: (node: ScenarioNode | null) => void;
  selectedNodeId: string | null;
}

// 노드 타입별 스타일 — CSS 기반 정적 캔버스
const nodeStyles: Record<string, { shape: string; bg: string; border: string }> = {
  start: {
    shape: "rounded-full w-20 h-20",
    bg: "bg-emerald-100 dark:bg-emerald-900/50",
    border: "border-emerald-500",
  },
  intent: {
    shape: "w-28 h-28 rotate-45",
    bg: "bg-blue-100 dark:bg-blue-900/50",
    border: "border-blue-500",
  },
  response: {
    shape: "rounded-lg w-32 h-20",
    bg: "bg-amber-100 dark:bg-amber-900/50",
    border: "border-amber-500",
  },
  transfer: {
    shape: "rounded-lg w-28 h-20",
    bg: "bg-rose-100 dark:bg-rose-900/50",
    border: "border-rose-500",
  },
  end: {
    shape: "rounded-full w-20 h-20 ring-4 ring-offset-2 ring-gray-400 dark:ring-gray-600",
    bg: "bg-gray-100 dark:bg-gray-800",
    border: "border-gray-500",
  },
};

// SVG 엣지 — 노드 간 연결선
function EdgeLine({ edge, nodes }: { edge: ScenarioEdge; nodes: ScenarioNode[] }) {
  const from = nodes.find((n) => n.id === edge.from);
  const to = nodes.find((n) => n.id === edge.to);
  if (!from || !to) return null;

  // 노드 중심점 계산
  const x1 = from.x + 50;
  const y1 = from.y + 35;
  const x2 = to.x + 50;
  const y2 = to.y + 35;

  // 곡선 제어점
  const midX = (x1 + x2) / 2;

  return (
    <g>
      <path
        d={`M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-muted-foreground/40"
        markerEnd="url(#arrowhead)"
      />
      {edge.label && (
        <text
          x={midX}
          y={(y1 + y2) / 2 - 8}
          textAnchor="middle"
          className="fill-muted-foreground text-xs"
        >
          {edge.label}
        </text>
      )}
    </g>
  );
}

export function ScenarioCanvas({ nodes, edges, onNodeSelect, selectedNodeId }: ScenarioCanvasProps) {
  return (
    <div className="relative h-[500px] w-full overflow-auto rounded-lg border bg-background">
      {/* SVG 레이어 — 엣지 (연결선) */}
      <svg className="absolute inset-0 h-full w-full pointer-events-none">
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="10"
            refY="3.5"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              className="fill-muted-foreground/40"
            />
          </marker>
        </defs>
        {edges.map((edge) => (
          <EdgeLine key={edge.id} edge={edge} nodes={nodes} />
        ))}
      </svg>

      {/* HTML 레이어 — 노드 */}
      {nodes.map((node) => {
        const style = nodeStyles[node.type];
        const isSelected = selectedNodeId === node.id;
        return (
          <button
            key={node.id}
            onClick={() => onNodeSelect(isSelected ? null : node)}
            className={`absolute flex items-center justify-center border-2 cursor-pointer transition-shadow ${style.shape} ${style.bg} ${style.border} ${
              isSelected ? "shadow-lg ring-2 ring-primary" : "hover:shadow-md"
            }`}
            style={{ left: node.x, top: node.y }}
          >
            <span className={`text-xs font-medium text-foreground ${node.type === "intent" ? "-rotate-45" : ""}`}>
              {node.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
