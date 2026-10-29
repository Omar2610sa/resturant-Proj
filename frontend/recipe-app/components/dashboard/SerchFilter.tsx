"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Search } from "lucide-react";
import { Input } from "../ui/input";

export default function SearchFilter({
    placeholder = "ابحث...",
}: {
    placeholder?: string;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams.toString());
        const next = term.trim();

        if (next) params.set("search", next);
        else params.delete("search");
        params.set("page", "1");

        router.replace(`${pathname}?${params.toString()}`);
    }, 400);

    return (
        <label className="relative w-full sm:w-80">
            <Search className="absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#938c84]" />
            <Input
                defaultValue={searchParams.get("search") ?? ""}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder={placeholder}
                className="h-11 w-full rounded-xl bg-white pr-10 pl-4 text-sm"
            />
        </label>
    );
}