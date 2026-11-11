"use client";

import Link from "next/link"
import { TableActionsProps } from "@/types"
import { Pen, Trash } from "lucide-react"
import { useDelete } from "@/utils/deleteAction";
import { useTranslations } from "next-intl";

const TableActions = ({
    itemId,
    edit = false,
    editHref,
    isDelete = false,
    itemName,
    endpoint = "/dashboard/admin/slider",
}: TableActionsProps) => {
    const t = useTranslations("Dashboard.table");
    const { handleDelete } = useDelete({
        name: itemName ?? "recipe",
        endpoint,
        itemId: String(itemId)
    });
    return (
        <div className="flex gap-2 justify-end md:items-center md:justify-center">
            {edit && (
                <Link
                    href={`/dashboard/${editHref}/edit/${itemId}`}
                    aria-label={t("edit")}
                    title={t("edit")}
                    className="grid size-9 place-items-center rounded-lg text-[#6c655e] hover:bg-primary/10 hover:text-primary"
                >
                    <Pen className="size-5" />
                </Link>
            )}
            {
                isDelete && (
                    <button
                        type="button"
                        aria-label={t("delete")}
                        title={t("delete")}
                        onClick={handleDelete}
                        className="grid size-9 place-items-center rounded-lg text-red-900 hover:bg-red-200/60"
                    >
                        <Trash className="size-5" />
                    </button>
                )
            }
        </div>
    )
}

export default TableActions