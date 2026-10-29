import DashboardSectionsTitle from "@/components/dashboard/layout/DashboardSectionsTitle";
import { getRecipes } from "../../services/recipes.api";
import { RecipesTable } from "./RecipesTable";
import { searchParams } from "@/types";
import PaginationRouter from "@/components/Pagination";



export async function RecipesTableSection({ searchParams }: searchParams) {
  const params = await searchParams;
  const page = Math.max(1, Number(params.page) || 1);
  const search = params.search?.trim() || undefined;
  const { data } = await getRecipes({ page, search ,limit:6});

  return (
    <div className="flexSection">
      <DashboardSectionsTitle
        title="إدارة الوصفات"
        description="أضف الوصفات وعدّل محتواها من مكان واحد."
        add
        addPath="recipes/add"
        nameAdd="وصفة جديدة"
      />
      <RecipesTable recipes={data.recipes} />
      <PaginationRouter pagination={data.pagination} />
    </div>
  )
}