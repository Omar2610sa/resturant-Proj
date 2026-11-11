"use client";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { TOKEN_NAME } from "@/lib/constants";
import { useStatusToast } from "@/hooks/use-status-toast";
import { CheckAlert } from "@/components/shared/Alerts/CheckAlert";
import { useTranslations } from "next-intl";

export function useLogout() {
    const router = useRouter();
    const { showToast } = useStatusToast();
    const t = useTranslations("Navigation");

    const handleLogout = async () => {
        const result = await CheckAlert({
            title: t("logoutConfirm"),
            confirmButtonText: t("confirm"),
            cancelButtonText: t("cancel"),
        })
        if (result.isConfirmed) {
            Cookies.remove(TOKEN_NAME);
            Cookies.remove("userName");
            Cookies.remove("userRole");
            showToast({
                type: "success",
                description: t("logoutSuccess"),
            });
            router.refresh();
        };
    }
    return { handleLogout };
}