import { Plus } from "lucide-react";
import Link from "next/link";
import SerchFilter from "../SerchFilter";

export default function DashboardSectionsTitle({
    title,
    description,
    add,
    nameAdd,
    addPath,
    search,
    searchColumnId,
    searchPlaceHolder
}: {
    title: string;
    description?: string;
    add?: boolean
    nameAdd?: string
    addPath?: string
    search?: boolean
    searchPlaceHolder?: string
    searchColumnId?: string
}) {
    return (
        <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
            <div>
                <h2 className="text-3xl font-black">
                    {title}
                </h2>
                {description && (
                    <p className="mt-1 text-lg text-foreground">{description}</p>
                )}
            </div>
            {
                add && (
                    <Link
                        href={`/dashboard/${addPath}`}
                        className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-extrabold text-white">
                        <Plus /> {nameAdd}
                    </Link>
                )}

            {/* Filters */}
            {search && searchColumnId && (
                <SerchFilter
                    placeholder={searchPlaceHolder} />
            )}
        </div>
    );
}
