import { X } from "lucide-react";
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

        {/* 기본 정보 */}
        <div className="space-y-2">
          <Label htmlFor="node-label">라벨</Label>
          <Input id="node-label" defaultValue={node.label} readOnly />
        </div>

        <div className="space-y-2">
          <Label>ID</Label>
          <Input defaultValue={node.id} readOnly className="text-muted-foreground" />
        </div>

        <Separator />

        {/* 속성 목록 */}
        <div className="space-y-2">
          <Label className="text-xs text-muted-foreground uppercase tracking-wider">
            속성
          </Label>
          {Object.entries(node.properties).map(([key, value]) => (
            <div key={key} className="space-y-1">
              <Label htmlFor={`prop-${key}`} className="text-xs">
                {key}
              </Label>
              <Input id={`prop-${key}`} defaultValue={value} readOnly />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
