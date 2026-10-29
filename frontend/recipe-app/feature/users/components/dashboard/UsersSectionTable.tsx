import DashboardSectionsTitle from "@/components/dashboard/layout/DashboardSectionsTitle";
import { getUsers } from "../../services/users.api";
import { searchParams } from "@/types";
import { UserTable } from "./UsersTable";
import PaginationRouter from "@/components/Pagination";




export async function UsersSectionTable({ searchParams }: searchParams) {
  const params = await searchParams;
  const page = Math.max(1, Number(params.page) || 1);
  const search = params.search?.trim() || undefined;

  const { data } = await getUsers({ page, search });

  return (
    <div className="flexSection">
      <DashboardSectionsTitle
        title="المستخدمون"
        description="إدارة حسابات مستخدمي الموقع."
        search
        searchPlaceHolder="إبحث عن مستخدم"
        searchColumnId="2"
      />
      <UserTable users={data.users} />
      <PaginationRouter pagination={data.pagination} />
    </div>
  )
}