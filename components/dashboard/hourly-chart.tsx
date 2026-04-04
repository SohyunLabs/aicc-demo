"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  LabelList,
} from "recharts";

const dailyData = [
  { day: "3/22", count: 980 },
  { day: "3/23", count: 1050 },
  { day: "3/24", count: 1120 },
  { day: "3/25", count: 1200 },
  { day: "3/26", count: 1350 },
  { day: "3/27", count: 1180 },
  { day: "3/28", count: 920 },
  { day: "3/29", count: 1010 },
  { day: "3/30", count: 1150 },
  { day: "3/31", count: 1280 },
  { day: "4/1", count: 1320 },
  { day: "4/2", count: 1400 },
  { day: "4/3", count: 1247 },
  { day: "4/4", count: 1100 },
];

const peakIndex = dailyData.reduce((maxI, d, i, arr) => (d.count > arr[maxI].count ? i : maxI), 0);

export function HourlyChart() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">일별 인입 추이</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dailyData} barCategoryGap="20%">
              <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-muted" />
              <XAxis
                dataKey="day"
                tick={{ fontSize: 11 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis hide />
              <Bar dataKey="count" radius={[3, 3, 0, 0]}>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <LabelList
                  dataKey="count"
                  position="top"
                  fontSize={10}
                  content={(props: any) => {
                    if (props.index !== peakIndex) return null;
                    const x = Number(props.x ?? 0);
                    const y = Number(props.y ?? 0);
                    return (
                      <text
                        x={x + 12}
                        y={y - 8}
                        fill="var(--color-chart-1)"
                        fontSize={11}
                        fontWeight={600}
                        textAnchor="middle"
                      >
                        피크
                      </text>
                    );
                  }}
                />
                {dailyData.map((_, i) => (
                  <Cell
                    key={i}
                    fill={i === peakIndex ? "var(--color-chart-1)" : "var(--color-chart-2)"}
                    opacity={i === peakIndex ? 1 : 0.6}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
