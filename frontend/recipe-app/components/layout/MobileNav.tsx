"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { DarkModeToggle } from "../DarkMode";
import Logo from "../Logo";
import { cn } from "cn";
import LangSwitcher from "../shared/lang/LangSwitcher";
import { usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Cookies from "js-cookie"
interface MobileNavProps {
    links: { title: string; link: string }[];
    children: React.ReactNode;
}
export default function MobileNav({ links, children }: MobileNavProps) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const t = useTranslations("Navigation");
    const isRtl = Cookies.get("NEXT_LOCALE") === 'ar'

    return (
        <div className="md:hidden flex items-center gap-2">
            <LangSwitcher />
            <DarkModeToggle />
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger>
                    <div aria-label={t("menu")} >
                        <Menu className="relative flex h-10 w-10 items-center justify-center rounded-lg border bg-background p-2 text-sm transition-all hover:bg-accent/50" />
                    </div>
                </SheetTrigger>
                <SheetContent
                    side={isRtl ? "right" : "left"}
                    showCloseButton={false}
                    className="flex w-72 flex-col gap-6 p-6">
                    <SheetTitle>
                        <Logo />
                    </SheetTitle>
                    <nav className="flex flex-col gap-1">
                        {links.map((item) => {
                            const isActive = item.link === "/"
                                ? pathname === item.link
                                : pathname.startsWith(item.link);
                            return (
                                <Link
                                    key={item.title}
                                    href={item.link}
                                    onClick={() => setOpen(false)}
                                    className={cn(
                                        "flex items-center gap-3 rounded-xl px-4 py-3 text-xl font-bold transition-colors",
                                        isActive
                                            ? "bg-primary/10 text-primary"
                                            : " hover:bg-muted hover:text-foreground",
                                    )}
                                >
                                    {item.title}
                                </Link>
                            )
                        })}
                    </nav>

                    <div
                        className="mt-auto flex flex-col gap-2 border-t pt-4"
                        onClick={(e) => {
                            if ((e.target as HTMLElement).closest("a")) setOpen(false);
                        }}
                    >
                        {children}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}