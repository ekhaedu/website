import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow static files, api routes, Next.js internals, and /coming-soon
  if (
    pathname === "/coming-soon" ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    /\.(png|jpg|jpeg|gif|webp|svg|ico|mp4|webm|css|js|txt|xml)$/i.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Lock the site: redirect all traffic to /coming-soon
  const url = request.nextUrl.clone();
  url.pathname = "/coming-soon";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
