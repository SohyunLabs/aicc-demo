import { GitBranch, Plus, FileText, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DemoScenariosPage() {
  return (
    <Card>
      <CardContent className="py-16">
        <div className="flex flex-col items-center text-center max-w-md mx-auto">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
            <GitBranch className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-xl font-semibold mb-2">첫 번째 시나리오를 만들어보세요</h2>
          <p className="text-muted-foreground mb-6">
            대화 흐름을 시각적으로 설계하고, AI 응답 노드를 드래그 앤 드롭으로 구성할 수 있습니다.
          </p>
          <div className="flex gap-3 mb-8">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              새 시나리오
            </Button>
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              템플릿에서 시작
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full text-left">
            <div className="rounded-lg border p-3">
              <Zap className="h-5 w-5 text-primary mb-2" />
              <p className="text-sm font-medium">인바운드 상담</p>
              <p className="text-xs text-muted-foreground">고객 문의 자동 응대 시나리오</p>
            </div>
            <div className="rounded-lg border p-3">
              <Zap className="h-5 w-5 text-primary mb-2" />
              <p className="text-sm font-medium">FAQ 안내</p>
              <p className="text-xs text-muted-foreground">자주 묻는 질문 자동 응답</p>
            </div>
            <div className="rounded-lg border p-3">
              <Zap className="h-5 w-5 text-primary mb-2" />
              <p className="text-sm font-medium">상담원 전환</p>
              <p className="text-xs text-muted-foreground">AI 한계 시 상담원 연결 흐름</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
