"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Copy, Plus, Trash2, Check } from "lucide-react";
import type { TenantSettings, UserRecord, ApiKey, BillingPlan } from "@/types/aicc";

interface SettingsTabsProps {
  tenant: TenantSettings;
  users: UserRecord[];
  apiKeys: ApiKey[];
  billingPlans: BillingPlan[];
}

export function SettingsTabs({ tenant, users, apiKeys, billingPlans }: SettingsTabsProps) {
  return (
    <Tabs defaultValue="tenant">
      <TabsList>
        <TabsTrigger value="tenant">테넌트</TabsTrigger>
        <TabsTrigger value="users">사용자</TabsTrigger>
        <TabsTrigger value="api-keys">API 키</TabsTrigger>
        <TabsTrigger value="billing">빌링</TabsTrigger>
      </TabsList>

      {/* 테넌트 설정 */}
      <TabsContent value="tenant" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>테넌트 설정</CardTitle>
            <CardDescription>조직의 기본 설정을 관리합니다.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 max-w-lg">
            <div className="space-y-2">
              <Label htmlFor="company">회사명</Label>
              <Input id="company" defaultValue={tenant.companyName} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry">산업</Label>
              <Select defaultValue={tenant.industry}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="보험/금융">보험/금융</SelectItem>
                  <SelectItem value="이커머스">이커머스</SelectItem>
                  <SelectItem value="통신/IT">통신/IT</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">시간대</Label>
              <Select defaultValue={tenant.timezone}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Asia/Seoul">Asia/Seoul (KST)</SelectItem>
                  <SelectItem value="Asia/Tokyo">Asia/Tokyo (JST)</SelectItem>
                  <SelectItem value="UTC">UTC</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="language">언어</Label>
              <Select defaultValue={tenant.language}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="한국어">한국어</SelectItem>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="日本語">日本語</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button>저장</Button>
          </CardContent>
        </Card>
      </TabsContent>

      {/* 사용자 관리 */}
      <TabsContent value="users" className="mt-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>사용자 관리</CardTitle>
              <CardDescription>팀 멤버를 관리합니다.</CardDescription>
            </div>
            <Button size="sm" className="gap-1">
              <Plus className="h-4 w-4" />
              사용자 추가
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>이름</TableHead>
                  <TableHead>이메일</TableHead>
                  <TableHead>역할</TableHead>
                  <TableHead>상태</TableHead>
                  <TableHead>최근 로그인</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell className="text-muted-foreground">{user.email}</TableCell>
                    <TableCell>
                      <Badge variant={user.role === "관리자" ? "default" : "secondary"}>
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={user.status === "활성" ? "outline" : "secondary"}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {new Date(user.lastLogin).toLocaleDateString("ko-KR")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      {/* API 키 */}
      <TabsContent value="api-keys" className="mt-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>API 키 관리</CardTitle>
              <CardDescription>외부 연동을 위한 API 키를 관리합니다.</CardDescription>
            </div>
            <Button size="sm" className="gap-1">
              <Plus className="h-4 w-4" />
              키 생성
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>이름</TableHead>
                  <TableHead>키</TableHead>
                  <TableHead>생성일</TableHead>
                  <TableHead>상태</TableHead>
                  <TableHead className="w-24"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {apiKeys.map((apiKey) => (
                  <TableRow key={apiKey.id}>
                    <TableCell className="font-medium">{apiKey.name}</TableCell>
                    <TableCell>
                      <code className="rounded bg-muted px-2 py-1 text-xs">
                        {apiKey.key}
                      </code>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{apiKey.createdAt}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Switch checked={apiKey.status === "활성"} />
                        <span className="text-sm">{apiKey.status}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      {/* 빌링 */}
      <TabsContent value="billing" className="mt-4">
        <div className="grid gap-6 md:grid-cols-3">
          {billingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.current ? "border-primary ring-1 ring-primary" : ""}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{plan.name}</CardTitle>
                  {plan.current && <Badge>현재 플랜</Badge>}
                </div>
                <CardDescription>
                  {plan.price > 0 ? (
                    <span className="text-2xl font-bold text-foreground">
                      ₩{plan.price}만<span className="text-sm font-normal text-muted-foreground">/월</span>
                    </span>
                  ) : (
                    <span className="text-2xl font-bold text-foreground">별도 협의</span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.current ? "outline" : "default"}
                  className="mt-4 w-full"
                  disabled={plan.current}
                >
                  {plan.current ? "현재 플랜" : "선택"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
