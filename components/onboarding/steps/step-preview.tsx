"use client";

import { useState } from "react";
import { Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// 와이어프레임 기반 노드 구조: 시작 -> 의도 분류 -> 적금 안내/대출 안내/카드 안내 -> 종료
const previewNodes = [
  { id: "p1", label: "시작", subtitle: '"안녕하세요"', type: "start", x: 280, y: 10 },
  { id: "p2", label: "의도 분류", type: "intent", x: 250, y: 90 },
  { id: "p3", label: "적금 안내", type: "response", x: 80, y: 180 },
  { id: "p4", label: "대출 안내", type: "response", x: 260, y: 180 },
  { id: "p5", label: "카드 안내", type: "response", x: 440, y: 180 },
  { id: "p6", label: "종료", type: "end", x: 270, y: 270 },
];

const nodeColors: Record<string, string> = {
  start: "bg-emerald-200 dark:bg-emerald-800 border-emerald-500",
  intent: "bg-blue-200 dark:bg-blue-800 border-blue-500",
  response: "bg-amber-200 dark:bg-amber-800 border-amber-500",
  end: "bg-gray-200 dark:bg-gray-700 border-gray-500",
};

const nodeShapes: Record<string, string> = {
  start: "rounded-full w-20 h-12",
  intent: "rounded-lg w-24 h-12",
  response: "rounded-lg w-24 h-14",
  end: "rounded-full w-20 h-12",
};

export function StepPreview() {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>시나리오 확인 및 수정</CardTitle>
        <CardDescription>
          선택한 산업 템플릿 기반으로 기본 시나리오가 자동 생성되었습니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* 간이 노드 캔버스 */}
        <div className="relative h-[340px] w-full rounded-lg border bg-background overflow-hidden">
          {/* SVG 연결선 */}
          <svg className="absolute inset-0 h-full w-full pointer-events-none">
            <defs>
              <marker id="arrow-preview" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" className="fill-muted-foreground/40" />
              </marker>
            </defs>
            {/* 시작 -> 의도 분류 */}
            <line x1="300" y1="52" x2="290" y2="90" stroke="currentColor" strokeWidth="2" className="text-muted-foreground/30" markerEnd="url(#arrow-preview)" />
            {/* 의도 분류 -> 적금 안내 */}
            <line x1="260" y1="102" x2="140" y2="180" stroke="currentColor" strokeWidth="2" className="text-muted-foreground/30" markerEnd="url(#arrow-preview)" />
            {/* 의도 분류 -> 대출 안내 */}
            <line x1="282" y1="102" x2="290" y2="180" stroke="currentColor" strokeWidth="2" className="text-muted-foreground/30" markerEnd="url(#arrow-preview)" />
            {/* 의도 분류 -> 카드 안내 */}
            <line x1="310" y1="102" x2="470" y2="180" stroke="currentColor" strokeWidth="2" className="text-muted-foreground/30" markerEnd="url(#arrow-preview)" />
            {/* 적금 안내 -> 종료 */}
            <line x1="130" y1="194" x2="280" y2="270" stroke="currentColor" strokeWidth="2" className="text-muted-foreground/30" markerEnd="url(#arrow-preview)" />
            {/* 대출 안내 -> 종료 */}
            <line x1="290" y1="194" x2="290" y2="270" stroke="currentColor" strokeWidth="2" className="text-muted-foreground/30" markerEnd="url(#arrow-preview)" />
            {/* 카드 안내 -> 종료 */}
            <line x1="470" y1="194" x2="300" y2="270" stroke="currentColor" strokeWidth="2" className="text-muted-foreground/30" markerEnd="url(#arrow-preview)" />
          </svg>

          {/* 노드 */}
          {previewNodes.map((node) => (
            <div
              key={node.id}
              className={`absolute flex flex-col items-center justify-center border-2 ${nodeColors[node.type]} ${nodeShapes[node.type]}`}
              style={{ left: node.x, top: node.y }}
            >
              <span className="text-xs font-medium leading-tight">{node.label}</span>
              {node.subtitle && (
                <span className="text-[10px] text-muted-foreground">{node.subtitle}</span>
              )}
            </div>
          ))}

          {/* 힌트 텍스트 */}
          <div className="absolute bottom-3 left-0 right-0 text-center">
            <span className="text-xs text-primary font-medium animate-pulse">
              {">>> 여기를 클릭하여 응답 내용을 수정하세요 <<<"}
            </span>
          </div>
        </div>

        {/* 범례 */}
        <div className="flex gap-3 mt-4">
          {Object.entries(nodeColors).map(([type, color]) => (
            <div key={type} className="flex items-center gap-1.5">
              <div className={`h-3 w-3 rounded border ${color}`} />
              <span className="text-xs text-muted-foreground capitalize">
                {{ start: "시작", intent: "의도분류", response: "응답", end: "종료" }[type]}
              </span>
            </div>
          ))}
        </div>

        {/* 수정 가능한 항목 목록 */}
        <div className="mt-4 rounded-lg bg-muted/50 p-4">
          <p className="text-sm font-medium mb-2">수정 가능한 항목:</p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>- 응답 노드의 텍스트 내용</li>
            <li>- 분기 조건 (의도 분류 기준)</li>
            <li>- 상담원 전환 조건</li>
          </ul>
        </div>

        {/* 시나리오 저장 버튼 */}
        <div className="mt-4 flex justify-start">
          <Button variant="outline" onClick={handleSave} disabled={saved}>
            <Save className="h-4 w-4 mr-2" />
            {saved ? "저장됨" : "시나리오 저장"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
