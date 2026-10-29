import type { ColumnDef } from "@tanstack/react-table";
import { User } from "@/feature/auth/types";
import { RoleBadge } from "./RoleCell";
import TableActions from "@/components/data-table/TableActions";
import { UserRoleCell } from "./UserRoleCell";

export const usersColumns: ColumnDef<User, unknown>[] = [
    {
        accessorKey: "firstName",
        header: "المستخدم",
        cell: ({ row }) => (
            <div>
                {row.original.firstName} {row.original.lastName}
            </div>
        )
    },
    {
        accessorKey: "email",
        header: "البريد الإلكتروني",
        cell: ({ row }) => {
            return (
                <span>
                    {row.original.email}
                </span>
            )
        }
    },
    {
        accessorKey: "role",
        header: "الدور",
        cell: ({ row }) => {
            return (
                <div className="mx-auto">
                    <RoleBadge roles={row.original.role} />
                </div>
            )
        }
    },
    {
        accessorKey: "createdAt", header: "تاريخ التسجيل",
        cell: ({ row }) => {
            const date = new Date(row.original.createdAt);
            const formattedDate = date.toLocaleDateString("ar-EG", {
                day: "numeric",
                month: "long",
                year: "numeric",
            });
            return (
                <span>{formattedDate}</span>
            )
        }
    },
    {
        header: "الدور",
        cell: ({ row }) => (
            <UserRoleCell key={row.original._id} user={row.original} />
        ),
    },
    {
        accessorKey: "_id",
        header: "الإجراءات",
        cell: ({ row }) => {
            return (
                <TableActions
                    isDelete
                    endpoint="users"
                    itemName="المستخدم"
                    itemId={row.original._id} />
            )
        }
    }
];