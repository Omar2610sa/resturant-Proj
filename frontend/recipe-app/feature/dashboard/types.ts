import { RecipeFormValues } from "./schema/recipe.schema";

export type EditRecipeFormProps = {
    initialValues: RecipeFormValues & { _id: string };
};