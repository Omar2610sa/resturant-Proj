import { useForm } from "react-hook-form";
import { editRecipeApi } from "../services/editRecipe.api";
import { EditRecipeFormValues, EditRecipeInitialValues, editRecipeSchema } from "../schema/recipe.schema";
import { useStatusToast } from "@/hooks/use-status-toast";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { respones } from "@/types";
import type { z } from 'zod';


export function useEditRecipe(
    recipeId: string,
    initialValues: EditRecipeInitialValues,
) {
    const { showToast } = useStatusToast();
    const router = useRouter();

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
                    description: "فشل تعديل الوصفة، حاول مرة تانية",
                });
                return;
            }

            showToast({ type: "success", description: "تم تعديل الوصفة بنجاح" });
            router.push("/dashboard/recipes");
            router.refresh();
        } catch {
            form.setError("root", {
                message: "حصل خطأ أثناء حفظ الوصفة، حاول مرة تانية",
            });
        }
    });

    return { form, onSubmit };
}