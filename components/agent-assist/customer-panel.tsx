"use client";

import { User, Phone, History, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
} from "recharts";
import type { CustomerInfo, SentimentData } from "@/types/aicc";

interface CustomerPanelProps {
  customer: CustomerInfo;
  sentiment: SentimentData;
}

const tierColor: Record<string, string> = {
  VIP: "bg-amber-500",
  "일반": "bg-gray-500",
  "신규": "bg-blue-500",
};

function SentimentLabel({ value }: { value: number }) {
  if (value > 0.3) return <span className="text-emerald-500 font-medium">긍정</span>;
  if (value < -0.3) return <span className="text-rose-500 font-medium">부정</span>;
  return <span className="text-amber-500 font-medium">중립</span>;
}

export function CustomerPanel({ customer, sentiment }: CustomerPanelProps) {
  return (
    <div className="flex h-full flex-col gap-4">
      {/* 고객 정보 */}
      <Card>
        <CardHeader className="py-3">
          <CardTitle className="text-sm">고객 정보</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 py-2">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">{customer.name}</span>
            <Badge className={`text-xs text-white ${tierColor[customer.tier]}`}>
              {customer.tier}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{customer.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <History className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              이전 통화 {customer.previousCalls}회 (마지막: {customer.lastCallDate})
            </span>
          </div>
          <Separator />
          <div>
            <div className="flex items-center gap-1 mb-2">
              <Tag className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">이력</span>
            </div>
            <div className="space-y-1">
              {customer.issues.map((issue) => (
                <p key={issue} className="text-xs text-muted-foreground">
                  • {issue}
                </p>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 감정 분석 게이지 */}
      <Card className="flex-1">
        <CardHeader className="py-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm">감정 분석</CardTitle>
            <SentimentLabel value={sentiment.current} />
          </div>
        </CardHeader>
        <CardContent className="py-2">
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sentiment.trend}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="time" className="text-xs" tick={{ fontSize: 11 }} />
                <YAxis domain={[-1, 1]} className="text-xs" tick={{ fontSize: 11 }} />
                <ReferenceLine y={0} stroke="currentColor" className="text-muted-foreground" strokeDasharray="3 3" />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="var(--color-chart-2)"
                  fill="var(--color-chart-2)"
                  fillOpacity={0.2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
