import { Pagination } from "@/types";

type difficulty = "easy" | "medium" | "hard";


export interface Recipe {
    _id: string;
    title: string;
    description: string;
    ingredients: string;
    instructions: string;
    cookingTime: number;
    coverImage: string;
    createdAt: string;
    difficulty: difficulty
}

export interface RecipeData {
    recipes: Recipe[];
    pagination: Pagination
}


