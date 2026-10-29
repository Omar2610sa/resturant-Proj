"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Pagination } from "@/types";

export default function PaginationRouter({ pagination }: { pagination: Pagination }) {
    const { currentPage, totalPages, hasNextPage, hasPrevPage } = pagination;
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    if (totalPages <= 1) return null;

    const goToPage = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", String(page));
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="mt-10 flex items-center justify-center gap-2">
            {
                hasPrevPage && (
                    <Button
                        variant="outline"
                        disabled={!hasPrevPage}
                        onClick={() => goToPage(currentPage - 1)}
                        className="p-5 text-lg"
                    >
                        <ArrowRight className="size-4" />
                        السابق
                    </Button>
                )
            }

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                    key={page}
                    size="icon"
                    variant={page === currentPage ? "default" : "outline"}
                    onClick={() => goToPage(page)}
                    className="p-5 text-lg"
                >
                    {page}
                </Button>
            ))}
            {
                hasNextPage && (
                    <Button
                        variant="outline"
                        disabled={!hasNextPage}
                        onClick={() => goToPage(currentPage + 1)}
                        className="p-5 text-lg"
                    >
                        التالي
                        <ArrowLeft className="size-4" />
                    </Button>
                )
            }
        </div>
    );
}