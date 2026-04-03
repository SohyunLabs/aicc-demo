// 회사 브랜딩 설정
// 새 회사 추가: brands 객체에 config 추가 → globals.css에 [data-brand="xxx"] 블록 추가 → public/logos/에 로고 파일

export interface BrandConfig {
  brandId: string;
  companyName: string; // 회사명 (예: "뤼튼테크놀로지스")
  productName: string; // 제품명 (예: "AICC")
  displayName: string; // 표시명 (예: "뤼튼 AICC")
  consoleName: string; // 콘솔 앱명 (예: "뤼튼 AICC")
  onboardingTitle: string; // 온보딩 타이틀 (예: "뤼튼 AICC 시작하기")
  logoSrc: string | null; // 로고 이미지 경로 (null이면 아이콘 폴백)
  logoAlt: string;
}

const brands: Record<string, BrandConfig> = {
  wrtn: {
    brandId: "wrtn",
    companyName: "뤼튼테크놀로지스",
    productName: "AICC",
    displayName: "뤼튼 AICC",
    consoleName: "뤼튼 AICC",
    onboardingTitle: "뤼튼 AICC 시작하기",
    logoSrc: "/logos/wrtn-logo.svg",
    logoAlt: "뤼튼 로고",
  },
  acme: {
    brandId: "acme",
    companyName: "Acme Corp",
    productName: "Contact Center",
    displayName: "Acme Contact Center",
    consoleName: "Acme Console",
    onboardingTitle: "Acme Contact Center 시작하기",
    logoSrc: null,
    logoAlt: "Acme 로고",
  },
};

const brandKey = process.env.NEXT_PUBLIC_BRAND ?? "wrtn";

export const brand: BrandConfig = brands[brandKey] ?? brands.wrtn;
