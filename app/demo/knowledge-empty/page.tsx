"use client";

import { Upload, BookOpen, FileText, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function KnowledgeEmptyPage() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="documents">
        <TabsList>
          <TabsTrigger value="documents">문서 관리</TabsTrigger>
          <TabsTrigger value="topics">토픽 관리</TabsTrigger>
        </TabsList>

        <TabsContent value="documents" className="space-y-4 mt-4">
          {/* Empty State */}
          <Card>
            <CardContent className="py-16">
              <div className="flex flex-col items-center text-center max-w-md mx-auto">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  지식 베이스를 구축하세요
                </h2>
                <p className="text-muted-foreground mb-6">
                  약관, 정책 문서, FAQ를 업로드하면 AI가 자동으로 분석하여
                  상담 시 출처 기반 정확한 답변을 제공합니다.
                </p>

                {/* 업로드 드롭존 */}
                <div className="w-full rounded-lg border-2 border-dashed border-muted-foreground/25 p-8 mb-6">
                  <div className="flex flex-col items-center">
                    <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">
                      파일을 드래그하거나 클릭하여 업로드
                    </p>
                    <p className="text-xs text-muted-foreground/70 mb-3">
                      PDF, DOCX, TXT, CSV (최대 10MB)
                    </p>
                    <Button>
                      <Upload className="mr-2 h-4 w-4" />
                      파일 업로드
                    </Button>
                  </div>
                </div>

                {/* 가이드 카드 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full text-left">
                  <div className="rounded-lg border p-3">
                    <FileText className="h-5 w-5 text-primary mb-2" />
                    <p className="text-sm font-medium">약관/규정</p>
                    <p className="text-xs text-muted-foreground">
                      상품 약관, 내부 규정, 법률 문서
                    </p>
                  </div>
                  <div className="rounded-lg border p-3">
                    <BookOpen className="h-5 w-5 text-primary mb-2" />
                    <p className="text-sm font-medium">정책 문서</p>
                    <p className="text-xs text-muted-foreground">
                      반품/교환 정책, CS 매뉴얼
                    </p>
                  </div>
                  <div className="rounded-lg border p-3">
                    <Lightbulb className="h-5 w-5 text-primary mb-2" />
                    <p className="text-sm font-medium">FAQ</p>
                    <p className="text-xs text-muted-foreground">
                      자주 묻는 질문, 상담 스크립트
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="topics" className="mt-4">
          <Card>
            <CardContent className="py-16">
              <div className="flex flex-col items-center text-center max-w-sm mx-auto">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
                  <Lightbulb className="h-8 w-8 text-muted-foreground" />
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  토픽이 아직 없습니다
                </h2>
                <p className="text-muted-foreground">
                  문서를 업로드하면 AI가 자동으로 토픽을 추출합니다.
                  먼저 &apos;문서 관리&apos; 탭에서 문서를 업로드해 주세요.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
