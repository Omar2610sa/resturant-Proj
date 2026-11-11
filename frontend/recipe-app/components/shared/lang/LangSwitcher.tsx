"use client";
import React from "react";
import { useRouter } from "nextjs-toploader/app";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import { useLocale, useTranslations } from "next-intl";
import { Internet } from "../Icons";

const LangSwitcher: React.FC = () => {
  // const locale = useLocale();

  const router = useRouter();
  const pathname = usePathname();
  // const t = useTranslations();

  const setLanguage = async (locale: string) => {
    const lang = locale === "ar" ? "en" : "ar";

    Cookies.set("NEXT_LOCALE", lang);
    const url = new URL(window.location.href);
    const searchParams = url.search;
    let newPathname = pathname;
    if (newPathname.startsWith("/en")) {
      newPathname = `/${lang}/${newPathname.slice(3)}`;
    } else {
      newPathname = `/${lang}${newPathname}`;
    }
    router.push(`${newPathname}${searchParams}`);
  };

  return (
    <button
      className="flex items-center gap-1 size-10 bg-background text-primary-dark cursor-pointer font-bold border border-border px-2.5 py-3 rounded-lg  duration-300 transition-all hover:bg-accent/50"
    // onClick={() => setLanguage(locale)}
    >
      <Internet />
    </button>
  );
};

export default LangSwitcher;
