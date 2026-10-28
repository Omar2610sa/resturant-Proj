import DashboardSectionsTitle from "@/components/dashboard/DashboardSectionsTitle";
import RecipesTableSection from "@/feature/recipes/components/dashboard/RecipesTable";
import { Suspense } from "react";



type Props = {
  searchParams: Promise<{ page?: string; search?: string }>;
};
export default function page({ searchParams }: Props) {
  return (
    <section className=" flexSection">
      <DashboardSectionsTitle
        title="إدارة الوصفات"
        description="أضف الوصفات وعدّل محتواها من مكان واحد."
        add
        nameAdd="وصفة جديدة"
      />

      <Suspense fallback={<p>جاري التحميل...</p>}>
        <RecipesTableSection
          searchParams={searchParams}
        />
      </Suspense>
    </section>
  )
}
