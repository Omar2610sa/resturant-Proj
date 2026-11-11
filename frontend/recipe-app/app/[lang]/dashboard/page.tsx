import NewRecipesPreview from "@/feature/analytics/components/NewRecipesPreview";
import { StatsSection } from "@/feature/analytics/components/StatsSection";
import { getAnalytics } from "@/feature/analytics/services/analytics.api";
import { connection } from "next/server";
import { Suspense } from "react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const t = await getTranslations({
        locale: lang,
        namespace: "Dashboard.metadata",
    });
    return {
        title: t("title"),
        description: t("description"),
    };
}
async function DashboardOverview() {
    await connection();
    const response = await getAnalytics();
    return (
        <div className="flexSection">
            <StatsSection countAnalytics={response.data.countAnalytics} />
            <NewRecipesPreview newRecipes={response.data.newRecipes} />
        </div>
    )
}

export default function page() {
    return (
        <Suspense fallback={<div className="min-h-40 animate-pulse rounded-2xl bg-muted" />}>
            <DashboardOverview />
        </Suspense>
    );
}
