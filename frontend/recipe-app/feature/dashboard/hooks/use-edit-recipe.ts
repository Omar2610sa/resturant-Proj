import { useForm } from "react-hook-form";
import { editRecipeApi } from "../services/editRecipe.api";
import { createEditRecipeSchema, EditRecipeFormValues, EditRecipeInitialValues } from "../schema/recipe.schema";
import { useStatusToast } from "@/hooks/use-status-toast";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { respones } from "@/types";
import type { z } from 'zod';
import { useTranslations } from "next-intl";


export function useEditRecipe(
    recipeId: string,
    initialValues: EditRecipeInitialValues,
) {
    const { showToast } = useStatusToast();
    const router = useRouter();
    const validationT = useTranslations("Dashboard.validation");
    const feedbackT = useTranslations("Dashboard.feedback");
    const editRecipeSchema = createEditRecipeSchema({
        imageRequired: validationT("imageRequired"),
        imageType: validationT("imageType"),
        imageSize: validationT("imageSize"),
        titleMin: validationT("titleMin"),
        titleMax: validationT("titleMax"),
        descriptionMin: validationT("descriptionMin"),
        descriptionMax: validationT("descriptionMax"),
        ingredientsMin: validationT("ingredientsMin"),
        instructionsMin: validationT("instructionsMin"),
        cookingTimeNumber: validationT("cookingTimeNumber"),
        cookingTimePositive: validationT("cookingTimePositive"),
        cookingTimeInteger: validationT("cookingTimeInteger"),
        servingSizeNumber: validationT("servingSizeNumber"),
        servingSizePositive: validationT("servingSizePositive"),
        servingSizeInteger: validationT("servingSizeInteger"),
        difficultyRequired: validationT("difficultyRequired"),
    });

    const form = useForm<
        z.input<typeof editRecipeSchema>,
        unknown,
        EditRecipeFormValues
    >({
        resolver: zodResolver(editRecipeSchema),
        defaultValues: initialValues,
    });

    const onSubmit = form.handleSubmit(async (values) => {
        try {
            const response = await editRecipeApi({
                values: values as Parameters<typeof editRecipeApi>[0]['values'],
                id: recipeId
            }) as respones;

            if (response.status !== "success") {
                showToast({
                    type: "error",
                    description: feedbackT("editFailure"),
                });
                return;
            }

            showToast({ type: "success", description: feedbackT("editSuccess") });
            router.push("/dashboard/recipes");
            router.refresh();
        } catch {
            form.setError("root", {
                message: feedbackT("editError"),
            });
        }
    });

    return { form, onSubmit };
}