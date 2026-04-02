"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { mockPricingTiers } from "@/lib/mock-aicc";

export function StepPricing() {
  const [selected, setSelected] = useState<string>("plan-2"); // Professional 기본 선택

  return (
    <div>
      <h2 className="text-lg font-semibold mb-1">요금제 선택</h2>
      <p className="text-sm text-muted-foreground mb-6">
        비즈니스 규모에 맞는 요금제를 선택하세요.
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
                  <Badge className="bg-primary">추천</Badge>
                </div>
              )}
              <CardHeader className="text-center pt-6">
                <CardTitle>{tier.name}</CardTitle>
                <CardDescription>
                  {tier.price > 0 ? (
                    <span className="text-3xl font-bold text-foreground">
                      ₩{tier.price}
                      <span className="text-sm font-normal text-muted-foreground">
                        {tier.unit}
                      </span>
                    </span>
                  ) : (
                    <span className="text-3xl font-bold text-foreground">
                      {tier.unit}
                    </span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={isSelected ? "default" : "outline"}
                  className="w-full"
                >
                  {isSelected ? "선택됨" : "선택"}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
