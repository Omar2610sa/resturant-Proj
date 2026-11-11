import { jwtVerify } from "jose";
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { isLocale, routing, type Locale } from "./i18n/routing";
import { TOKEN_NAME } from "./lib/constants";

const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
const handleI18nRouting = createMiddleware(routing);

function getLocalizedPath(pathname: string, locale: Locale) {
    return locale === routing.defaultLocale
        ? pathname
        : `/${locale}${pathname}`;
}

function setLocaleCookie(response: NextResponse, locale: Locale) {
    response.cookies.set("NEXT_LOCALE", locale, { path: "/", sameSite: "lax" });
    return response;
}

export default async function proxy(request: NextRequest) {
    const response = handleI18nRouting(request);
    const { pathname } = request.nextUrl;
    const pathnameLocale = routing.locales.find(
        (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
    );
    const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
    const locale = pathnameLocale
        ?? (isLocale(cookieLocale) ? cookieLocale : routing.defaultLocale);
    const pathnameWithoutLocale = pathnameLocale
        ? pathname.slice(pathnameLocale.length + 1) || "/"
        : pathname;
    const isDashboardPath = pathnameWithoutLocale === "/dashboard"
        || pathnameWithoutLocale.startsWith("/dashboard/");

    if (!isDashboardPath) {
        return setLocaleCookie(response, locale);
    }

    const token = request.cookies.get(TOKEN_NAME)?.value;
    if (!token) {
        const loginUrl = new URL(getLocalizedPath("/login", locale), request.url);
        loginUrl.searchParams.set("reason", "unauthenticated");
        return setLocaleCookie(NextResponse.redirect(loginUrl), locale);
    }

    try {
        const { payload } = await jwtVerify(token, secret);

        if (payload.role !== "admin") {
            const homeUrl = new URL(getLocalizedPath("/", locale), request.url);
            homeUrl.searchParams.set("reason", "forbidden");
            return setLocaleCookie(NextResponse.redirect(homeUrl), locale);
        }

        return setLocaleCookie(response, locale);
    } catch {
        const loginUrl = new URL(getLocalizedPath("/login", locale), request.url);
        const res = NextResponse.redirect(loginUrl);
        res.cookies.delete(TOKEN_NAME);
        return setLocaleCookie(res, locale);
    }
}

export const config = {
    matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
