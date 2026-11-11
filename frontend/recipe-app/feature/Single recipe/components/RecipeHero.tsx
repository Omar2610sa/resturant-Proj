import Image from "next/image";
import { Calendar, Clock, User } from "lucide-react";
import { Recipe } from "../../recipes/types";
import { getImageUrl } from "@/lib/image";
import { difficultyConfig } from "../../recipes/config/difficultyConfig";
import { getLocale, getTranslations } from "next-intl/server";

export default async function RecipeHero({ recipe }: { recipe: Recipe }) {
    const t = await getTranslations("RecipeDetail.hero");
    const recipesT = await getTranslations("Recipes");
    const locale = await getLocale();
    const ImageUrl = getImageUrl(recipe.coverImage)
    const date = new Date(recipe.createdAt);
    const formattedDate = date.toLocaleDateString(locale === "ar" ? "ar-EG" : "en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const difficult = difficultyConfig[recipe.difficulty];

    return (
        <section className="relative overflow-hidden bg-primary/5 ">
            <div className=" grid container items-center gap-15 lg:grid-cols-2 ">
                {/* Photo */}
                <div className="relative mx-auto w-full ">
                    <div className="absolute -bottom-5 -left-5 h-full w-full rounded-[34px] border-2 border-primary/40" />
                    <div className="relative  overflow-hidden rounded-2xl bg-muted shadow-2xl h-96">
                        {recipe.coverImage ? (
                            <Image
                                src={ImageUrl ?? ''}
                                alt={recipe.title}
                                fill

                                className="object-cover"
                            />
                        ) : (
                            <div className="h-full w-full bg-muted" aria-hidden="true" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                    </div>
                </div>
                <div className="relative z-10 space-y-5">
                    <div className="space-y-1">
                        <span className="text-xl font-bold text-primary block">
                            {t("recipeOfTheDay")}
                        </span>
                        {
                            recipe.title && (
                                <h1 className=" text-5xl font-black leading-16 sm:leading-20 text-foreground sm:text-6xl">
                                    {recipe.title}
                                </h1>
                            )
                        }
                    </div>
                    {recipe.description && (
                        <p className=" text-xl   text-muted-foreground">
                            {recipe.description}
                        </p>
                    )}
                    <div className="flex flex-wrap gap-3">
                        {recipe.cookingTime && (
                            <span className="flex items-center gap-2 rounded-xl border border-accent bg-background px-4 py-3 text-sm font-extrabold  shadow-sm">
                                <Clock className="size-5 text-primary" />
                                {t("cookingTime", { count: recipe.cookingTime })}
                            </span>
                        )}
                        {recipe.servingSize && (
                            <span className="flex items-center gap-2 rounded-xl border border-accent bg-background px-4 py-3 text-sm font-extrabold  shadow-sm">
                                <User className="size-5 text-primary" />
                                {t("serving", { count: recipe.servingSize })}
                            </span>
                        )}
                        {recipe.createdAt && (
                            <span className="flex items-center gap-2 rounded-xl border border-accent bg-background px-4 py-3 text-sm font-extrabold  shadow-sm">
                                <Calendar className="size-5 text-primary" />
                                {t("published", { date: formattedDate })}
                            </span>
                        )}
                        {recipe.difficulty && (
                            <span
                                className={`flex items-center gap-2 rounded-xl  px-4 py-3 text-sm font-extrabold  shadow-sm ${difficult.className}`}
                            >
                                {recipesT(`difficulty.${recipe.difficulty}`)}
                            </span>
                        )}
                    </div>
                </div>

            </div>
        </section>
    )
}
