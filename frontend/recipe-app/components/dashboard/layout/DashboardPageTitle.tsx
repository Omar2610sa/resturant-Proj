"use client";

import { usePathname } from "@/i18n/routing";

import { dashboardNav } from "@/lib/dashboard-nav";
import { useTranslations } from "next-intl";

export function DashboardPageTitle() {
    const pathname = usePathname();
    const t = useTranslations("Dashboard.navigation");

    const current = dashboardNav.find(({ href }) =>
        href === "/dashboard" ? pathname === href : pathname.startsWith(href),
    );

    return (
        <h1 className="truncate text-xl font-black sm:text-3xl">
            {current ? t(current.labelKey) : t("label")}
        </h1>
    );
}