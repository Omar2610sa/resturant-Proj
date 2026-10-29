"use client";

import { DataTable } from "@/components/data-table/DataTable";
import { User } from "@/feature/auth/types";
import { usersColumns } from "./users-columns";

export function UserTable({ users }: { users: User[] }) {
    return <DataTable columns={usersColumns} data={users} />;
}