"use client";

import { roleConfig } from "../../config/roleConfig";
import { useTranslations } from "next-intl";

export function RoleBadge({ roles }: { roles: keyof typeof roleConfig }) {
    const role = roleConfig[roles];
    const t = useTranslations("Dashboard.roles");

    return (
        <span
            className={`rounded-md sm:rounded-full p-1.5 sm:py-3 sm:px-4 text-sm font-extrabold shadow-sm ${role.className}`}
        >
            {t(roles)}
        </span>
    );
}