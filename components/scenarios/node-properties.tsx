import { X, Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import type { ScenarioNode, NodeType } from "@/types/aicc";

interface NodePropertiesProps {
  node: ScenarioNode;
  onClose: () => void;
}

const nodeTypeLabels: Record<NodeType, string> = {
  start: "시작 노드",
  intent: "의도 분류",
  response: "응답 노드",
  transfer: "상담원 전환",
  end: "종료 노드",
};

const nodeTypeColors: Record<NodeType, string> = {
  start: "bg-emerald-500",
  intent: "bg-blue-500",
  response: "bg-amber-500",
  transfer: "bg-rose-500",
  end: "bg-gray-500",
};

export function NodeProperties({ node, onClose }: NodePropertiesProps) {
  const hasText = node.properties.text !== undefined;

  return (
    <Card className="w-80">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">노드 속성</CardTitle>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-6 w-6">
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* 노드 타입 */}
        <div className="flex items-center gap-2">
          <div className={`h-3 w-3 rounded-full ${nodeTypeColors[node.type]}`} />
          <Badge variant="outline">{nodeTypeLabels[node.type]}</Badge>
        </div>

        {/* 노드명 */}
        <div className="space-y-2">
          <Label htmlFor="node-label">노드명</Label>
          <Input id="node-label" defaultValue={node.label} readOnly />
        </div>

        {/* 노드 타입 표시 */}
        <div className="space-y-2">
          <Label>노드 타입</Label>
          <Input defaultValue={nodeTypeLabels[node.type]} readOnly className="text-muted-foreground" />
        </div>

        <Separator />

        {/* 텍스트 콘텐츠 (인사말/응답 텍스트) — 편집 가능 */}
        {hasText && (
          <div className="space-y-2">
            <Label htmlFor="node-text">
              {node.type === "start" ? "인사말 텍스트" : "응답 텍스트"}
            </Label>
            <textarea
              id="node-text"
              defaultValue={node.properties.text}
              rows={3}
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
        )}

        {/* 출처 (응답 노드) */}
        {node.properties.citation && (
          <div className="space-y-2">
            <Label>출처</Label>
            <Input defaultValue={node.properties.citation} readOnly className="text-muted-foreground text-xs" />
          </div>
        )}

        {/* 기타 속성 (출처/citation 제외) */}
        <div className="space-y-2">
          <Label className="text-xs text-muted-foreground uppercase tracking-wider">
            속성
          </Label>
          {Object.entries(node.properties)
            .filter(([key]) => !["text", "citation"].includes(key))
            .map(([key, value]) => (
              <div key={key} className="space-y-1">
                <Label htmlFor={`prop-${key}`} className="text-xs">
                  {key}
                </Label>
                <Input id={`prop-${key}`} defaultValue={value} readOnly />
              </div>
            ))}
        </div>

        <Separator />

        {/* 음성 설정 */}
        <div className="space-y-2">
          <Label className="text-xs text-muted-foreground uppercase tracking-wider">
            음성 설정
          </Label>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <Label htmlFor="voice-speed" className="text-xs">속도</Label>
              <Input id="voice-speed" defaultValue="1.0x" className="text-sm" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="voice-tone" className="text-xs">톤</Label>
              <Input id="voice-tone" defaultValue="차분함" className="text-sm" />
            </div>
          </div>
        </div>

        {/* 저장 버튼 */}
        <Button className="w-full gap-2">
          <Save className="h-4 w-4" />
          저장
        </Button>
      </CardContent>
    </Card>
  );
}
