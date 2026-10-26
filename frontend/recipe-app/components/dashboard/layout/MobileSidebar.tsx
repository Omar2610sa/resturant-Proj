"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export function MobileSidebar({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen} >
            <SheetTrigger>
                <div
                    className="size-10 flex justify-center items-center bg-white rounded-xl lg:hidden"
                    aria-label="فتح القائمة"
                >
                    <Menu className="size-5" />
                </div>
            </SheetTrigger>

            <SheetContent side="right" className="w-72 p-0" showCloseButton={false}>
                <SheetTitle className="sr-only">قائمة لوحة التحكم</SheetTitle>
                <SheetDescription className="sr-only">
                    التنقل بين أقسام لوحة التحكم
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