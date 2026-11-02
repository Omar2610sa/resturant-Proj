import { RecipeData } from "@/feature/recipes/types";
import { serverApi } from "@/lib/apis/serverApi";

export const getSingleRecipe = async ({ id }: { id: string }) => {
    return serverApi<{ data: RecipeData }>(`recipe/${id}`);
};