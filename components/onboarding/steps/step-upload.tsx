"use client";

import { useState, useEffect } from "react";
import { Upload, FileText, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface MockFile {
  name: string;
  size: string;
  progress: number;
}

export function StepUpload() {
  const [files, setFiles] = useState<MockFile[]>([]);
  const [dragActive, setDragActive] = useState(false);

  // 데모: 파일 추가 시 자동 진행률 애니메이션
  const addDemoFile = () => {
    const newFile: MockFile = {
      name: `상담매뉴얼_${files.length + 1}.pdf`,
      size: `${(Math.random() * 5 + 0.5).toFixed(1)} MB`,
      progress: 0,
    };
    setFiles((prev) => [...prev, newFile]);
  };

  // 진행률 시뮬레이션
  useEffect(() => {
    const interval = setInterval(() => {
      setFiles((prev) =>
        prev.map((f) =>
          f.progress < 100
            ? { ...f, progress: Math.min(f.progress + Math.random() * 15, 100) }
            : f
        )
      );
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const removeFile = (name: string) => {
    setFiles((prev) => prev.filter((f) => f.name !== name));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>문서 업로드</CardTitle>
        <CardDescription>
          지식 기반이 될 문서를 업로드하세요. AI가 자동으로 인덱싱합니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* 드래그 앤 드롭 영역 */}
        <div
          className={`flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-10 transition-colors ${
            dragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25"
          }`}
          onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
          onDragLeave={() => setDragActive(false)}
          onDrop={(e) => { e.preventDefault(); setDragActive(false); addDemoFile(); }}
        >
          <Upload className="h-10 w-10 text-muted-foreground mb-3" />
          <p className="text-sm font-medium mb-1">파일을 드래그하거나 클릭하여 업로드</p>
          <p className="text-xs text-muted-foreground mb-3">PDF, DOCX, TXT, CSV (최대 10MB)</p>
          <Button variant="outline" size="sm" onClick={addDemoFile}>
            파일 선택 (데모)
          </Button>
        </div>

        {/* 업로드된 파일 목록 + 진행률 */}
        {files.length > 0 && (
          <div className="space-y-3">
            {files.map((file) => (
              <div key={file.name} className="flex items-center gap-3 rounded-lg border p-3">
                <FileText className="h-8 w-8 text-muted-foreground shrink-0" />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{file.name}</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">{file.size}</Badge>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => removeFile(file.name)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <Progress value={Math.round(file.progress)} className="h-1.5" />
                  <p className="text-xs text-muted-foreground">
                    {file.progress >= 100 ? "인덱싱 완료" : `인덱싱 중... ${Math.round(file.progress)}%`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
