import RecipeCard from "@/feature/recipes/components/RecipeCard";
import PaginationRouter from "@/components/Pagination";
import { getRecipes } from "@/feature/recipes/services/recipes.api";
import { searchParams } from "@/types";
import SearchFilter from "@/components/dashboard/SerchFilter";
import NotFoundRecipes from "@/feature/recipes/components/NotFoundRecipes";

export default async function page({
    searchParams
}: searchParams) {
    const { page = "1", search = "" } = await searchParams;
    const { data: recipeData } = await getRecipes({ page: Number(page), search, limit: 6 })
    const recipes = recipeData?.recipes;
    const pagination = recipeData?.pagination
    return (
        <section className=" flexSection">
            <section className="border-b w-full  bg-about  sm:pb-10">
                <div className="mx-auto container space-y-3 text-center">
                    <span className=" block text-lg font-extrabold text-primary">
                        اختيارات لكل الأذواق
                    </span>
                    <h1 className="text-4xl font-black tracking-tight  sm:text-6xl">
                        الوصفات
                    </h1>
                    <p className="mx-auto max-w-xl leading-7 text-gray-500">
                        ابحث عن وصفتك المفضلة واستمتع بتجربة طبخ سهلة ولذيذة.
                    </p>
                    <div className="max-w-xl mx-auto">
                        <SearchFilter
                            placeholder="إبحث عن وصفتك..."
                        />
                    </div>
                </div>
            </section>
            <section className="space-y-5 container">
                <div className="flex justify-between items-center mx-4">
                    <h2 className="text-4xl font-black">
                        عدد الوصفات
                    </h2>
                    <span className="text-xl font-bold">
                        {recipes.length} وصفات
                    </span>
                </div>
                {/* when search wrong recipe */}
                {recipes?.length === 0 && <NotFoundRecipes />}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                    {recipes.map((recipe) => (
                        <RecipeCard key={recipe._id} recipe={recipe} />
                    ))}
                </div>
                <PaginationRouter pagination={pagination} />
            </section>
        </section>
    )
}
