import { Hero } from "@/components/home/Hero";
import InfoHomeBanner from "@/components/home/InfoHomeBanner";
import AboutBanner from "@/feature/about/components/AboutBanner";
import RecipeSection from "@/feature/recipes/components/RecipeSeciton";
import { getRecipes } from "@/feature/recipes/services/recipes.api";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Metadata");
  return {
    title: t("homeTitle"),
    description: t("description"),
  };
}

export default async function page() {
  const { data: recipeData } = await getRecipes({ limit: 6 })
  const recipes = recipeData?.recipes;
  return (
    <div>
      <Hero />
      {
        recipes && (
          <RecipeSection recipes={recipes} />
        )
      }
      <AboutBanner />
      <InfoHomeBanner />
    </div>
  )
}
