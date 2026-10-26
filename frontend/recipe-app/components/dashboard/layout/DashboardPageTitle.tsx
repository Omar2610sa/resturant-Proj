"use client";

import { usePathname } from "next/navigation";

import { dashboardNav } from "@/lib/dashboard-nav";

export function DashboardPageTitle() {
    const pathname = usePathname();

    const current = dashboardNav.find(({ href }) =>
        href === "/dashboard" ? pathname === href : pathname.startsWith(href),
    );

    return (
        <h1 className="truncate text-xl font-black sm:text-3xl">
            {current?.label ?? "لوحة التحكم"}
        </h1>
    );
}