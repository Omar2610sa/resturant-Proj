import { DataTableSkeleton } from "@/components/data-table/DataTableSkeleton";
import { UsersSectionTable } from "@/feature/users/components/dashboard/UsersSectionTable";
import { searchParams } from "@/types";
import { Suspense } from "react";

export default function page({ searchParams }: searchParams) {
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
