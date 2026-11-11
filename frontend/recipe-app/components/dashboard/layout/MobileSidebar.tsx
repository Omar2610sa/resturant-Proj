"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useTranslations } from "next-intl";
import Cookies from "js-cookie"

export function MobileSidebar({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    const t = useTranslations("Dashboard.navigation");
    const isRtl = Cookies.get("NEXT_LOCALE") === 'ar'
    return (
        <Sheet open={open} onOpenChange={setOpen} >
            <SheetTrigger>
                <div className="relative flex size-10  md:hidden items-center justify-center rounded-lg border bg-background p-2 text-sm transition-all hover:bg-accent/50"
                    aria-label={t("mobileOpen")}
                    >
                    <Menu className="size-5" />
                </div>
            </SheetTrigger>

            <SheetContent side={isRtl ? "right" : "left"} className="w-72 p-0" showCloseButton={false}>
                <SheetTitle className="sr-only">{t("mobileTitle")}</SheetTitle>
                <SheetDescription className="sr-only">
                    {t("mobileDescription")}
                </SheetDescription>

                <div
                    className="h-full"
                    onClick={(e) => {
                        if ((e.target as HTMLElement).closest("a")) setOpen(false);
                    }}
                >
                    {children}
                </div>
            </SheetContent>
        </Sheet>
    );
}