import { getRecipes } from "../../services/recipes.api";

type Props = {
    searchParams: Promise<{ page?: string; search?: string }>;
};
export default async function RecipesTableSection({ searchParams }: Props) {
    const params = await searchParams;
    const page = Math.max(1, Number(params.page) || 1);
    const search = params.search?.trim() || undefined;
    const { data: recipeData } = await getRecipes({ page, search })
    console.log(recipeData)
    return (
        <div></div>
    )
}
