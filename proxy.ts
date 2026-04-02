// 라우트 보호 프록시 (Next.js 16에서 middleware → proxy로 변경)
// 데모 프로토타입: 인증 비활성화 (모든 경로 접근 가능)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function proxy(req: NextRequest) {
  const { nextUrl } = req;

  // 루트 접근 시 대시보드로 리다이렉트
  if (nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }

  return NextResponse.next();
}

// 정적 파일과 API를 제외한 모든 경로에 프록시 적용
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
