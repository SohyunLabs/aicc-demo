import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { HandoffContext } from "@/types/aicc";

interface HandoffContextCardProps {
  handoffContext: HandoffContext;
  realtimeKeywords: string[];
}

const contextRows: { label: string; key: keyof HandoffContext }[] = [
  { label: "고객 의도", key: "customerIntent" },
  { label: "질문 내용", key: "questionDetails" },
  { label: "보이스봇 응답", key: "botResponse" },
  { label: "미완료 항목", key: "incompleteItems" },
  { label: "전환 사유", key: "transferReason" },
  { label: "고객 감정 상태", key: "customerEmotion" },
  { label: "통화 시간(보이스봇)", key: "botCallDuration" },
];

export function HandoffContextCard({ handoffContext, realtimeKeywords }: HandoffContextCardProps) {
  return (
    <Card className="bg-muted/50">
      <CardHeader className="py-3">
        <CardTitle className="text-sm">
          <Badge variant="outline" className="mr-2">보이스봇에서 전환됨</Badge>
          핸드오프 컨텍스트
        </CardTitle>
      </CardHeader>
      <CardContent className="py-2 space-y-3">
        {/* 핵심 키워드 */}
        <div className="pb-2">
          <p className="text-xs text-muted-foreground mb-2">핵심 키워드:</p>
          <div className="flex flex-wrap gap-1.5">
            {realtimeKeywords.map((kw) => (
              <Badge key={kw} variant="secondary" className="text-xs">
                {kw}
              </Badge>
            ))}
          </div>
        </div>
        <table className="w-full text-sm border-t border-border/50 pt-2">
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
  );
}
