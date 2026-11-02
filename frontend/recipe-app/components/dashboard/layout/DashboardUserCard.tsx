"use client";
import { Home, LogOut, User2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/feature/auth/store/auth.store";
import { useLogout } from "@/feature/auth/utils/logout";
import Link from "next/link";

export function DashboardUserCard() {
    const user = useAuthStore((state) => state.user);
    const { handleLogout } = useLogout();

    return (
        <div className="shrink-0 space-y-1 border-t p-3 ">
            {user ? (
                <div className="flex items-center gap-3 px-2 py-2  rounded-xl">
                    <span className="grid size-7 place-items-center rounded-full bg-primary/70 text-sm font-black text-white">
                        <User2Icon className="size-4" />
                    </span>
                    <div className="min-w-0 leading-tight">
                        <p className="truncate text-md font-extrabold">
                            {user.firstName} {user.lastName}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {user.role}
                        </p>
                    </div>
                </div>
            ) : (
                <div className="h-14 animate-pulse rounded-xl bg-muted" />
            )}
            <div className="flex flex-col  gap-2">
                <Link href="/">
                    <Button
                        className="w-full justify-start bg-transparent text-md font-bold gap-3 p-5 text-muted-foreground hover:bg-muted hover:text-foreground"
                        variant={'secondary'}
                    >
                        <Home className="size-5" />
                        العودة الى الرئيسية 
                    </Button>
                </Link>
                <Button
                    variant="destructive"
                    className="w-full justify-start bg-transparent  gap-3 p-5"
                    onClick={handleLogout}
                >
                    <LogOut className="size-5" />
                    تسجيل الخروج
                </Button>
            </div>
        </div>
    );
}


// <Avatar className="size-10">
//     {user.avatar && <AvatarImage src={user.avatar} alt="" />}
//     <AvatarFallback className="bg-primary/10 font-bold text-primary">
//         {user.firstName.charAt(0)}
//         {user.lastName.charAt(0)}
//     </AvatarFallback>
// </Avatar>