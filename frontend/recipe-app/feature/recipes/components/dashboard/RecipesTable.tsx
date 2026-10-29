"use client";

import { DataTable } from "@/components/data-table/DataTable";
import type { Recipe } from "../../types";
import { recipesColumns } from "./recipes-columns";

export function RecipesTable({ recipes }: { recipes: Recipe[] }) {
    return <DataTable columns={recipesColumns} data={recipes} />;
}