"use client";

import { DataTable } from "@/components/data-table/DataTable";
import { User } from "@/feature/auth/types";
import { usersColumns } from "./dashboard/users-columns";

export function UserTable({ users }: { users: User[] }) {
    return <DataTable columns={usersColumns} data={users} />;
}