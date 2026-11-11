import { DataTableSkeleton } from "@/components/data-table/DataTableSkeleton";
import { UsersSectionTable } from "@/feature/users/components/dashboard/UsersSectionTable";
import { searchParams } from "@/types";
import { connection } from "next/server";
import { Suspense } from "react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Dashboard.metadata");
  return {
    title: t("usersTitle"),
    description: t("descriptionRecipes"),
  };
}
export default async function page({ searchParams }: searchParams) {
  await connection();
  return (
    <section >

      <Suspense fallback={<DataTableSkeleton columns={5} rows={5} />}>
        <UsersSectionTable
          searchParams={searchParams}
        />
      </Suspense>
    </section>
  )
}
