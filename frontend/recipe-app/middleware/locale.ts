import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "../i18n/routing";

export async function MiddlewareLocale(
  request: NextRequest,
  response: NextResponse
): Promise<NextResponse> {
  const isEnglishLocale = request.nextUrl.pathname.startsWith("/en");
  response.cookies.set("NEXT_LOCALE", isEnglishLocale ? "en" : "ar");

  const handleI18nRouting = createMiddleware(routing);
  const i18nResponse = handleI18nRouting(request);

  i18nResponse.headers.forEach((value, key) => {
    response.headers.set(key, value);
  });

  const setCookieHeaders = i18nResponse.headers.get("set-cookie");
  if (setCookieHeaders) {
    setCookieHeaders.split(",").forEach((cookie) => {
      response.headers.append("set-cookie", cookie);
    });
  }

  return response;
}
