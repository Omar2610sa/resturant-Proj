import { useStatusToast } from "@/hooks/use-status-toast";
import { useRouter } from "next/navigation";
import { addRecipeApi } from "../services/addRecipe.api";
import { respones } from "@/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAddRecipeSchema, RecipeFormValues } from "../schema/recipe.schema";
import type { z } from 'zod';
import { useTranslations } from "next-intl";


export function useAddRecipe() {
    const { showToast } = useStatusToast();
    const router = useRouter();
    const validationT = useTranslations("Dashboard.validation");
    const feedbackT = useTranslations("Dashboard.feedback");
    const addRecipeSchema = createAddRecipeSchema({
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
        z.input<typeof addRecipeSchema>, unknown, RecipeFormValues>({
            resolver: zodResolver(addRecipeSchema),
            defaultValues: {
                title: "",
                description: "",
                difficulty: 'easy',
                ingredients: "",
                instructions: "",
                cookingTime: 1,
                servingSize: 1,
                coverImage: ""
            },
        });
    const onSubmit = form.handleSubmit(async (values) => {
        try {
            const response = await addRecipeApi(values) as respones;
            if (response?.status === "success") {

                showToast({
                    type: "success",
                    description: feedbackT("addSuccess"),
                })
                router.refresh()
                router.push("/dashboard/recipes")
                form.reset()
            } else {
                showToast({
                    type: "error",
                    description: feedbackT("addFailure"),
                });
            }
        } catch {
            form.setError("root", {
                message: feedbackT("addError"),
            });
        }
    })
    return { form, onSubmit };
}