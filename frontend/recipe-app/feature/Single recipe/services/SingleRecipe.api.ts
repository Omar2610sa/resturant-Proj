import { serverApi } from "@/lib/apis/serverApi";
import {  RecipeData } from "../types";

export const getSingleRecipe = async ({ id }: { id: string }) => {
    return serverApi<{ data: RecipeData }>(`recipe/${id}`);
};