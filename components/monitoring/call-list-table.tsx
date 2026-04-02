"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { CallRecord, CallStatus } from "@/types/aicc";

interface CallListTableProps {
  calls: CallRecord[];
}

const statusVariant: Record<CallStatus, "default" | "secondary" | "outline" | "destructive"> = {
  "진행중": "default",
  "대기": "secondary",
  "완료": "outline",
  "전환": "destructive",
};

const sentimentEmoji: Record<string, string> = {
  "긍정": "😊",
  "중립": "😐",
  "부정": "😟",
};

function formatDuration(seconds: number): string {
  if (seconds === 0) return "-";
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function CallListTable({ calls }: CallListTableProps) {
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filtered = statusFilter === "all"
    ? calls
    : calls.filter((c) => c.status === statusFilter);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base">실시간 상담 목록</CardTitle>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="상태 필터" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">전체</SelectItem>
            <SelectItem value="진행중">진행중</SelectItem>
            <SelectItem value="대기">대기</SelectItem>
            <SelectItem value="완료">완료</SelectItem>
            <SelectItem value="전환">전환</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>고객명</TableHead>
              <TableHead>연락처</TableHead>
              <TableHead>시나리오</TableHead>
              <TableHead>상태</TableHead>
              <TableHead>감정</TableHead>
              <TableHead className="text-right">통화시간</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((call) => (
              <TableRow key={call.id}>
                <TableCell className="font-medium">{call.customerName}</TableCell>
                <TableCell className="text-muted-foreground">{call.phoneNumber}</TableCell>
                <TableCell>{call.scenario}</TableCell>
                <TableCell>
                  <Badge variant={statusVariant[call.status]}>{call.status}</Badge>
                </TableCell>
                <TableCell>
                  {sentimentEmoji[call.sentiment]} {call.sentiment}
                </TableCell>
                <TableCell className="text-right">{formatDuration(call.duration)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
