"use client";

import { User, CreditCard, CalendarDays, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

// 감정값(-1~1)을 0~100% 위치로 변환
function sentimentToPercent(value: number): number {
  return Math.round(((value + 1) / 2) * 100);
}

export function CustomerPanel({ customer, sentiment }: CustomerPanelProps) {
  const gaugePercent = sentimentToPercent(sentiment.current);

  return (
    <div className="flex h-full flex-col gap-4">
      {/* 고객 정보 */}
      <Card>
        <CardHeader className="py-3">
          <CardTitle className="text-sm">고객 정보</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2.5 py-2">
          {/* 이름 + 등급 */}
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">이름:</span>
            <span className="text-sm font-medium">{customer.name}</span>
            <Badge className={`text-xs text-white ${tierColor[customer.tier]}`}>
              {customer.tier}
            </Badge>
          </div>
          {/* 최근 거래 */}
          {customer.recentTransaction && (
            <div className="flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">최근 거래:</span>
              <span className="text-sm font-medium">{customer.recentTransaction}</span>
            </div>
          )}
          {/* 가입일 */}
          {customer.joinDate && (
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">가입일:</span>
              <span className="text-sm">{customer.joinDate}</span>
            </div>
          )}
          {/* 최근 상담 */}
          {customer.lastConsultation && (
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">최근 상담:</span>
              <span className="text-sm">{customer.lastConsultation}</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* 감정 분석 */}
      <Card className="flex-1">
        <CardHeader className="py-3">
          <CardTitle className="text-sm">감정 분석</CardTitle>
        </CardHeader>
        <CardContent className="py-2 space-y-4">
          {/* 수평 감정 게이지 바 */}
          <div>
            <p className="text-xs text-muted-foreground mb-2">현재 감정:</p>
            <div className="relative">
              {/* 바 배경 */}
              <div className="h-3 w-full rounded-full bg-gradient-to-r from-rose-400 via-amber-300 to-emerald-400 opacity-30" />
              {/* 현재 위치 인디케이터 */}
              <div
                className="absolute top-0 h-3 w-3 rounded-full bg-amber-500 border-2 border-white shadow-md -translate-x-1/2"
                style={{ left: `${gaugePercent}%` }}
              />
            </div>
            {/* 좌우 라벨 */}
            <div className="flex justify-between mt-1">
              <span className="text-xs text-rose-500 font-medium">불안</span>
              <span className="text-xs text-emerald-500 font-medium">안심</span>
            </div>
            {/* 전환 상태 라벨 */}
            <div className="text-center mt-1">
              <Badge variant="outline" className="text-xs">
                불안 → 안심 전환 중
              </Badge>
            </div>
          </div>

          {/* 감정 추이 그래프 */}
          <div>
            <p className="text-xs text-muted-foreground mb-2">감정 추이:</p>
            <div className="h-[160px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sentiment.trend}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="time" className="text-xs" tick={{ fontSize: 11 }} />
                  <YAxis domain={[-1, 1]} className="text-xs" tick={{ fontSize: 11 }} ticks={[-1, 0, 1]} />
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
