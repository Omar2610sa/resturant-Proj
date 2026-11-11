"use client";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/feature/auth/utils/logout";
import { useTranslations } from "next-intl";

export default function LogoutButton() {
    const { handleLogout } = useLogout();
    const t = useTranslations("Navigation");
    return (
        <Button size={'lg'} variant="destructive" onClick={handleLogout}>
            {t("logout")}
        </Button>
    );
}