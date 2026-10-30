import { BreadCrumb } from "@/components/shared/Breadcrumb/BreadCrumb";
import RecipeCard from "@/feature/recipes/components/RecipeCard";
import PaginationRouter from "@/components/Pagination";
import { getRecipes } from "@/feature/recipes/services/recipes.api";
import { searchParams } from "@/types";
import SearchFilter from "@/components/dashboard/SerchFilter";

export default async function page({
    searchParams
}: searchParams) {
    const { page = "1", search = "" } = await searchParams;
    const { data: recipeData } = await getRecipes({ page: Number(page), search, limit:6 })
    const recipes = recipeData?.recipes;
    const pagination = recipeData?.pagination
    return (
        <section className="container flexSection">
            <div className="flex justify-between items-end">

            <BreadCrumb
                secondLink="الوصفات"
                />
                <SearchFilter
                placeholder="إبحث عن وصفتك"
                /> 
                </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe._id} recipe={recipe} />
                ))}
            </div>
            <PaginationRouter pagination={pagination} />
        </section>
    )
}
