"use client";
import { Home, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/feature/auth/utils/logout";
import Link from "next/link";
import SideBarUserCard from "@/components/SideBarUserCard";
import { Separator } from "@/components/ui/separator";

export function DashboardUserCard() {
    const { handleLogout } = useLogout();

    return (
        <div className="shrink-0 space-y-1  p-3 ">
            <SideBarUserCard />
            <Separator />
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