import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

type DataTableSkeletonProps = {
    columns?: number;
    rows?: number;
};

export function DataTableSkeleton({
    columns = 4,
    rows = 5,
}: DataTableSkeletonProps) {
    return (
        <>
            {/* ================= Desktop / Tablet: جدول ================= */}
            <div className="hidden overflow-hidden rounded-2xl border bg-card sm:block">
                <Table className="text-center">
                    <TableHeader className="bg-muted/50">
                        <TableRow className="bg-tableHead">
                            {Array.from({ length: columns }).map((_, index) => (
                                <TableHead key={index} className="px-4 py-3">
                                    <Skeleton className="mx-auto h-5 w-20" />
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {Array.from({ length: rows }).map((_, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {Array.from({ length: columns }).map((_, colIndex) => (
                                    <TableCell key={colIndex} className="p-5">
                                        <Skeleton
                                            className={`mx-auto h-5 ${
                                                colIndex === 0 ? "w-28" : "w-20"
                                            }`}
                                        />
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <div className="space-y-3 sm:hidden">
                {Array.from({ length: rows }).map((_, rowIndex) => (
                    <div
                        key={rowIndex}
                        className="overflow-hidden rounded-xl border bg-card shadow-sm"
                    >
                        {Array.from({ length: columns }).map((_, colIndex) => (
                            <div
                                key={colIndex}
                                className="flex items-center justify-between gap-3 border-b px-4 py-3 last:border-b-0"
                            >
                                <Skeleton className="h-3 w-16" />

                                <Skeleton
                                    className={`h-4 ${
                                        colIndex === 0 ? "w-28" : "w-20"
                                    }`}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}