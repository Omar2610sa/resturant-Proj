import { z } from "zod";

export const addRecipeSchema = z.object({
    title: z
        .string()
        .min(3, "عنوان الوصفة لازم يكون 3 أحرف على الأقل")
        .max(100, "عنوان الوصفة مينفعش يزيد عن 100 حرف"),

    description: z
        .string()
        .min(10, "الوصف المختصر لازم يكون 10 أحرف على الأقل")
        .max(250, "الوصف المختصر مينفعش يزيد عن 250 حرف"),

    ingredients: z
        .string()
        .min(5, "اكتب مكونات الوصفة"),

    instructions: z
        .string()
        .min(10, "طريقة التحضير لازم تكون 10 أحرف على الأقل"),

    cookingTime: z
        .number("مدة الطهي لازم تكون رقم")
        .positive("مدة الطهي لازم تكون أكبر من صفر")
        .int("مدة الطهي لازم تكون عدد صحيح"),

    difficulty: z.enum(
        ["easy", "medium", "hard"],
        "اختار مستوى صعوبة الوصفة"
    ),

    coverImage: z.preprocess(
        (value) => {
            if (value instanceof FileList) {
                return value.item(0) ?? undefined;
            }

            return value;
        },
        z
            .file({ error: "اختار صورة الوصفة" })
            .mime(["image/jpeg", "image/png", "image/webp"], "صيغة الصورة غير مدعومة")
            .max(5 * 1024 * 1024, "حجم الصورة لازم يكون أقل من 5MB")
    ),
});

export type RecipeFormValues = z.infer<typeof addRecipeSchema>;