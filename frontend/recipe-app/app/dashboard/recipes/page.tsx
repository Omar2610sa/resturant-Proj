import { DataTableSkeleton } from "@/components/data-table/DataTableSkeleton";
import { RecipesTableSection } from "@/feature/dashboard/components/dashboard/RecipeseSectionTable";
import { searchParams } from "@/types";
import { connection } from "next/server";
import { Suspense } from "react";


export async function generateMetadata() {
    return {
        title: "مَذاق | إدارة الوصفات",
        description: "مَذاق للوصفات الشهية والعربية الأصيلة",
    };
}

export default async function page({ searchParams }: searchParams) {
  await connection();
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
