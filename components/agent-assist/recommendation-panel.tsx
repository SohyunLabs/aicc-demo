import { ShieldAlert, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { RecommendedResponse, ComplianceAlert } from "@/types/aicc";

interface RecommendationPanelProps {
  recommendations: RecommendedResponse[];
  complianceAlerts: ComplianceAlert[];
}

export function RecommendationPanel({
  recommendations,
  complianceAlerts,
}: RecommendationPanelProps) {
  return (
    <div className="flex h-full flex-col gap-4">
      {/* AI 추천 응답 */}
      <Card className="flex-1 flex flex-col min-h-0">
        <CardHeader className="py-3">
          <CardTitle className="text-sm">AI 추천 응답</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 py-0 pb-3">
          <ScrollArea className="h-[320px]">
            <div className="space-y-3 pr-4">
              {recommendations.map((rec) => (
                <div key={rec.id} className="rounded-lg border p-3 space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {rec.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      신뢰도 {rec.confidence}%
                    </span>
                  </div>
                  {/* 추천 응답 본문 */}
                  <p className="text-sm leading-relaxed">&ldquo;{rec.text}&rdquo;</p>
                  {/* 출처 */}
                  <p className="text-xs text-muted-foreground">
                    (출처: {rec.source})
                  </p>
                  {/* 버튼 영역: 추천 응답 사용 + 수정 */}
                  <div className="flex items-center gap-2 pt-1">
                    <Button size="sm" className="text-xs">
                      추천 응답 사용
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      수정
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* 컴플라이언스 경고 배너 */}
      {complianceAlerts.map((alert) => (
        <Alert
          key={alert.id}
          variant={alert.type === "critical" ? "destructive" : "default"}
        >
          <ShieldAlert className="h-4 w-4" />
          <AlertTitle className="text-sm font-semibold">{alert.regulation}</AlertTitle>
          <AlertDescription className="text-sm mt-1">
            {alert.message}
          </AlertDescription>
          {/* 경고 확인 + 해당 조항 보기 버튼 */}
          <div className="flex items-center gap-2 mt-3">
            <Button variant="outline" size="sm" className="text-xs">
              경고 확인
            </Button>
            <Button variant="ghost" size="sm" className="text-xs gap-1">
              <BookOpen className="h-3 w-3" />
              해당 조항 보기
            </Button>
          </div>
        </Alert>
      ))}
    </div>
  );
}
