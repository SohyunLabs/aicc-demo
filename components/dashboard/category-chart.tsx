import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// 전체 문의 대비 점유율 (합계 100%)
const categories = [
  { name: "결제/환불", percent: 32, color: "bg-blue-500" },
  { name: "배송 조회", percent: 26, color: "bg-emerald-500" },
  { name: "상품 문의", percent: 20, color: "bg-amber-400" },
  { name: "계정 문제", percent: 14, color: "bg-pink-500" },
  { name: "기타", percent: 8, color: "bg-gray-400" },
];

const maxPercent = Math.max(...categories.map((c) => c.percent));

export function CategoryChart() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">카테고리별 문의</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-5 pt-2">
          {categories.map((cat) => (
            <div key={cat.name} className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground w-20 shrink-0 text-right">{cat.name}</span>
              <div className="flex-1 h-3 rounded-full bg-muted overflow-hidden">
                <div
                  className={`h-full rounded-full ${cat.color}`}
                  style={{ width: `${(cat.percent / maxPercent) * 100}%` }}
                />
              </div>
              <span className="text-sm font-medium w-10 text-right">{cat.percent}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
