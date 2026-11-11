import { z } from "zod";

export type RecipeValidationMessages = {
    imageRequired: string;
    imageType: string;
    imageSize: string;
    titleMin: string;
    titleMax: string;
    descriptionMin: string;
    descriptionMax: string;
    ingredientsMin: string;
    instructionsMin: string;
    cookingTimeNumber: string;
    cookingTimePositive: string;
    cookingTimeInteger: string;
    servingSizeNumber: string;
    servingSizePositive: string;
    servingSizeInteger: string;
    difficultyRequired: string;
};

const toFile = (value: unknown) => {
    if (value instanceof FileList) return value.item(0) ?? undefined;
    if (value instanceof File) return value;
    return undefined;
};

const createImageSchema = (messages: RecipeValidationMessages) =>
    z
        .file({ error: messages.imageRequired })
        .mime(["image/jpeg", "image/png", "image/webp"], messages.imageType)
        .max(5 * 1024 * 1024, messages.imageSize);

const createRecipeBaseSchema = (messages: RecipeValidationMessages) =>
    z.object({
        title: z
            .string()
            .trim()
            .min(3, messages.titleMin)
            .max(100, messages.titleMax),
        description: z
            .string()
            .trim()
            .min(10, messages.descriptionMin)
            .max(150, messages.descriptionMax),
        ingredients: z.string().trim().min(5, messages.ingredientsMin),
        instructions: z.string().trim().min(10, messages.instructionsMin),
        cookingTime: z
            .number(messages.cookingTimeNumber)
            .positive(messages.cookingTimePositive)
            .int(messages.cookingTimeInteger),
        servingSize: z
            .number(messages.servingSizeNumber)
            .positive(messages.servingSizePositive)
            .int(messages.servingSizeInteger),
        difficulty: z.enum(
            ["easy", "medium", "hard"],
            messages.difficultyRequired,
        ),
    });

export const createAddRecipeSchema = (messages: RecipeValidationMessages) =>
    createRecipeBaseSchema(messages).extend({
        coverImage: z.preprocess(toFile, createImageSchema(messages)),
    });

export const createEditRecipeSchema = (messages: RecipeValidationMessages) =>
    createRecipeBaseSchema(messages).extend({
        coverImage: z.preprocess(
            toFile,
            createImageSchema(messages).optional(),
        ),
    });

export type RecipeFormValues = z.infer<ReturnType<typeof createAddRecipeSchema>>;
export type EditRecipeFormValues = z.infer<ReturnType<typeof createEditRecipeSchema>>;
export type EditRecipeInitialValues = Omit<EditRecipeFormValues, "coverImage">;
