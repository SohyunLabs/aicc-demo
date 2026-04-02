"use client";

import { useState } from "react";
import { FileText, Pencil, Eye } from "lucide-react";
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
import type { KnowledgeTopic } from "@/types/aicc";

interface TopicListProps {
  topics: KnowledgeTopic[];
}

export function TopicList({ topics }: TopicListProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedTopic = topics.find((t) => t.id === selectedId);

  return (
    <div className="space-y-4">
      {/* 토픽 테이블 */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>토픽명</TableHead>
            <TableHead>관련 문서</TableHead>
            <TableHead className="text-right">질문 수</TableHead>
            <TableHead>최근 사용</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {topics.map((topic) => (
            <TableRow
              key={topic.id}
              className={`cursor-pointer transition-colors ${selectedId === topic.id ? "bg-muted" : "hover:bg-muted/50"}`}
              onClick={() => setSelectedId(selectedId === topic.id ? null : topic.id)}
            >
              <TableCell>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{topic.name}</span>
                  <Badge variant="secondary" className="text-xs">
                    <FileText className="mr-1 h-3 w-3" />
                    {topic.documentCount}건
                  </Badge>
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground text-sm">
                {topic.relatedDocuments?.join(", ") ?? "-"}
              </TableCell>
              <TableCell className="text-right">
                {topic.questionCount ?? "-"}
              </TableCell>
              <TableCell className="text-muted-foreground text-sm">
                {topic.lastUsed ?? topic.lastUpdated}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* 토픽 상세 패널 — 클릭 시 표시 */}
      {selectedTopic && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">
              토픽 상세: {selectedTopic.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">{selectedTopic.description}</p>

            {/* 키워드 */}
            <div className="flex flex-wrap gap-1.5">
              {selectedTopic.keywords.map((kw) => (
                <Badge key={kw} variant="outline" className="text-xs">{kw}</Badge>
              ))}
            </div>

            {/* 관련 문서 청크 */}
            {selectedTopic.chunks && selectedTopic.chunks.length > 0 && (
              <div className="space-y-2 pt-2 border-t">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  관련 문서 청크
                </p>
                {selectedTopic.chunks.map((chunk, i) => (
                  <div key={i} className="rounded-md border p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{chunk.title}</span>
                      <div className="flex gap-1">
                        <Button variant="outline" size="sm" className="h-7 gap-1 text-xs">
                          <Pencil className="h-3 w-3" />
                          편집
                        </Button>
                        <Button variant="outline" size="sm" className="h-7 gap-1 text-xs">
                          <Eye className="h-3 w-3" />
                          미리보기
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{chunk.content}</p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
