import { User, CreditCard, CalendarDays, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { CustomerInfo } from "@/types/aicc";

interface CustomerInfoCardProps {
  customer: CustomerInfo;
}

const tierColor: Record<string, string> = {
  VIP: "bg-amber-500",
  "일반": "bg-gray-500",
  "신규": "bg-blue-500",
};

export function CustomerInfoCard({ customer }: CustomerInfoCardProps) {
  return (
    <Card>
      <CardHeader className="py-3">
        <CardTitle className="text-sm">고객 정보</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2.5 py-2">
        {/* 이름 + 등급 */}
        <div className="flex items-center gap-2">
          <User className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">이름:</span>
          <span className="text-sm font-medium">{customer.name}</span>
          <Badge className={`text-xs text-white ${tierColor[customer.tier]}`}>
            {customer.tier}
          </Badge>
        </div>
        {/* 최근 거래 */}
        {customer.recentTransaction && (
          <div className="flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">최근 거래:</span>
            <span className="text-sm font-medium">{customer.recentTransaction}</span>
          </div>
        )}
        {/* 가입일 */}
        {customer.joinDate && (
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">가입일:</span>
            <span className="text-sm">{customer.joinDate}</span>
          </div>
        )}
        {/* 최근 상담 */}
        {customer.lastConsultation && (
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">최근 상담:</span>
            <span className="text-sm">{customer.lastConsultation}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
