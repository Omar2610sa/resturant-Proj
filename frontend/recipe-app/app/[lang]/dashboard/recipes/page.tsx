import { DataTableSkeleton } from "@/components/data-table/DataTableSkeleton";
import { RecipesTableSection } from "@/feature/dashboard/components/dashboard/RecipeseSectionTable";
import { searchParams } from "@/types";
import { connection } from "next/server";
import { Suspense } from "react";
import { getTranslations } from "next-intl/server";


export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const t = await getTranslations({
        locale: lang,
        namespace: "Dashboard.metadata",
    });
    return {
        title: t("recipesTitle"),
        description: t("descriptionRecipes"),
    };
}

async function RecipesPageContent({ searchParams }: searchParams) {
  await connection();
  return <RecipesTableSection searchParams={searchParams} />;
}

export default function page({ searchParams }: searchParams) {
  return (
    <section>
      <Suspense fallback={<DataTableSkeleton columns={5} rows={5} />}>
        <RecipesPageContent searchParams={searchParams} />
      </Suspense>
    </section>
  );
}
