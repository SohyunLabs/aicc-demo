"use client";

import { useState } from "react";
import { ScenarioToolbar } from "@/components/scenarios/scenario-toolbar";
import { ScenarioCanvas } from "@/components/scenarios/scenario-canvas";
import { NodeProperties } from "@/components/scenarios/node-properties";
import { mockScenarios } from "@/lib/mock-aicc";
import type { ScenarioNode } from "@/types/aicc";

// 시나리오 빌더 — 툴바 + CSS 기반 노드 캔버스 + 속성 패널
export default function ScenariosPage() {
  const scenario = mockScenarios[0]; // 자동차 보험 상담 시나리오
  const [selectedNode, setSelectedNode] = useState<ScenarioNode | null>(null);

  return (
    <div className="space-y-4">
      <ScenarioToolbar scenario={scenario} />

      <div className="flex gap-4">
        {/* 캔버스 */}
        <div className="flex-1">
          <ScenarioCanvas
            nodes={scenario.nodes}
            edges={scenario.edges}
            onNodeSelect={setSelectedNode}
            selectedNodeId={selectedNode?.id ?? null}
          />
        </div>

        {/* 속성 패널 */}
        {selectedNode && (
          <NodeProperties
            node={selectedNode}
            onClose={() => setSelectedNode(null)}
          />
        )}
      </div>
    </div>
  );
}
