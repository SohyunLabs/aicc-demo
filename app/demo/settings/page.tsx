import { Settings, Building2, Users, Key, Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/brand-config";

export default function DemoSettingsPage() {
  return (
    <div className="space-y-4 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            조직 정보
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b">
            <span className="text-sm text-muted-foreground">회사명</span>
            <span className="text-sm font-medium">{brand.companyName}</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b">
            <span className="text-sm text-muted-foreground">플랜</span>
            <span className="text-sm font-medium">—</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-muted-foreground">산업</span>
            <span className="text-sm font-medium">—</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Users className="h-5 w-5" />
            팀 관리
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center py-6 text-center">
            <p className="text-sm text-muted-foreground mb-3">아직 팀원이 없습니다</p>
            <Button variant="outline" size="sm">팀원 초대하기</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Key className="h-5 w-5" />
            API 연동
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center py-6 text-center">
            <p className="text-sm text-muted-foreground mb-3">CRM, 물류 시스템 등 외부 API를 연결하세요</p>
            <Button variant="outline" size="sm">연동 설정</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Bell className="h-5 w-5" />
            알림 설정
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between py-2 border-b">
            <span className="text-sm">컴플라이언스 경고 알림</span>
            <span className="text-xs text-muted-foreground">미설정</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-sm">일일 리포트 이메일</span>
            <span className="text-xs text-muted-foreground">미설정</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
