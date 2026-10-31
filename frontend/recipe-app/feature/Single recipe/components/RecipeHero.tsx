import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { Recipe } from "../../recipes/types";
import { getImageUrl } from "@/lib/image";
import { difficultyConfig } from "../../recipes/config/difficultyConfig";

export default function RecipeHero({ recipe }: { recipe: Recipe }) {
    const ImageUrl = getImageUrl(recipe.coverImage)
    const date = new Date(recipe.createdAt);
    const formattedDate = date.toLocaleDateString("ar-EG", {
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
                            وصفة اليوم
                        </span>
                        <h1 className=" text-5xl font-black leading-16 sm:leading-20 text-foreground sm:text-6xl">
                            {recipe.title}
                        </h1>
                    </div>
                    <p className=" text-xl   text-muted-foreground">
                        {recipe.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <span className="flex items-center gap-2 rounded-xl border border-[#eadfd5] bg-white px-4 py-3 text-sm font-extrabold text-black shadow-sm">
                            <Clock className="size-5 text-primary" />
                            30 دقيقة
                        </span>
                        <span className="flex items-center gap-2 rounded-xl border border-[#eadfd5] bg-white px-4 py-3 text-sm font-extrabold text-black shadow-sm">
                            <Calendar className="size-5 text-primary" />
                            نشر في : {formattedDate}
                        </span>
                        <span
                            className={`rounded-xl py-3 px-4 text-sm font-extrabold shadow-sm ${difficult.className}`}
                        >
                            {difficult.label}
                        </span>
                    </div>
                </div>

            </div>
        </section>
    )
}
