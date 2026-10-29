
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
        <div className="overflow-hidden rounded-2xl border bg-card">
            <Table className="text-center">
                <TableHeader className="bg-muted/50">
                    <TableRow className="bg-tableHead">
                        {Array.from({ length: columns }).map((_, index) => (
                            <TableHead
                                key={index}
                                className="px-4 py-3"
                            >
                                <Skeleton className="mx-auto h-5 w-20" />
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Array.from({ length: rows }).map((_, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {Array.from({ length: columns }).map((_, colIndex) => (
                                <TableCell
                                    key={colIndex}
                                    className="p-5"
                                >
                                    <Skeleton
                                        className={`mx-auto h-5 ${colIndex === 0 ? "w-28" : "w-20"
                                            }`}
                                    />
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
