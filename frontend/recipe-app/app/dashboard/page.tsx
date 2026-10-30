import NewRecipesPreview from "@/feature/analytics/components/NewRecipesPreview";
import { StatsSection } from "@/feature/analytics/components/StatsSection";
import { getAnalytics } from "@/feature/analytics/services/analytics.api";

export async function generateMetadata() {
    return {
        title: "مَذاق | لوحة التحكم",
        description: "لوحة التحكم الخاصة بي مَذاق",
    };
}
export default async function page() {
    const response = await getAnalytics();
    return (
        <div className="flexSection">
            <StatsSection countAnalytics={response.data.countAnalytics} />
            <NewRecipesPreview newRecipes={response.data.newRecipes} />
        </div>
    )
}
