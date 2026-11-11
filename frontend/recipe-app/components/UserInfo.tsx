"use client"
import { Home, LayoutDashboard, LogOut, User2Icon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Link from "next/link";
import { useLogout } from "@/feature/auth/utils/logout";
import Cookies from "js-cookie"
import { useTranslations } from "next-intl";

export default function UserInfo() {
    const { handleLogout } = useLogout();
    const userName = Cookies.get("userName")
    const t = useTranslations("Navigation");
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger
                className="flex items-center gap-2 rounded-full border  bg-background py-3 px-5  shadow-sm hover:bg-primary/30 cursor-pointer"
            >
                <span className="grid size-7 place-items-center rounded-full bg-primary/70 text-sm font-black text-white">
                    <User2Icon className="size-4" />
                </span>
                <span className=" text-sm font-extrabold text-accent-foreground sm:flex gap-5">
                    {userName}
                </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" md:w-40" align="center">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Link href='/' className="flex  items-center justify-between gap-3">
                            <Home />
                            {t("profileHome")}
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href='/dashboard' className="flex  items-center justify-between gap-3">
                            <LayoutDashboard />
                            {t("dashboard")}
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        onClick={handleLogout}
                        variant="destructive"
                        className="flex items-center text-red-700 bg-transparent  gap-3"
                    >
                        <LogOut />
                        {t("logout")}
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
