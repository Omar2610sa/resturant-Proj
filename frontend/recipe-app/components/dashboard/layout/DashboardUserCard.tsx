"use client";

import { LogOut, User2Icon } from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/feature/auth/store/auth.store";
import { useRouter } from "next/navigation";
import { useStatusToast } from "@/hooks/use-status-toast";
import { TOKEN_NAME } from "@/lib/constants";
import Cookies from "js-cookie";


export function DashboardUserCard() {
    const user = useAuthStore((state) => state.user);

        const router = useRouter();
        const { showToast } = useStatusToast();
    
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
        <div className="shrink-0 space-y-1 border-t p-3">
            {user ? (
                <div className="flex items-center gap-3 px-2 py-2">
                    <span className="grid size-7 place-items-center rounded-full bg-primary/70 text-sm font-black text-white">
                        <User2Icon className="size-4" />
                    </span>
                    <div className="min-w-0 leading-tight">
                        <p className="truncate text-sm font-extrabold">
                            {user.firstName} {user.lastName}
                        </p>
                        <p className="text-xs text-muted-foreground">
                            {user.role}
                        </p>
                    </div>
                </div>
            ) : (
                <div className="h-14 animate-pulse rounded-xl bg-muted" />
            )}

            <Button
                variant="destructive"
                className="w-full justify-start gap-3 p-5"
                onClick={handleLogout}
            >
                <LogOut className="size-5" />
                تسجيل الخروج
            </Button>
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