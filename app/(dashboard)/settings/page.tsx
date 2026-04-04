import { Building2, Users, Key, CreditCard, Bell, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

      {/* 빌링 플랜 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            빌링
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {mockBillingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-lg border p-4 space-y-3 ${plan.current ? "border-primary ring-1 ring-primary" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{plan.name}</span>
                  {plan.current && <Badge>현재</Badge>}
                </div>
                <p className="text-lg font-bold">
                  {plan.price > 0 ? (
                    <>₩{plan.price}만<span className="text-sm font-normal text-muted-foreground">/월</span></>
                  ) : (
                    "별도 협의"
                  )}
                </p>
                <ul className="space-y-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Check className="h-3 w-3 text-emerald-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.current ? "outline" : "default"}
                  size="sm"
                  className="w-full"
                  disabled={plan.current}
                >
                  {plan.current ? "현재 플랜" : "선택"}
                </Button>
              </div>
            ))}
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
