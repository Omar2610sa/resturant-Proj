import { Status } from "@/types";
import type { LucideIcon } from "lucide-react";
import { Recipe } from "../recipes/types";

export type StatTone = "primary" | "info" | "success";

export type StatCardProps = {
    label: string;
    value: number;
    icon: LucideIcon;
    tone: StatTone;
    trend?: number;
};

export interface countAalytics {
    totalRecipes: number;
    recipesThisWeek: number;
    totalUsers: number;
}

export type Analytics = {
    countAnalytics: countAalytics
    newRecipes: Recipe[]
};

export type AnalyticsData = {
    status: Status;
    data: Analytics;
};