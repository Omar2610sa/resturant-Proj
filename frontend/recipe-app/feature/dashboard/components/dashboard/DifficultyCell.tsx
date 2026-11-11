"use client";

import { difficultyConfig } from "../../../recipes/config/difficultyConfig";
import { useTranslations } from "next-intl";

export function DifficultyBadge({ difficulty }: { difficulty: keyof typeof difficultyConfig }) {
    const difficult = difficultyConfig[difficulty];
    const t = useTranslations("Recipes.difficulty");
    return (
        <span
            className={`rounded-md sm:rounded-full p-1.5 sm:py-3 sm:px-4 text-sm font-extrabold shadow-sm ${difficult.className}`}
        >
            {t(difficulty)}
        </span>
    );
}