import RecipeSection from "@/feature/Single recipe/components/RecipeSection";
import { ParamsPageProps } from "@/types";

export async function generateMetadata() {
    return {
        title: `مَذاق | الوصفة`,
        description: "مَذاق للوصفات الشهية والعربية الأصيلة",
    };
}
export default async function page({ params }: ParamsPageProps) {
    const { id } = await params


    return (
        <div>
            <RecipeSection id={id} />
        </div>
    )
}
