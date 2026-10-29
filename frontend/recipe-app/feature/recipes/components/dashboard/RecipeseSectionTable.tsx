import DashboardSectionsTitle from "@/components/dashboard/layout/DashboardSectionsTitle";
import { getRecipes } from "../../services/recipes.api";
import { RecipesTable } from "./RecipesTable";

type Props = {
  searchParams: Promise<{ page?: string; search?: string }>;
};

export async function RecipesTableSection({ searchParams }: Props) {
  const params = await searchParams;
  const page = Math.max(1, Number(params.page) || 1);
  const search = params.search?.trim() || undefined;
  const { data } = await getRecipes({ page, search });

  return (
    <div className="flexSection">
      <DashboardSectionsTitle
        title="إدارة الوصفات"
        description="أضف الوصفات وعدّل محتواها من مكان واحد."
        add
        nameAdd="وصفة جديدة"
      />
      <RecipesTable recipes={data.recipes} />;
    </div>
  )
}