import { serverApi } from "@/lib/apis/serverApi";
import { RecipeData } from "../types";
import { GetParams } from "@/types";

export const getRecipes = async ({
    page = 1,
    limit = 9,
    search,
}: GetParams = {}) => {
    const params = new URLSearchParams({
        page: String(page),
        limit: String(limit),
    });

    if (search) params.set("search", search);

    return serverApi<{ data: RecipeData }>(`recipe?${params.toString()}`);
};