import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(locale: string | undefined): locale is Locale {
  return locales.some((supportedLocale) => supportedLocale === locale);
}

export const routing = defineRouting({
  locales,
  localePrefix: "as-needed",
  defaultLocale: "ar",
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
