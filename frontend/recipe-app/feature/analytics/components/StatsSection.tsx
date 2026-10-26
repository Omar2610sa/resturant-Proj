import { BookOpen, CalendarPlus, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Analytics, StatTone } from "../types";
import { StatCard } from "./StatCard";
import { getAnalytics } from "../services/analytics.api";


const statsConfig: {
    key: keyof Analytics;
    label: string;
    icon: LucideIcon;
    tone: StatTone;
}[] = [
        { key: "totalRecipes", label: "إجمالي الوصفات", icon: BookOpen, tone: "primary" },
        { key: "totalUsers", label: "إجمالي المستخدمين", icon: Users, tone: "info" },
        { key: "recipesThisWeek", label: "وصفات جديدة هذا الأسبوع", icon: CalendarPlus, tone: "success" },
    ];

export async function StatsSection() {
    const response = await getAnalytics();
    const analytics = response.data;
    return (
        <section
            aria-label="إحصائيات عامة"
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
            {statsConfig.map(({ key, ...config }) => (
                <StatCard key={key} value={analytics[key]} {...config} />
            ))}
        </section>
    );
}