import { DataTableSkeleton } from "@/components/data-table/DataTableSkeleton";
import { RecipesTableSection } from "@/feature/dashboard/components/dashboard/RecipeseSectionTable";
import { searchParams } from "@/types";
import { connection } from "next/server";
import { Suspense } from "react";
import { getTranslations } from "next-intl/server";


export async function generateMetadata() {
    const t = await getTranslations("Dashboard.metadata");
    return {
        title: t("recipesTitle"),
        description: t("descriptionRecipes"),
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
