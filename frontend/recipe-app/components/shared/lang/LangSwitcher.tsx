"use client";
import React from "react";
import Cookies from "js-cookie";
import { useLocale, useTranslations } from "next-intl";
import { Internet } from "../Icons";
import { usePathname, useRouter, type Locale } from "@/i18n/routing";

const LangSwitcher: React.FC = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("LanguageSwitcher");

  const setLanguage = () => {
    const lang: Locale = locale === "ar" ? "en" : "ar";

    Cookies.set("NEXT_LOCALE", lang, { path: "/", sameSite: "lax" });
    const search = window.location.search;
    router.replace(`${pathname}${search}`, { locale: lang });
  };

  return (
    <button
      className="flex items-center gap-1 size-10 bg-background text-primary-dark cursor-pointer font-bold border border-border px-2.5 py-3 rounded-lg  duration-300 transition-all hover:bg-accent/50"
      type="button"
      aria-label={t("label")}
      onClick={setLanguage}
    >
      <Internet />
    </button>
  );
};

export default LangSwitcher;
