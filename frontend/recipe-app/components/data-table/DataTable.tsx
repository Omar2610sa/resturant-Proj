"use client";

import {
    type ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useTranslations } from "next-intl";

type DataTableProps<TData, TValue> = {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    emptyMessage?: string;
};

export function DataTable<TData, TValue>({
    columns,
    data,
    emptyMessage,
}: DataTableProps<TData, TValue>) {
    const t = useTranslations("Dashboard.table");
    const message = emptyMessage ?? t("noData");
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    const rows = table.getRowModel().rows;

    return (
        <>
            {/* ================= Desktop / Tablet: جدول ================= */}
            <div className="hidden overflow-hidden rounded-2xl border bg-card sm:block">
                <Table className="text-center">
                    <TableHeader className="bg-muted/50">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow
                                key={headerGroup.id}
                                className="bg-tableHead font-extrabold text-[#716a63]"
                            >
                                {headerGroup.headers.map((header) => (
                                    <TableHead
                                        key={header.id}
                                        className="px-4 py-3 text-center text-md font-bold"
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext(),
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>

                    <TableBody>
                        {rows.length ? (
                            rows.map((row) => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id} className="p-5">
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-32 text-center text-muted-foreground"
                                >
                                    {message}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="space-y-3 sm:hidden">
                {rows.length ? (
                    rows.map((row) => (
                        <div
                            key={row.id}
                            className="overflow-hidden rounded-xl border bg-card shadow-sm"
                        >
                            {row.getVisibleCells().map((cell) => {
                                const header = cell.column.columnDef.header;
                                const label =
                                    typeof header === "string"
                                        ? header
                                        : flexRender(header, {
                                            column: cell.column,
                                            header: undefined as never,
                                            table,
                                        });
                                return (
                                    <div
                                        key={cell.id}
                                        className="flex items-center justify-between gap-3 border-b px-4 py-3 last:border-b-0"
                                    >
                                        <span className="shrink-0 text-xs font-medium text-muted-foreground">
                                            {label}
                                        </span>
                                        <div className="min-w-0 flex-1 text-end text-sm text-foreground">
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))
                ) : (
                    <div className="flex min-h-40 w-full items-center justify-center rounded-xl border border-dashed bg-card py-10">
                        <h3 className="text-sm font-medium text-muted-foreground">
                            {message}
                        </h3>
                    </div>
                )}
            </div>
        </>
    );
}