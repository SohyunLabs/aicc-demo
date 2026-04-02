"use client";

import { useState } from "react";
import { FileText, Upload, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { KnowledgeDocument, DocumentStatus } from "@/types/aicc";

interface DocumentListProps {
  documents: KnowledgeDocument[];
}

const statusVariant: Record<DocumentStatus, "default" | "secondary" | "outline" | "destructive"> = {
  "인덱싱완료": "default",
  "인덱싱중": "secondary",
  "대기": "outline",
  "오류": "destructive",
};

// 업로드일 포맷
function formatDate(iso: string): string {
  const d = new Date(iso);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function DocumentList({ documents }: DocumentListProps) {
  const [search, setSearch] = useState("");

  const filtered = search
    ? documents.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()))
    : documents;

  return (
    <div className="space-y-4">
      {/* 상단 액션 바: 검색 + 업로드 */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="문서 검색..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button size="sm" className="gap-1.5">
          <Upload className="h-4 w-4" />
          문서 업로드
        </Button>
      </div>

      {/* 문서 테이블 */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>문서명</TableHead>
            <TableHead>유형</TableHead>
            <TableHead>상태</TableHead>
            <TableHead>업로드일</TableHead>
            <TableHead className="text-right">토픽 수</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filtered.map((doc) => (
            <TableRow key={doc.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{doc.name}</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline">{doc.type}</Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Badge variant={statusVariant[doc.status]}>{doc.status}</Badge>
                  {doc.status === "인덱싱중" && (
                    <Progress value={doc.indexingProgress} className="h-1.5 w-16" />
                  )}
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground">
                {formatDate(doc.uploadedAt)}
              </TableCell>
              <TableCell className="text-right">
                {doc.chunks > 0 ? doc.chunks : "-"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
