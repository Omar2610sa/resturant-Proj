import type { ColumnDef } from "@tanstack/react-table";
import { Recipe } from "../../types";
import ImagePreviewCell from "@/components/shared/ImagePreviewCell";
import { DifficultyBadge } from "./DifficultyCell";
import TableActions from "@/components/data-table/TableActions";

export const recipesColumns: ColumnDef<Recipe, unknown>[] = [
    {
        accessorKey: "coverImage",
        header: "الصورة",
        cell: ({ row }) => (
            <ImagePreviewCell
                coverImage={row.original.coverImage}
                alt={row.original.title}
            />
        )
    },
    {
        accessorKey: "title",
        header: "العنوان",
        cell: ({ row }) => {
            return (
                <p className="font-extrabold ">
                    {row.original.title}
                </p>
            )
        }
    },
    {
        accessorKey: "cookingTime",
        header: "مدة التحضير", cell: ({ row }) => {
            return (
                <div>
                    {row.original.cookingTime} دقيقة
                </div>
            )
        }
    },
    {
        accessorKey: "difficulty", header: "الصعوبة",
        cell: ({ row }) => {
            return (
                <div className="mx-auto">
                    <DifficultyBadge difficulty={row.original.difficulty} />
                </div>
            )
        }
    },
    {
        accessorKey: "createdAt", header: "تاريخ الإضافة",
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
        accessorKey: "_id",
        header: "الإجراءات",
        cell: ({ row }) => {
            return (
                <TableActions
                    isDelete
                    edit
                    editHref="recipe"
                    endpoint="recipe"
                    itemName="الوصفة"
                    itemId={row.original._id} />
            )
        }
    }
];