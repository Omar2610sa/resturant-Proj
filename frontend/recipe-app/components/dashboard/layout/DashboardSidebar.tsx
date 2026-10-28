import Link from "next/link";
import { DashboardUserCard } from "./DashboardUserCard";
import { DashboardNav } from "./DashboardNav";
import Logo from "@/components/Logo";

export function DashboardSidebar() {
    return (
        <div className="flex h-full flex-col">
            <div className="flex h-20 shrink-0 items-center border-b px-5">
                <Logo />
            </div>
            <DashboardNav />
            <DashboardUserCard />
        </div>
    );
}