import { apiClient } from "@/lib/apis/apiClient";
import type { RecipeFormValues } from "../schema/recipe.schema";

export async function   editRecipeApi({ values, id }: { values: RecipeFormValues, id: string }) {
  const formData = new FormData();

  formData.append("title", values.title);
  formData.append("description", values.description);
  formData.append("ingredients", values.ingredients);
  formData.append("instructions", values.instructions);
  formData.append("cookingTime", String(values.cookingTime));
  formData.append("difficulty", values.difficulty);
  formData.append("coverImage", values.coverImage);
  formData.append("servingSize", String(values.servingSize));

  return apiClient(`recipe/${id}`, {
    method: "PUT",
    body: formData,
  });
}