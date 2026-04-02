import { Copy, AlertTriangle, ShieldAlert } from "lucide-react";
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
      {/* 컴플라이언스 경고 배너 */}
      {complianceAlerts.map((alert) => (
        <Alert
          key={alert.id}
          variant={alert.type === "critical" ? "destructive" : "default"}
        >
          <ShieldAlert className="h-4 w-4" />
          <AlertTitle className="text-sm">{alert.regulation}</AlertTitle>
          <AlertDescription className="text-sm">
            {alert.message}
          </AlertDescription>
        </Alert>
      ))}

      {/* AI 추천 응답 */}
      <Card className="flex-1 flex flex-col min-h-0">
        <CardHeader className="py-3">
          <CardTitle className="text-sm">AI 추천 응답</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 py-0 pb-3">
          <ScrollArea className="h-[420px]">
            <div className="space-y-3 pr-4">
              {recommendations.map((rec) => (
                <div key={rec.id} className="rounded-lg border p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {rec.category}
                    </Badge>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">
                        신뢰도 {rec.confidence}%
                      </span>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm">{rec.text}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <AlertTriangle className="h-3 w-3" />
                    출처: {rec.source}
                  </p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
