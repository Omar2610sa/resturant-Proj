import { BookOpen, CalendarPlus, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type {  countAalytics, StatTone } from "../types";
import { StatCard } from "./StatCard";
import { getTranslations } from "next-intl/server";

const statsConfig: {
    key: keyof countAalytics;
    labelKey: "totalRecipes" | "totalUsers" | "recipesThisWeek";
    icon: LucideIcon;
    tone: StatTone;
}[] = [
        { key: "totalRecipes", labelKey: "totalRecipes", icon: BookOpen, tone: "primary" },
        { key: "totalUsers", labelKey: "totalUsers", icon: Users, tone: "info" },
        { key: "recipesThisWeek", labelKey: "recipesThisWeek", icon: CalendarPlus, tone: "success" },
    ];

export async function StatsSection({ countAnalytics }: { countAnalytics: countAalytics }) {
    const analytics = countAnalytics;
    const t = await getTranslations("Dashboard.overview");
    return (
        <section
            aria-label={t("ariaLabel")}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
            {statsConfig.map(({ key, labelKey, ...config }) => (
                <StatCard key={key} value={analytics[key]} label={t(labelKey)} {...config} />
            ))}
        </section>
    );
}