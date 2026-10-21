import { serverApi } from "@/lib/apis/serverApi";
import {  RecipeData } from "../types";

export const getRecipesHomeData = async () => {
    return serverApi<{ data: RecipeData }>(`recipe?limit=6&&page=1`);
};
