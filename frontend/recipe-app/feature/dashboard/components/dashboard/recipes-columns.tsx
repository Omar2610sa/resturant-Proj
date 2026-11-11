"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { useLocale, useTranslations } from "next-intl";
import ImagePreviewCell from "@/components/shared/ImagePreviewCell";
import TableActions from "@/components/data-table/TableActions";
import type { Recipe } from "../../../recipes/types";
import { DifficultyBadge } from "./DifficultyCell";

function RecipeColumnHeader({
    messageKey,
}: {
    messageKey: "image" | "title" | "cookingTime" | "difficulty" | "createdAt" | "actions";
}) {
    const t = useTranslations("Dashboard.recipes.table");
    return t(messageKey);
}

function RecipeCookingTime({ count }: { count: number }) {
    const t = useTranslations("Recipes.card");
    return t("cookingTime", { count });
}

function RecipeCreatedAt({ value }: { value: string }) {
    const locale = useLocale();
    const date = new Date(value);
    return new Intl.DateTimeFormat(locale === "ar" ? "ar-EG" : "en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(date);
}

export const recipesColumns: ColumnDef<Recipe, unknown>[] = [
    {
        accessorKey: "coverImage",
        header: () => <RecipeColumnHeader messageKey="image" />,
        cell: ({ row }) => (
            <ImagePreviewCell
                coverImage={row.original.coverImage}
                alt={row.original.title}
            />
        ),
    },
    {
        accessorKey: "title",
        header: () => <RecipeColumnHeader messageKey="title" />,
        cell: ({ row }) => (
            <p className="font-extrabold">{row.original.title}</p>
        ),
    },
    {
        accessorKey: "cookingTime",
        header: () => <RecipeColumnHeader messageKey="cookingTime" />,
        cell: ({ row }) => (
            <RecipeCookingTime count={row.original.cookingTime} />
        ),
    },
    {
        accessorKey: "difficulty",
        header: () => <RecipeColumnHeader messageKey="difficulty" />,
        cell: ({ row }) => (
            <div className="mx-auto">
                <DifficultyBadge difficulty={row.original.difficulty} />
            </div>
        ),
    },
    {
        accessorKey: "createdAt",
        header: () => <RecipeColumnHeader messageKey="createdAt" />,
        cell: ({ row }) => (
            <RecipeCreatedAt value={row.original.createdAt} />
        ),
    },
    {
        accessorKey: "_id",
        header: () => <RecipeColumnHeader messageKey="actions" />,
        cell: ({ row }) => (
            <TableActions
                isDelete
                edit
                editHref="recipes"
                endpoint="recipe"
                itemName="recipe"
                itemId={row.original._id}
            />
        ),
    },
];
