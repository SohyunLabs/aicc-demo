import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { TranscriptMessage } from "@/types/aicc";

interface TranscriptPanelProps {
  messages: TranscriptMessage[];
  contextSummary: string;
}

const speakerStyles: Record<string, { bg: string; align: string }> = {
  "고객": { bg: "bg-blue-100 dark:bg-blue-900/40", align: "mr-auto" },
  "상담원": { bg: "bg-emerald-100 dark:bg-emerald-900/40", align: "ml-auto" },
  "봇": { bg: "bg-muted", align: "mr-auto" },
};

export function TranscriptPanel({ messages, contextSummary }: TranscriptPanelProps) {
  return (
    <div className="flex h-full flex-col gap-4">
      {/* 핸드오프 컨텍스트 요약 */}
      <Card>
        <CardHeader className="py-3">
          <CardTitle className="text-sm">핸드오프 컨텍스트</CardTitle>
        </CardHeader>
        <CardContent className="py-2">
          <p className="text-sm text-muted-foreground">{contextSummary}</p>
        </CardContent>
      </Card>

      {/* 실시간 전사 */}
      <Card className="flex-1 flex flex-col min-h-0">
        <CardHeader className="py-3">
          <CardTitle className="text-sm">실시간 전사</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 py-0 pb-3">
          <ScrollArea className="h-[360px]">
            <div className="space-y-3 pr-4">
              {messages.map((msg) => {
                const style = speakerStyles[msg.speaker];
                return (
                  <div key={msg.id} className={`max-w-[85%] ${style.align}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs py-0">
                        {msg.speaker}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {msg.timestamp}
                      </span>
                    </div>
                    <div className={`rounded-lg p-2.5 text-sm ${style.bg}`}>
                      {msg.text}
                    </div>
                    {msg.keywords && msg.keywords.length > 0 && (
                      <div className="flex gap-1 mt-1">
                        {msg.keywords.map((kw) => (
                          <Badge key={kw} variant="secondary" className="text-xs py-0">
                            {kw}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
