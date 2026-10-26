import { Status } from "@/types";
import type { LucideIcon } from "lucide-react";

export type StatTone = "primary" | "info" | "success";

export type StatCardProps = {
    label: string;
    value: number;
    icon: LucideIcon;
    tone: StatTone;
    trend?: number;
};

export type Analytics = {
    totalRecipes: number;
    recipesThisWeek: number;
    totalUsers: number;
};

export type AnalyticsData = {
    status: Status;
    data: Analytics;
};