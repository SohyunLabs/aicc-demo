import { OnboardingWizard } from "@/components/onboarding/onboarding-wizard";

// 데모용 온보딩 — 데모 라우트 내에서 머무르도록 demo 모드 활성화
export default function DemoOnboardingPage() {
  return <OnboardingWizard demo />;
}
