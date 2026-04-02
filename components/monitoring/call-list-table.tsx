"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { CallRecord } from "@/types/aicc";

interface CallListTableProps {
  calls: CallRecord[];
}

// 와이어프레임 기준 상태별 배지 스타일
const statusVariant: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
  "AI완결": "default",
  "보조해결": "secondary",
  "상담원전환": "destructive",
  "진행중": "outline",
  // 기존 호환
  "완료": "default",
  "대기": "outline",
  "전환": "destructive",
};

// 소요시간 포맷: "3분05초" 형태
function formatDuration(seconds: number): string {
  if (seconds === 0) return "-";
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}분${s.toString().padStart(2, "0")}초`;
}

// 기간 필터 옵션
const periodFilters = ["오늘", "7일", "30일"];

// 상태 필터 옵션
const statusFilters = ["전체", "AI완결", "보조해결", "미해결"];

export function CallListTable({ calls }: CallListTableProps) {
  const [statusFilter, setStatusFilter] = useState<string>("전체");
  const [periodFilter, setPeriodFilter] = useState<string>("오늘");

  const filtered = statusFilter === "전체"
    ? calls
    : statusFilter === "미해결"
      ? calls.filter((c) => c.status === "진행중" || c.status === "상담원전환" || c.status === "대기" || c.status === "전환")
      : calls.filter((c) => c.status === statusFilter);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">상담 목록</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>시각</TableHead>
              <TableHead>고객</TableHead>
              <TableHead>유형</TableHead>
              <TableHead>상태</TableHead>
              <TableHead className="text-right">소요시간</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((call) => (
              <TableRow key={call.id}>
                <TableCell className="text-muted-foreground">
                  {call.time ?? new Date(call.startedAt).toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" })}
                </TableCell>
                <TableCell className="font-medium">{call.customerName}</TableCell>
                <TableCell>{call.callType ?? call.scenario}</TableCell>
                <TableCell>
                  <Badge variant={statusVariant[call.status] ?? "outline"}>{call.status}</Badge>
                </TableCell>
                <TableCell className="text-right">{formatDuration(call.duration)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* 필터 섹션 */}
        <div className="flex flex-wrap items-center gap-4 border-t pt-4">
          {/* 기간 필터 */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground font-medium">기간</span>
            <div className="flex gap-1">
              {periodFilters.map((p) => (
                <Button
                  key={p}
                  variant={periodFilter === p ? "default" : "outline"}
                  size="sm"
                  className="h-7 text-xs"
                  onClick={() => setPeriodFilter(p)}
                >
                  {p}
                </Button>
              ))}
            </div>
          </div>

          {/* 상태 필터 */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground font-medium">상태</span>
            <div className="flex gap-1">
              {statusFilters.map((s) => (
                <Button
                  key={s}
                  variant={statusFilter === s ? "default" : "outline"}
                  size="sm"
                  className="h-7 text-xs"
                  onClick={() => setStatusFilter(s)}
                >
                  {s}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
