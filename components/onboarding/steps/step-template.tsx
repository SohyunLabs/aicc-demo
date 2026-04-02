"use client";

import { useState } from "react";
import { Shield, ShieldCheck, ShoppingCart, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { mockIndustryTemplates } from "@/lib/mock-aicc";
import type { LucideIcon } from "lucide-react";

// 와이어프레임 산업별 아이콘 매핑
const iconMap: Record<string, LucideIcon> = {
  Shield,
  ShoppingCart,
  Wifi: ShieldCheck, // 이커머스 아이콘은 ShoppingCart를 사용하므로 Wifi 슬롯을 이커머스로 재활용
};

export function StepTemplate() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-1">산업을 선택하세요</h2>
      <p className="text-sm text-muted-foreground mb-6">
        산업별로 최적화된 시나리오와 컴플라이언스 규칙이 자동으로 설정됩니다.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {mockIndustryTemplates.map((tmpl) => {
          const Icon = iconMap[tmpl.icon] ?? Shield;
          const isSelected = selected === tmpl.id;
          return (
            <Card
              key={tmpl.id}
              className={cn(
                "cursor-pointer transition-all",
                isSelected ? "border-primary ring-2 ring-primary" : "hover:border-primary/50"
              )}
              onClick={() => setSelected(tmpl.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Icon className="h-8 w-8 text-primary" />
                  {isSelected && (
                    <div className="rounded-full bg-primary p-1">
                      <Check className="h-4 w-4 text-primary-foreground" />
                    </div>
                  )}
                </div>
                <CardTitle className="text-base">{tmpl.name}</CardTitle>
                <CardDescription>{tmpl.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="mb-3">
                  시나리오 {tmpl.scenarios}개 포함
                </Badge>
                <p className="text-xs font-medium text-muted-foreground mb-2">포함 기능:</p>
                <ul className="space-y-1">
                  {tmpl.features.map((f) => (
                    <li key={f} className="text-xs text-muted-foreground flex items-center gap-1">
                      <Check className="h-3 w-3 text-emerald-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
