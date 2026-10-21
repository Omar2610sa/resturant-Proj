import { Recipe } from "../types";

export const difficultyConfig: Record<
    Recipe["difficulty"],
    { label: string; className: string }
> = {
    easy: { label: "سهل", className: "bg-green-100 text-green-800" },
    medium: { label: "متوسط", className: "bg-yellow-100 text-yellow-800" },
    hard: { label: "صعب", className: "bg-red-100 text-red-800" },
};