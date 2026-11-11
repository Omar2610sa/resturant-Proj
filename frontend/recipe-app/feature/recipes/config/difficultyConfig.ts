import { Recipe } from "../types";

export const difficultyConfig: Record<
    Recipe["difficulty"],
    { className: string }
> = {
    easy: { className: "bg-green-100 text-green-800" },
    medium: { className: "bg-yellow-100 text-yellow-800" },
    hard: { className: "bg-red-100 text-red-800" },
};