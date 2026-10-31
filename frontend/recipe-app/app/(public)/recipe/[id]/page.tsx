
import RecipeDetails from "@/feature/Single recipe/components/RecipeDetails";
import RecipeHero from "@/feature/Single recipe/components/RecipeHero";
import { getSingleRecipe } from "@/feature/Single recipe/services/SingleRecipe.api";
import { ParamsPageProps } from "@/types";
import { notFound } from "next/navigation";



export async function generateMetadata() {
    return {
        title: `مَذاق | الوصفة`,
        description: "مَذاق للوصفات الشهية والعربية الأصيلة",
    };
}
export default async function page({ params }: ParamsPageProps) {
    const { id } = await params
    const { data: recipeData } = await getSingleRecipe({ id })

    if (!recipeData?.recipe) {
        notFound();
    }

    const recipe = recipeData.recipe

    return (
        <div>
            <RecipeHero recipe={recipe} />
            <RecipeDetails recipe={recipe} />
        </div>
    )
}
