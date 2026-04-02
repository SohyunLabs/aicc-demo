import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function StepProfile() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>프로필 등록</CardTitle>
        <CardDescription>조직의 기본 정보를 입력하세요.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 max-w-lg">
        <div className="space-y-2">
          <Label htmlFor="company-name">회사명</Label>
          <Input id="company-name" placeholder="예: ABC 보험" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-name">담당자 이름</Label>
          <Input id="contact-name" placeholder="홍길동" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">이메일</Label>
          <Input id="contact-email" type="email" placeholder="admin@company.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-phone">연락처</Label>
          <Input id="contact-phone" type="tel" placeholder="010-0000-0000" />
        </div>
      </CardContent>
    </Card>
  );
}
