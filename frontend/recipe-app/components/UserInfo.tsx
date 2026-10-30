"use client"
import { Home, LayoutDashboard, LogOut, User2Icon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Link from "next/link";
import { useAuthStore } from "@/feature/auth/store/auth.store";
import { useLogout } from "@/feature/auth/utils/logout";

export default function UserInfo() {
    const user = useAuthStore((state) => state.user)
    const { handleLogout } = useLogout();

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger
                className="flex items-center gap-2 rounded-full border  bg-background py-3 px-5  shadow-sm hover:bg-primary/30 cursor-pointer"
            >
                <span className="grid size-7 place-items-center rounded-full bg-primary/70 text-sm font-black text-white">
                    <User2Icon className="size-4" />
                </span>
                <span className=" text-sm font-extrabold text-accent-foreground sm:flex gap-5">
                    {user?.firstName} {user?.lastName}
                </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40" align="center">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Link href='/' className="flex  items-center justify-between gap-3">
                            <Home />
                            الصفحة الرئيسية
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href='/dashboard' className="flex  items-center justify-between gap-3">
                            <LayoutDashboard />
                            لوحة التحكم
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        onClick={handleLogout}
                        variant="destructive"
                        className="flex items-center text-red-700 bg-transparent  gap-3"
                    >
                        <LogOut />
                        تسجيل خروج
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
