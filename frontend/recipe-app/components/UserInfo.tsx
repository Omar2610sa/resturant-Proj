"use client"
import { LogOut, PanelLeft, User2Icon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Link from "next/link";
import { useStatusToast } from "@/hooks/use-status-toast";
import { TOKEN_NAME } from "@/lib/constants";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/feature/auth/store/auth.store";

export default function UserInfo() {
    const router = useRouter();
    const { showToast } = useStatusToast();
    const user = useAuthStore((state) => state.user)

    const handleLogout = async () => {
        Cookies.remove(TOKEN_NAME)
        showToast({
            type: "success",
            description: "تم تسجيل الخروج بنجاح",
        })
        router.push("/")
        router.refresh()
    }
    return (
        <DropdownMenu>
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
            <DropdownMenuContent className="w-20" align="center">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Link href='/dashboard' className="flex items-center justify-between gap-3">
                            <PanelLeft />
                            لوحة التحكم
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        onClick={handleLogout}
                        className="flex items-center  gap-3" variant="destructive">
                        <LogOut />
                        تسجيل خروج
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
