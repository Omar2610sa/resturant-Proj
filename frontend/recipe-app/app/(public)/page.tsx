import { Hero } from "@/components/home/Hero";
import RecipeSection from "@/feature/recipes/components/RecipeSeciton";
import { getRecipes } from "@/feature/recipes/services/recipes.api";
import { Suspense } from "react";

export default async function page() {
  const { data: recipeData } = await getRecipes({ limit: 6 })
  const recipes = recipeData?.recipes;

  return (
    <div >
      <Hero />
      <RecipeSection recipes={recipes} />
    </div>
  )
}
