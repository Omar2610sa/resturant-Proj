import { apiClient } from "@/lib/apis/apiClient";
import { RecipeFormValues } from "@/feature/dashboard/schema/recipe.schema";

export async function   editRecipeApi({ values, id }: { values: RecipeFormValues, id: string }) {
  const formData = new FormData();

  formData.append("title.ar", values.title.ar);
  formData.append("title.en", values.title.en);
  formData.append("description.ar", values.description.ar);
  formData.append("description.en", values.description.en);
  formData.append("ingredients.ar", values.ingredients.ar);
  formData.append("ingredients.en", values.ingredients.en);
  formData.append("instructions.ar", values.instructions.ar);
  formData.append("instructions.en", values.instructions.en);
  formData.append("cookingTime", String(values.cookingTime));
  formData.append("difficulty", values.difficulty);
  formData.append("coverImage", values.coverImage);
  formData.append("servingSize", String(values.servingSize));

  return apiClient(`recipe/${id}`, {
    method: "PUT",
    body: formData,
  });
}