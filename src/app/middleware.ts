import { NextRequest, NextResponse } from "next/server";

const PUBLIC_ROUTES = ["/"];

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get("auth");

  const isAuthenticated = authCookie?.value === "true";

  const pathname = request.nextUrl.pathname;

  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);

  if (!isAuthenticated && !isPublicRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (isAuthenticated && isPublicRoute) {
    return NextResponse.redirect(new URL("/chat", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/chat/:path*"],
};
