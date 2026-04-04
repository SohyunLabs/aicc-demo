"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

// === KPI 데이터 ===
const kpis = [
  {
    label: "총 인입 건수",
    value: "1,247",
    change: "▲ 12% vs 어제",
    changeColor: "text-emerald-600",
    barColor: "bg-blue-500",
  },
  {
    label: "AI 자동 응답률",
    value: "78.3%",
    change: "▲ 3.2%p 개선",
    changeColor: "text-emerald-600",
    barColor: "bg-emerald-500",
  },
  {
    label: "평균 응대 시간",
    value: "42초",
    change: "▼ 8초 단축",
    changeColor: "text-emerald-600",
    barColor: "bg-orange-400",
  },
  {
    label: "고객 만족도",
    value: "4.6",
    change: "★★★★★",
    changeColor: "text-orange-500",
    barColor: "bg-pink-400",
  },
];

// === 시간대별 인입 추이 데이터 ===
const hourlyData = [
  { hour: "00시", count: 12 },
  { hour: "01시", count: 5 },
  { hour: "02시", count: 3 },
  { hour: "03시", count: 2 },
  { hour: "04시", count: 4 },
  { hour: "05시", count: 8 },
  { hour: "06시", count: 25 },
  { hour: "07시", count: 45 },
  { hour: "08시", count: 68 },
  { hour: "09시", count: 85 },
  { hour: "10시", count: 92 },
  { hour: "11시", count: 78 },
  { hour: "12시", count: 65 },
  { hour: "13시", count: 72 },
  { hour: "14시", count: 88 },
  { hour: "15시", count: 75 },
  { hour: "16시", count: 62 },
  { hour: "17시", count: 48 },
  { hour: "18시", count: 35 },
  { hour: "19시", count: 22 },
  { hour: "20시", count: 15 },
  { hour: "21시", count: 10 },
  { hour: "22시", count: 8 },
  { hour: "23시", count: 5 },
];

const peakIndex = hourlyData.reduce((maxI, d, i, arr) => (d.count > arr[maxI].count ? i : maxI), 0);

// === 카테고리별 문의 데이터 ===
const categories = [
  { name: "결제/환불", percent: 82, color: "bg-blue-500" },
  { name: "배송 조회", percent: 65, color: "bg-emerald-500" },
  { name: "상품 문의", percent: 48, color: "bg-amber-400" },
  { name: "계정 문제", percent: 30, color: "bg-pink-500" },
  { name: "기타", percent: 15, color: "bg-gray-400" },
];

// === 실시간 대화 로그 ===
const chatLogs = [
  { time: "14:32", customer: "김OO", type: "결제 오류", status: "AI 완료", statusColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300", response: "자동" },
  { time: "14:30", customer: "이OO", type: "배송 지연", status: "상담원 전환", statusColor: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300", response: "하이브리드" },
  { time: "14:28", customer: "박OO", type: "환불 요청", status: "AI 처리중", statusColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300", response: "자동" },
  { time: "14:25", customer: "최OO", type: "상품 교환", status: "AI 완료", statusColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300", response: "자동" },
];

// AICC 대시보드 — KPI + 시간대별 추이 + 카테고리 + 대화 로그
export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* 페이지 제목 */}
      <div>
        <h1 className="text-2xl font-bold">대시보드</h1>
        <p className="text-sm text-muted-foreground">오늘의 컨택센터 현황을 한눈에 확인하세요</p>
      </div>

      {/* KPI 카드 4개 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <Card key={kpi.label} className="overflow-hidden">
            <div className={`h-1 ${kpi.barColor}`} />
            <CardContent className="pt-4 pb-4">
              <p className="text-sm text-muted-foreground">{kpi.label}</p>
              <p className="text-3xl font-bold mt-1">{kpi.value}</p>
              <p className={`text-xs mt-1 ${kpi.changeColor}`}>{kpi.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 시간대별 인입 추이 + 카테고리별 문의 */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* 시간대별 인입 추이 (약 60%) */}
        <Card className="lg:col-span-3">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">시간대별 인입 추이</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={hourlyData} barCategoryGap="20%">
                  <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-muted" />
                  <XAxis
                    dataKey="hour"
                    tick={{ fontSize: 11 }}
                    tickLine={false}
                    axisLine={false}
                    interval={5}
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
                    {hourlyData.map((_, i) => (
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

        {/* 카테고리별 문의 (약 40%) */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">카테고리별 문의</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-5 pt-2">
              {categories.map((cat) => (
                <div key={cat.name} className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground w-20 shrink-0 text-right">{cat.name}</span>
                  <div className="flex-1 h-3 rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full rounded-full ${cat.color}`}
                      style={{ width: `${cat.percent}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium w-10 text-right">{cat.percent}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 실시간 대화 로그 */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">실시간 대화 로그</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-3 text-sm font-medium text-muted-foreground">시각</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">고객</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">유형</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">상태</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">응답</th>
              </tr>
            </thead>
            <tbody>
              {chatLogs.map((log) => (
                <tr key={log.time} className="border-b last:border-b-0">
                  <td className="py-3 text-sm">{log.time}</td>
                  <td className="py-3 text-sm">{log.customer}</td>
                  <td className="py-3 text-sm">{log.type}</td>
                  <td className="py-3">
                    <Badge variant="secondary" className={`text-xs ${log.statusColor}`}>
                      {log.status}
                    </Badge>
                  </td>
                  <td className="py-3 text-sm">{log.response}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
