import { useStatusToast } from "@/hooks/use-status-toast";
import { useRouter } from "next/navigation";
import { addRecipeApi } from "../services/addRecipe.api";
import { respones } from "@/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addRecipeSchema, RecipeFormValues } from "../schema/recipe.schema";
import type { z } from 'zod';


export function useAddRecipe() {
    const { showToast } = useStatusToast();
    const router = useRouter();
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
                    description: "تم إضافة الوصفة بنجاح",
                })
                router.refresh()
                router.push("/dashboard/recipes")
                form.reset()
            } else {
                showToast({
                    type: "error",
                    description: "فشل في إضافة الوصفة وحاول مرة تانية",
                });
            }
        } catch {
            form.setError("root", {
                message: "حصل خطأ أثناء تسجيل الدخول، حاول مرة تانية",
            });
        }
    })
    return { form, onSubmit };
}