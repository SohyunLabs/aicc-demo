"use client";

import { SettingsTabs } from "@/components/settings/settings-tabs";
import {
  mockTenantSettings,
  mockUsers,
  mockApiKeys,
  mockBillingPlans,
} from "@/lib/mock-aicc";

// 설정 — 4탭: 테넌트/사용자/API키/빌링
export default function SettingsPage() {
  return (
    <SettingsTabs
      tenant={mockTenantSettings}
      users={mockUsers}
      apiKeys={mockApiKeys}
      billingPlans={mockBillingPlans}
    />
  );
}
