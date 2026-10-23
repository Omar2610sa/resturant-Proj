import { serverApi } from "@/lib/apis/serverApi";
import { GetRecipesParams, RecipeData } from "../types";

export const getRecipes = async ({
    page = 1,
    limit = 9,
    search,
}: GetRecipesParams = {}) => {
    const params = new URLSearchParams({
        page: String(page),
        limit: String(limit),
    });

    if (search) params.set("search", search);

    return serverApi<{ data: RecipeData }>(`recipe?${params.toString()}`);
};