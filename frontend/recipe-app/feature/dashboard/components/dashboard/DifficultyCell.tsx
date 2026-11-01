import { difficultyConfig } from "../../../recipes/config/difficultyConfig";



export function DifficultyBadge({ difficulty }: { difficulty: keyof typeof difficultyConfig }) {
    const difficult = difficultyConfig[difficulty];

    return (
        <span
            className={`rounded-full py-3 px-4 text-sm font-extrabold shadow-sm ${difficult.className}`}
        >
            {difficult.label}
        </span>
    );
}