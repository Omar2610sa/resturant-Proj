"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { DarkModeToggle } from "../DarkMode";
import Logo from "../Logo";

interface MobileNavProps {
    links: { title: string; link: string }[];
    children: React.ReactNode;
}
export default function MobileNav({ links, children }: MobileNavProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden flex items-center gap-2">
            <DarkModeToggle />
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger>
                    <div aria-label="القائمة">
                        <Menu className="size-6" />
                    </div>
                </SheetTrigger>
                <SheetContent
                    side="right"
                    showCloseButton={false}
                    className="flex w-72 flex-col gap-6 p-6">
                    <SheetTitle>
                        <Logo />
                    </SheetTitle>

                    <nav className="flex flex-col gap-1">
                        {links.map((item) => (
                            <Link
                                key={item.title}
                                href={item.link}
                                onClick={() => setOpen(false)}
                                className="rounded-lg px-3 py-2.5 text-lg font-medium duration-200 hover:bg-accent hover:text-primary"
                            >
                                {item.title}
                            </Link>
                        ))}
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