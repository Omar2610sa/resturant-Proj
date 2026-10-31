import { z } from "zod";

const imageFile = z
    .file({ error: "اختار صورة الوصفة" })
    .mime(["image/jpeg", "image/png", "image/webp"], "صيغة الصورة غير مدعومة")
    .max(5 * 1024 * 1024, "حجم الصورة لازم يكون أقل من 5MB");

const toFile = (value: unknown) => {
    if (value instanceof FileList) return value.item(0) ?? undefined;
    if (value === "" || value === null) return undefined;
    return value;
};


const recipeBaseSchema = z.object({
    title: z
        .string()
        .trim()
        .min(3, "عنوان الوصفة لازم يكون 3 أحرف على الأقل")
        .max(100, "عنوان الوصفة مينفعش يزيد عن 100 حرف"),

    description: z
        .string()
        .trim()
        .min(10, "الوصف المختصر لازم يكون 10 أحرف على الأقل")
        .max(150, "الوصف المختصر مينفعش يزيد عن 150 حرف"),

    ingredients: z
        .string()
        .trim()
        .min(5, "اكتب مكونات الوصفة"),

    instructions: z
        .string()
        .trim()
        .min(10, "طريقة التحضير لازم تكون 10 أحرف على الأقل"),

    cookingTime: z
        .number("مدة الطهي لازم تكون رقم")
        .positive("مدة الطهي لازم تكون أكبر من صفر")
        .int("مدة الطهي لازم تكون عدد صحيح"),

    difficulty: z.enum(
        ["easy", "medium", "hard"],
        "اختار مستوى صعوبة الوصفة"
    ),
});


export const addRecipeSchema = recipeBaseSchema.extend({
    coverImage: z.preprocess(toFile, imageFile),
});


export const editRecipeSchema = recipeBaseSchema.extend({
    coverImage: z.preprocess(toFile, imageFile.optional()),
});


export type RecipeFormValues = z.infer<typeof addRecipeSchema>;
export type EditRecipeFormValues = z.infer<typeof editRecipeSchema>;

export type EditRecipeInitialValues = Omit<EditRecipeFormValues, "coverImage">;