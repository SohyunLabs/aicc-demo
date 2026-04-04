"use client";

import { ShieldAlert, CheckCircle2, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// 전사 항목 유니온 타입
type TranscriptEntry =
  | {
      type: "message";
      id: string;
      speaker: "고객" | "상담원" | "봇";
      text: string;
      timestamp: string;
    }
  | {
      type: "compliance-alert";
      id: string;
      regulation: string;
      badgeText: string;
      message: string;
      detail: string;
      source: string;
    }
  | {
      type: "compliance-resolved";
      id: string;
      message: string;
      timestamp: string;
    };

interface AiRecommendation {
  text: string;
  confidence: number;
  source: string;
  category: string;
}

interface EnrichedTranscriptProps {
  entries: TranscriptEntry[];
  recommendation?: AiRecommendation;
}

const speakerStyles: Record<string, { bg: string; align: string }> = {
  "고객": { bg: "bg-blue-50 dark:bg-blue-900/30", align: "mr-auto" },
  "상담원": { bg: "bg-emerald-50 dark:bg-emerald-900/30", align: "ml-auto" },
  "봇": { bg: "bg-muted", align: "mr-auto" },
};

export function EnrichedTranscript({ entries, recommendation }: EnrichedTranscriptProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="py-3 shrink-0">
        <CardTitle className="text-sm">실시간 전사</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 py-0 pb-3 overflow-y-auto">
        <div className="space-y-3 pr-2">
          {entries.map((entry) => {
            if (entry.type === "message") {
              const style = speakerStyles[entry.speaker];
              return (
                <div key={entry.id} className={`max-w-[85%] ${style.align}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-xs py-0">
                      {entry.speaker}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {entry.timestamp}
                    </span>
                  </div>
                  <div className={`rounded-lg p-2.5 text-sm ${style.bg}`}>
                    {entry.text}
                  </div>
                </div>
              );
            }

            if (entry.type === "compliance-alert") {
              return (
                <div key={entry.id} className="rounded-lg border-2 border-destructive/50 bg-destructive/5 p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="h-4 w-4 text-destructive" />
                      <span className="text-sm font-semibold text-destructive">컴플라이언스 경고</span>
                    </div>
                    <Badge variant="destructive" className="text-xs">
                      {entry.badgeText}
                    </Badge>
                  </div>
                  <p className="text-sm font-medium">{entry.message}</p>
                  <div className="rounded-md bg-destructive/10 p-2">
                    <p className="text-xs text-muted-foreground mb-1">경고 안내:</p>
                    <p className="text-sm">&ldquo;{entry.detail}&rdquo; 점을 반드시 고지해야 합니다.</p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    출처: {entry.source}
                  </p>
                </div>
              );
            }

            if (entry.type === "compliance-resolved") {
              return (
                <div key={entry.id} className="flex items-center gap-2 rounded-lg border border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span className="text-sm text-emerald-700 dark:text-emerald-300 font-medium">
                    컴플라이언스 경고 해소 — {entry.message}
                  </span>
                  <span className="text-xs text-muted-foreground ml-auto shrink-0">
                    {entry.timestamp}
                  </span>
                </div>
              );
            }

            return null;
          })}

          {/* AI 추천 응답 */}
          {recommendation && (
            <div className="rounded-lg border-2 border-primary/30 bg-primary/5 p-3 space-y-2 mt-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">AI 추천 응답</span>
                <Badge variant="outline" className="text-xs ml-auto">
                  {recommendation.category}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  신뢰도 {recommendation.confidence}%
                </span>
              </div>
              <p className="text-sm leading-relaxed">&ldquo;{recommendation.text}&rdquo;</p>
              <p className="text-xs text-muted-foreground">
                (출처: {recommendation.source})
              </p>
              <div className="flex items-center gap-2 pt-1">
                <Button size="sm" className="text-xs">추천 응답 사용</Button>
                <Button variant="outline" size="sm" className="text-xs">수정</Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
