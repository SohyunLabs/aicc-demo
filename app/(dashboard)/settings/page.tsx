import { Building2, Users, Key, CreditCard, Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  mockTenantSettings,
  mockUsers,
  mockApiKeys,
  mockBillingPlans,
} from "@/lib/mock-aicc";

// 설정 — 카드 기반 레이아웃 (조직정보 / 팀 / API 키 / 빌링 / 알림)
export default function SettingsPage() {
  const tenant = mockTenantSettings;
  const currentPlan = mockBillingPlans.find((p) => p.current);

  return (
    <div className="space-y-4 max-w-3xl">
      {/* 조직 정보 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            조직 정보
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          {[
            ["회사명", tenant.companyName],
            ["산업", tenant.industry],
            ["시간대", tenant.timezone],
            ["언어", tenant.language],
            ["플랜", currentPlan ? currentPlan.name : "—"],
          ].map(([label, value], i, arr) => (
            <div
              key={label}
              className={`flex items-center justify-between py-2 ${i < arr.length - 1 ? "border-b" : ""}`}
            >
              <span className="text-sm text-muted-foreground">{label}</span>
              <span className="text-sm font-medium">{value}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* 팀 관리 */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-base flex items-center gap-2">
            <Users className="h-5 w-5" />
            팀 관리
          </CardTitle>
          <Badge variant="secondary">{mockUsers.length}명</Badge>
        </CardHeader>
        <CardContent className="space-y-1">
          {mockUsers.map((user, i) => (
            <div
              key={user.id}
              className={`flex items-center justify-between py-2 ${i < mockUsers.length - 1 ? "border-b" : ""}`}
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium">{user.name}</span>
                <span className="text-xs text-muted-foreground">{user.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={user.role === "관리자" ? "default" : "secondary"}>
                  {user.role}
                </Badge>
                <Badge variant={user.status === "활성" ? "outline" : "secondary"}>
                  {user.status}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* API 키 */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-base flex items-center gap-2">
            <Key className="h-5 w-5" />
            API 연동
          </CardTitle>
          <Badge variant="secondary">{mockApiKeys.length}개</Badge>
        </CardHeader>
        <CardContent className="space-y-1">
          {mockApiKeys.map((apiKey, i) => (
            <div
              key={apiKey.id}
              className={`flex items-center justify-between py-2 ${i < mockApiKeys.length - 1 ? "border-b" : ""}`}
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium">{apiKey.name}</span>
                <code className="text-xs text-muted-foreground">{apiKey.key}</code>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">{apiKey.createdAt}</span>
                <Badge variant={apiKey.status === "활성" ? "outline" : "secondary"}>
                  {apiKey.status}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* 빌링 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            빌링
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          <div className="flex items-center justify-between py-2 border-b">
            <span className="text-sm text-muted-foreground">현재 플랜</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{currentPlan?.name}</span>
              <Badge>사용중</Badge>
            </div>
          </div>
          <div className="flex items-center justify-between py-2 border-b">
            <span className="text-sm text-muted-foreground">월 요금</span>
            <span className="text-sm font-medium">₩{currentPlan?.price}만/월</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b">
            <span className="text-sm text-muted-foreground">포함 콜 수</span>
            <span className="text-sm font-medium">{currentPlan?.callsIncluded.toLocaleString()}건</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-muted-foreground">다음 결제일</span>
            <span className="text-sm font-medium">2026-05-01</span>
          </div>
          <div className="pt-3">
            <Button variant="outline" size="sm">Enterprise로 업그레이드</Button>
          </div>
        </CardContent>
      </Card>

      {/* 알림 설정 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Bell className="h-5 w-5" />
            알림 설정
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          <div className="flex items-center justify-between py-2 border-b">
            <div className="flex flex-col">
              <span className="text-sm">컴플라이언스 경고 알림</span>
              <span className="text-xs text-muted-foreground">위반 감지 시 즉시 알림</span>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex flex-col">
              <span className="text-sm">일일 리포트 이메일</span>
              <span className="text-xs text-muted-foreground">매일 09:00 요약 리포트 발송</span>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
