import { apiClient } from "@/lib/apis/apiClient";
import type { RecipeFormValues } from "../schema/recipe.schema";

export async function addRecipeApi(values: RecipeFormValues) {
  const formData = new FormData();

  formData.append("title", values.title);
  formData.append("description", values.description);
  formData.append("ingredients", values.ingredients);
  formData.append("instructions", values.instructions);
  formData.append("cookingTime", String(values.cookingTime));
  formData.append("difficulty", values.difficulty);
  formData.append("coverImage", values.coverImage);

  return apiClient("recipe", {
    method: "POST",
    body: formData,
  });
}