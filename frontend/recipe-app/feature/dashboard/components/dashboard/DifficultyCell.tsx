import { difficultyConfig } from "../../../recipes/config/difficultyConfig";



export function DifficultyBadge({ difficulty }: { difficulty: keyof typeof difficultyConfig }) {
    const difficult = difficultyConfig[difficulty];
    return (
        <span
            className={`rounded-md sm:rounded-full p-1.5 sm:py-3 sm:px-4 text-sm font-extrabold shadow-sm ${difficult.className}`}
        >
            {difficult.label}
        </span>
    );
}