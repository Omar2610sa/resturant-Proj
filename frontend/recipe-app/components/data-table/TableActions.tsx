import Link from "next/link"
import { TableActionsProps } from "@/types"
import { Pen, Trash } from "lucide-react"
import { useDelete } from "@/utils/deleteAction";



const TableActions = ({
    itemId,
    edit = false,
    editHref,
    isDelete = false,
    itemName = "item",
    endpoint = "/dashboard/admin/slider",
    onDeleteSuccess
}: TableActionsProps) => {
    const { handleDelete } = useDelete({
        name: itemName,
        endpoint,
        itemId: String(itemId)
    });


    return (
        <div className="flex gap-2 items-center justify-center">
            {edit && (
                <Link
                    href={`/${editHref}/${itemId}`}
                    className="grid size-9 place-items-center rounded-lg text-[#6c655e] hover:bg-primary/10 hover:text-primary"
                >
                    <Pen className="size-5" />
                </Link>
            )}
            {
                isDelete && (
                    <div
                        onClick={handleDelete}
                        className="grid size-9 place-items-center rounded-lg text-red-900 hover:bg-red-200/60"
                    >
                        <Trash className="size-5" />
                    </div>
                )
            }
        </div>
    )
}

export default TableActions