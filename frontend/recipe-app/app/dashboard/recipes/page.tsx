import { DataTableSkeleton } from "@/components/data-table/DataTableSkeleton";
import { RecipesTableSection } from "@/feature/recipes/components/dashboard/RecipeseSectionTable";
import { searchParams } from "@/types";
import { Suspense } from "react";




export default function page({ searchParams }: searchParams) {
  return (
    <section>
      <Suspense fallback={<DataTableSkeleton columns={5} rows={5} />}>
        <RecipesTableSection
          searchParams={searchParams}
        />
      </Suspense>
    </section>
  )
}
