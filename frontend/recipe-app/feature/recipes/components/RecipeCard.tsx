import { Card, CardContent } from "@/components/ui/card"
import { Recipe } from "../types"
import Image from "next/image"
import { ArrowLeft, TimerIcon } from "lucide-react"
import Link from "next/link";
import { difficultyConfig } from "../config/difficultyConfig";
import { getImageUrl } from "@/lib/image";


export default function RecipeCard({ recipe }: { recipe: Recipe }) {
    const difficulty = difficultyConfig[recipe.difficulty];
    const imageUrl = getImageUrl(recipe.coverImage);
    return (
        <Link href={`/recipes/${recipe._id}`} className="group block h-full">
            <Card className="h-full gap-0 overflow-hidden rounded-2xl border bg-card py-0 shadow-none ring-0 transition-shadow duration-300 group-hover:shadow-lg">
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-muted">
                    {recipe.coverImage ? (
                        <Image
                            src={imageUrl ?? ''}
                            alt={recipe.title}
                            fill
                            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="h-full w-full bg-muted" aria-hidden="true" />
                    )}
                    <span
                        className={`absolute start-4 top-4 rounded-full px-3 py-1 text-sm font-extrabold shadow-sm ${difficulty.className}`}
                    >
                        {difficulty.label}
                    </span>
                </div>

                <CardContent className="flex flex-1 flex-col gap-2 p-5">
                    <h3 className="line-clamp-1 text-2xl font-extrabold text-foreground">
                        {recipe.title}
                    </h3>
                    <p className="line-clamp-2 leading-6 text-muted-foreground">
                        {recipe.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between border-t pt-4">
                        <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                            <TimerIcon className="size-4 text-primary" />
                            {recipe.cookingTime} دقيقة
                        </div>
                        <span className="flex items-center gap-1 text-sm font-extrabold text-primary">
                            عرض الوصفة
                            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                        </span>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
