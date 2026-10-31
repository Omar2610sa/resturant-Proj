"use client";
import { useMemo } from "react";
import { ChefHat, ShoppingBasket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Recipe } from "@/feature/recipes/types";

const splitIngredients = (text: string) =>
    text
        .split(/[،,\n]/)
        .map((item) => item.trim().replace(/[.。]$/, "").trim())
        .filter(Boolean);

const splitInstructions = (text: string) =>
    text
        .split(/\.\s+|\.$|\n/)
        .map((step) => step.trim())
        .filter(Boolean);

export default function RecipeDetails({ recipe }: { recipe: Recipe }) {
    const ingredients = useMemo(
        () => splitIngredients(recipe.ingredients),
        [recipe.ingredients]
    );
    const steps = useMemo(
        () => splitInstructions(recipe.instructions),
        [recipe.instructions]
    );

    return (
        <section className="grid gap-6 lg:grid-cols-3 container">
            <Card className="max-h-fit rounded-2xl shadow-sm lg:sticky lg:top-6">
                <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2 text-2xl font-black">
                            <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <ShoppingBasket className="size-5" />
                            </span>
                            المكونات
                        </CardTitle>
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                            {ingredients.length} عناصر
                        </span>
                    </div>
                </CardHeader>
                <CardContent>
                    <ul className="px-5">
                        {ingredients.map((item, index) => {
                            return (
                                <li key={`${item}-${index}`} className="list-disc text-primary text-xl">
                                    <label
                                        className={cn("flex cursor-pointer items-center text-accent-foreground gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-primary/10",
                                        )}  >
                                        <span
                                            className={cn("text-base font-semibold transition-all")}
                                        >
                                            {item}
                                        </span>
                                    </label>
                                </li>
                            );
                        })}
                    </ul>
                </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-sm lg:col-span-2">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2 text-2xl font-black">
                            <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <ChefHat className="size-5" />
                            </span>
                            طريقة التحضير
                        </CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <ol className="relative">
                        {steps.map((step, index) => {
                            const isLast = index === steps.length - 1;
                            return (
                                <li key={index} className="relative flex gap-4 pb-8 last:pb-0">
                                    {!isLast && (
                                        <span className="absolute right-5 top-11 h-[calc(100%-2.75rem)] w-0.5 -translate-x-1/2 translate-x-1/2 bg-border" />
                                    )}
                                    <span className="z-10 flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-base font-black text-primary-foreground shadow-sm">
                                        {index + 1}
                                    </span>
                                    <div className="flex-1 rounded-xl border bg-muted/30 p-4">
                                        <p className="text-base leading-8 text-foreground/90">
                                            {step}.
                                        </p>
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                </CardContent>
            </Card>
        </section>
    );
}