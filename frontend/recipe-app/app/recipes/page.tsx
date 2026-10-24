import { BreadCrumb } from "@/components/shared/Breadcrumb/BreadCrumb";
import RecipeCard from "@/feature/recipes/components/RecipeCard";
import { getRecipes } from "@/feature/recipes/services/recipes.api";

export default async function page() {
    const { data: recipeData } = await getRecipes({ limit: 6 })
    const recipes = recipeData?.recipes;
    return (
        <section className="container flexSection">
            <BreadCrumb
                secondLink="الوصفات"
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe._id} recipe={recipe} />
                ))}
            </div>
        </section>
    )
}
