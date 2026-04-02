"use client";

import { useState } from "react";
import { Shield, ShoppingCart, Wifi, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { mockIndustryTemplates } from "@/lib/mock-aicc";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  ShoppingCart,
  Wifi,
};

export function StepTemplate() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-1">산업 템플릿 선택</h2>
      <p className="text-sm text-muted-foreground mb-6">
        산업에 맞는 사전 구성된 템플릿을 선택하세요.
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
