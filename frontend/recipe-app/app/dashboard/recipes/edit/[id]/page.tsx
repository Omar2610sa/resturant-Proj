import EditRecipeForm from "@/feature/dashboard/components/editRecipe/EditRecipeForm";
import { getSingleRecipe } from "@/feature/Single recipe/services/SingleRecipe.api";
import { ParamsPageProps } from "@/types";

export async function generateMetadata() {
    return {
        title: "مَذاق | عدل الوصفة",
        description: "مَذاق للوصفات الشهية والعربية الأصيلة",
    };
}
export default async function page({ params }: ParamsPageProps) {
    const { id } = await params
    const { data: recipeData } = await getSingleRecipe({ id })
    const recipe = recipeData.recipe

    return (
        <section>
            <div className="flex flex-1 items-center justify-center">
                <EditRecipeForm 
                initialValues={recipe}  />
            </div>
        </section>
    )
}
