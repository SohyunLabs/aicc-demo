"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AppSwitcher } from "@/components/layout/app-switcher";
import { StepProfile } from "./steps/step-profile";
import { StepTemplate } from "./steps/step-template";
import { StepUpload } from "./steps/step-upload";
import { StepPreview } from "./steps/step-preview";
import { StepTestCall } from "./steps/step-test-call";
import { StepPricing } from "./steps/step-pricing";

const steps = [
  { id: 1, title: "프로필 등록" },
  { id: 2, title: "템플릿 선택" },
  { id: 3, title: "문서 업로드" },
  { id: 4, title: "시나리오 프리뷰" },
  { id: 5, title: "테스트 콜" },
  { id: 6, title: "요금제 선택" },
];

export function OnboardingWizard() {
  const [currentStep, setCurrentStep] = useState(1);

  const goNext = () => setCurrentStep((prev) => Math.min(prev + 1, 6));
  const goPrev = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* 앱 스위처 */}
      <div className="mb-6">
        <AppSwitcher current="onboarding" />
      </div>

      {/* 로고/타이틀 */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">AICC 시작하기</h1>
        <p className="text-muted-foreground mt-1">
          몇 가지 설정만으로 AI 컨택센터를 구축하세요
        </p>
      </div>

      {/* 스텝 인디케이터 */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors",
                    currentStep > step.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : currentStep === step.id
                        ? "border-primary text-primary"
                        : "border-muted-foreground/30 text-muted-foreground/50"
                  )}
                >
                  {currentStep > step.id ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    step.id
                  )}
                </div>
                <span
                  className={cn(
                    "mt-2 text-xs hidden sm:block",
                    currentStep >= step.id
                      ? "text-foreground font-medium"
                      : "text-muted-foreground/50"
                  )}
                >
                  {step.title}
                </span>
              </div>
              {/* 연결선 */}
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "mx-2 h-0.5 w-8 sm:w-16 lg:w-24",
                    currentStep > step.id
                      ? "bg-primary"
                      : "bg-muted-foreground/20"
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 스텝 콘텐츠 */}
      <div className="min-h-[400px]">
        {currentStep === 1 && <StepProfile />}
        {currentStep === 2 && <StepTemplate />}
        {currentStep === 3 && <StepUpload />}
        {currentStep === 4 && <StepPreview />}
        {currentStep === 5 && <StepTestCall />}
        {currentStep === 6 && <StepPricing />}
      </div>

      {/* 네비게이션 버튼 */}
      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={goPrev}
          disabled={currentStep === 1}
        >
          이전
        </Button>
        {currentStep < 6 ? (
          <Button onClick={goNext}>다음</Button>
        ) : (
          <Button>시작하기</Button>
        )}
      </div>
    </div>
  );
}
