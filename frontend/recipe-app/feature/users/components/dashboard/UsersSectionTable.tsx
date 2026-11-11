import DashboardSectionsTitle from "@/components/dashboard/layout/DashboardSectionsTitle";
import { getUsers } from "../../services/users.api";
import { searchParams } from "@/types";
import { UserTable } from "./UsersTable";
import PaginationRouter from "@/components/Pagination";
import { getTranslations } from "next-intl/server";

export async function UsersSectionTable({ searchParams }: searchParams) {
  const t = await getTranslations("Dashboard.users");
  const params = await searchParams;
  const page = Math.max(1, Number(params.page) || 1);
  const search = params.search?.trim() || undefined;

  const { data } = await getUsers({ page, search });

  return (
    <div className="flexSection">
      <DashboardSectionsTitle
        title={t("title")}
        description={t("description")}
        search
        searchPlaceHolder={t("searchPlaceholder")}
        searchColumnId="2"
      />
      <UserTable users={data.users} />
      <PaginationRouter pagination={data.pagination} />
    </div>
  )
}