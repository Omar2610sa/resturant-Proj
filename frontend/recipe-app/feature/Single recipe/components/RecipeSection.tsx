import { notFound } from "next/navigation";
import { getSingleRecipe } from "../services/SingleRecipe.api";
import RecipeDetails from "./RecipeDetails";
import RecipeHero from "./RecipeHero";

export default async function RecipeSection({ id }: { id: string }) {
        const { data: recipeData } = await getSingleRecipe({ id })

    if (!recipeData?.recipe) {
        notFound();
    }

    const recipe = recipeData.recipe
    return (
        <section>
            <RecipeHero recipe={recipe} />
            <RecipeDetails recipe={recipe} />
        </section>
    )
}
