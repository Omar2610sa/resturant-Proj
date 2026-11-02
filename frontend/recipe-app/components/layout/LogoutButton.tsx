"use client";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/feature/auth/utils/logout";

export default function LogoutButton() {
    const { handleLogout } = useLogout();
    return (
        <Button size={'lg'} variant="destructive" onClick={handleLogout}>
            تسجيل الخروج
        </Button>
    );
}