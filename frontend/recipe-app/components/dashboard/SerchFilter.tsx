"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { useTranslations } from "next-intl";
import Cookies from "js-cookie"

export default function SearchFilter({
    placeholder,
}: {
    placeholder?: string;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const t = useTranslations("Recipes.page");

    const isRtl = Cookies.get("NEXT_LOCALE") === 'ar'

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
            <Search className={`absolute ${isRtl ? "right-3.5" : "left-3.5"} top-1/2 h-4 w-4 -translate-y-1/2 text-[#938c84]`} />
            <Input
                defaultValue={searchParams.get("search") ?? ""}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder={placeholder ?? t("searchPlaceholder")}
                className={`h-11 w-full rounded-xl bg-white ${isRtl ? "pr-10" : "pl-10"}  text-sm`}
            />
        </label>
    );
}