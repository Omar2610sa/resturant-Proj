import DashboardSectionsTitle from "@/components/dashboard/layout/DashboardSectionsTitle";
import { getRecipes } from "../../../recipes/services/recipes.api";
import { RecipesTable } from "./RecipesTable";
import { searchParams } from "@/types";
import PaginationRouter from "@/components/Pagination";
import { getTranslations } from "next-intl/server";

export async function RecipesTableSection({ searchParams }: searchParams) {
  const t = await getTranslations("Dashboard.recipes");
  const params = await searchParams;
  const page = Math.max(1, Number(params.page) || 1);
  const search = params.search?.trim() || undefined;
  const { data } = await getRecipes({ page, search ,limit:6});

  return (
    <div className="flexSection">
      <DashboardSectionsTitle
        title={t("title")}
        description={t("description")}
        add
        addPath="recipes/add"
        nameAdd={t("new")}
      />
      <RecipesTable recipes={data.recipes} />
      <PaginationRouter pagination={data.pagination} />
    </div>
  )
}