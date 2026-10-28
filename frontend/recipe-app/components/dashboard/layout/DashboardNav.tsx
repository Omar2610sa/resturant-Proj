"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { dashboardNav } from "@/lib/dashboard-nav";

export function DashboardNav() {
    const pathname = usePathname();

    return (
        <nav aria-label="قائمة لوحة التحكم" className="flex-1 overflow-y-auto p-3">
            <ul className="space-y-1">
                {dashboardNav.map(({ href, label, icon: Icon }) => {
                    const isActive =
                        href === "/dashboard"
                            ? pathname === href
                            : pathname.startsWith(href);

                    return (
                        <li key={href}>
                            <Link
                                href={href}
                                aria-current={isActive ? "page" : undefined}
                                className={cn(
                                    "flex items-center gap-3 rounded-xl px-4 py-3 text-md font-bold transition-colors",
                                    isActive
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                                )}
                            >
                                <Icon className="size-5" />
                                {label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}