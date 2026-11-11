import RecipeSection from "@/feature/Single recipe/components/RecipeSection";
import { ParamsPageProps } from "@/types";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
    const t = await getTranslations("Metadata");
    return {
        title: t("recipeTitle"),
        description: t("description"),
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
