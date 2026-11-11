"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { useLocale, useTranslations } from "next-intl";
import type { User } from "@/feature/auth/types";
import TableActions from "@/components/data-table/TableActions";
import { RoleBadge } from "./RoleCell";
import { UserRoleCell } from "./UserRoleCell";

function UserColumnHeader({
    messageKey,
}: {
    messageKey: "user" | "email" | "role" | "roleAction" | "createdAt" | "actions";
}) {
    const t = useTranslations("Dashboard.users.table");
    return t(messageKey);
}

function UserCreatedAt({ value }: { value: string }) {
    const locale = useLocale();
    const date = new Date(value);
    return new Intl.DateTimeFormat(locale === "ar" ? "ar-EG" : "en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(date);
}

export const usersColumns: ColumnDef<User, unknown>[] = [
    {
        accessorKey: "firstName",
        header: () => <UserColumnHeader messageKey="user" />,
        cell: ({ row }) => (
            <div>
                {row.original.firstName} {row.original.lastName}
            </div>
        ),
    },
    {
        accessorKey: "email",
        header: () => <UserColumnHeader messageKey="email" />,
        cell: ({ row }) => <span>{row.original.email}</span>,
    },
    {
        accessorKey: "role",
        header: () => <UserColumnHeader messageKey="role" />,
        cell: ({ row }) => (
            <div className="mx-auto">
                <RoleBadge roles={row.original.role} />
            </div>
        ),
    },
    {
        accessorKey: "createdAt",
        header: () => <UserColumnHeader messageKey="createdAt" />,
        cell: ({ row }) => <UserCreatedAt value={row.original.createdAt} />,
    },
    {
        id: "roleAction",
        header: () => <UserColumnHeader messageKey="roleAction" />,
        cell: ({ row }) => (
            <UserRoleCell key={row.original._id} user={row.original} />
        ),
    },
    {
        accessorKey: "_id",
        header: () => <UserColumnHeader messageKey="actions" />,
        cell: ({ row }) => (
            <TableActions
                isDelete
                endpoint="users"
                itemName="user"
                itemId={row.original._id}
            />
        ),
    },
];
