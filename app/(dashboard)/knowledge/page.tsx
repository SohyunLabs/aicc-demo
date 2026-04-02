"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { DocumentList } from "@/components/knowledge/document-list";
import { TopicList } from "@/components/knowledge/topic-list";
import { mockDocuments, mockTopics } from "@/lib/mock-aicc";

// 지식 관리 — 문서/토픽 2탭 구성
export default function KnowledgePage() {
  const [dragActive, setDragActive] = useState(false);

  return (
    <div className="space-y-6">
      <Tabs defaultValue="documents">
        <TabsList>
          <TabsTrigger value="documents">문서 관리</TabsTrigger>
          <TabsTrigger value="topics">토픽 관리</TabsTrigger>
        </TabsList>

        <TabsContent value="documents" className="space-y-4 mt-4">
          {/* 드래그 앤 드롭 업로드 영역 */}
          <Card>
            <CardContent className="pt-6">
              <div
                className={`flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-8 transition-colors ${
                  dragActive
                    ? "border-primary bg-primary/5"
                    : "border-muted-foreground/25"
                }`}
                onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                onDragLeave={() => setDragActive(false)}
                onDrop={(e) => { e.preventDefault(); setDragActive(false); }}
              >
                <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground mb-1">
                  파일을 드래그하거나 클릭하여 업로드
                </p>
                <p className="text-xs text-muted-foreground/70">
                  PDF, DOCX, TXT, CSV (최대 10MB)
                </p>
                <Button variant="outline" size="sm" className="mt-3">
                  파일 선택
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* 문서 목록 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                문서 목록 ({mockDocuments.length}건)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <DocumentList documents={mockDocuments} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="topics" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                토픽 목록 ({mockTopics.length}건)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TopicList topics={mockTopics} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
