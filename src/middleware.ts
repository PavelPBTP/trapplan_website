import { NextResponse, type NextRequest } from "next/server";

const SUPPORTED_LOCALES = ["en", "es", "it", "fr", "de", "zh"] as const;
const DEFAULT_LOCALE = "en";

type Locale = (typeof SUPPORTED_LOCALES)[number];

function isLocale(maybe: string): maybe is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(maybe);
}

function getLocaleFromPathname(pathname: string): Locale | null {
  const seg = pathname.split("/").filter(Boolean)[0];
  if (!seg) return null;
  return isLocale(seg) ? seg : null;
}

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Ignore Next.js internals and public files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/og") ||
    pathname === "/favicon.ico" ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/brand") ||
    pathname.startsWith("/mockups") ||
    pathname.startsWith("/blog-assets") ||
    pathname.startsWith("/data") ||
    pathname.startsWith("/scripts") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap")
  ) {
    return NextResponse.next();
  }

  const urlLocale = getLocaleFromPathname(pathname);

  // If no locale prefix, redirect to default locale.
  if (!urlLocale) {
    const cookieLocale = req.cookies.get("tp_locale")?.value;
    const preferredLocale = cookieLocale && isLocale(cookieLocale) ? cookieLocale : DEFAULT_LOCALE;
    const url = req.nextUrl.clone();
    url.pathname = `/${pathname === "/" ? DEFAULT_LOCALE : preferredLocale}${pathname === "/" ? "" : pathname}`;
    url.search = search;

    const res = NextResponse.redirect(url);
    res.headers.set("x-tp-locale", pathname === "/" ? DEFAULT_LOCALE : preferredLocale);
    res.cookies.set("tp_locale", pathname === "/" ? DEFAULT_LOCALE : preferredLocale, {
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
    });
    return res;
  }

  // Strip locale for internal routing, keep URL as-is.
  const internal = req.nextUrl.clone();
  internal.pathname = pathname.replace(new RegExp(`^/${urlLocale}(?=/|$)`), "") || "/";

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-tp-locale", urlLocale);

  const res = NextResponse.rewrite(internal, {
    request: {
      headers: requestHeaders,
    },
  });
  res.headers.set("x-tp-locale", urlLocale);
  res.cookies.set("tp_locale", urlLocale, {
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
  });
  return res;
}

export const config = {
  matcher: ["/:path*"],
};
