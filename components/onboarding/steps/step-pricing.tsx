"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { mockPricingTiers } from "@/lib/mock-aicc";

export function StepPricing() {
  const [selected, setSelected] = useState<string>("plan-2"); // Professional 기본 선택

  return (
    <div>
      <h2 className="text-lg font-semibold mb-1">구독 플랜을 선택하세요</h2>
      <p className="text-sm text-muted-foreground mb-6">
        비즈니스 규모에 맞는 성과 기반 요금제를 선택하세요.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {mockPricingTiers.map((tier) => {
          const isSelected = selected === tier.id;
          return (
            <Card
              key={tier.id}
              className={cn(
                "cursor-pointer transition-all relative",
                isSelected ? "border-primary ring-2 ring-primary" : "hover:border-primary/50",
                tier.recommended && "border-primary/50"
              )}
              onClick={() => setSelected(tier.id)}
            >
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary">{">>>추천<<<"}</Badge>
                </div>
              )}
              <CardHeader className="text-center pt-6">
                <CardTitle>{tier.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{tier.target}</p>
                <p className="text-xs text-muted-foreground">{tier.agentCount}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* 건당 과금 구조 */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">보이스봇</span>
                    <span className="font-semibold">{tier.voicebotPrice}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Agent Assist</span>
                    <span className="font-semibold">{tier.agentAssistPrice}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">미해결건</span>
                    <span className="font-semibold text-emerald-600">{tier.unresolvedPrice}</span>
                  </div>
                </div>

                {/* 포함 사항 */}
                <div className="border-t pt-3">
                  <p className="text-xs font-medium text-muted-foreground mb-2">포함:</p>
                  <ul className="space-y-1">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 월 최소 / 별도 협의 */}
                <div className="border-t pt-3 text-center">
                  <span className="text-sm font-semibold">{tier.minimumCommitment}</span>
                </div>

                {/* 선택 버튼 */}
                <Button
                  variant={isSelected ? "default" : "outline"}
                  className="w-full"
                >
                  {tier.id === "plan-3"
                    ? "Enterprise 도입 문의"
                    : isSelected
                      ? "선택됨"
                      : `${tier.name} 플랜 시작`}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* 미해결 건 과금 안내 푸터 */}
      <p className="text-center text-sm text-muted-foreground mt-6">
        &quot;미해결 건은 과금되지 않습니다&quot;
      </p>
    </div>
  );
}
