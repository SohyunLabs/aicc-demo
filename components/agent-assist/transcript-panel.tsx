import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { TranscriptMessage, HandoffContext } from "@/types/aicc";

interface TranscriptPanelProps {
  messages: TranscriptMessage[];
  handoffContext: HandoffContext;
  realtimeKeywords: string[];
}

const speakerStyles: Record<string, { bg: string; align: string }> = {
  "고객": { bg: "bg-blue-100 dark:bg-blue-900/40", align: "mr-auto" },
  "상담원": { bg: "bg-emerald-100 dark:bg-emerald-900/40", align: "ml-auto" },
  "봇": { bg: "bg-muted", align: "mr-auto" },
};

// 핸드오프 컨텍스트 구조화 테이블 행
const contextRows: { label: string; key: keyof HandoffContext }[] = [
  { label: "고객 의도", key: "customerIntent" },
  { label: "질문 내용", key: "questionDetails" },
  { label: "보이스봇 응답", key: "botResponse" },
  { label: "미완료 항목", key: "incompleteItems" },
  { label: "전환 사유", key: "transferReason" },
  { label: "고객 감정 상태", key: "customerEmotion" },
  { label: "통화 시간(보이스봇)", key: "botCallDuration" },
];

export function TranscriptPanel({ messages, handoffContext, realtimeKeywords }: TranscriptPanelProps) {
  return (
    <div className="space-y-4">
      {/* 핸드오프 컨텍스트 구조화 카드 */}
      <Card className="bg-muted/50">
        <CardHeader className="py-3">
          <CardTitle className="text-sm">
            <Badge variant="outline" className="mr-2">보이스봇에서 전환됨</Badge>
            핸드오프 컨텍스트
          </CardTitle>
        </CardHeader>
        <CardContent className="py-2">
          <table className="w-full text-sm">
            <tbody>
              {contextRows.map((row) => (
                <tr key={row.key} className="border-b border-border/50 last:border-b-0">
                  <td className="py-1.5 pr-3 font-medium text-muted-foreground whitespace-nowrap align-top">
                    {row.label}
                  </td>
                  <td className="py-1.5">
                    {handoffContext[row.key]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* 실시간 전사 */}
      <Card>
        <CardHeader className="py-3">
          <CardTitle className="text-sm">실시간 전사</CardTitle>
        </CardHeader>
        <CardContent className="py-0 pb-3">
          <div className="max-h-[280px] overflow-y-auto">
            <div className="space-y-3 pr-2">
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
          </div>
        </CardContent>
      </Card>

      {/* 실시간 요약 */}
      <Card>
        <CardHeader className="py-3">
          <CardTitle className="text-sm">실시간 요약</CardTitle>
        </CardHeader>
        <CardContent className="py-0 pb-4">
          <p className="text-xs text-muted-foreground mb-2">핵심 키워드:</p>
          <div className="flex flex-wrap gap-1.5">
            {realtimeKeywords.map((kw) => (
              <Badge key={kw} variant="secondary" className="text-xs">
                {kw}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
