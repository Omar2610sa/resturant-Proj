"use client";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { TOKEN_NAME } from "@/lib/constants";
import { useStatusToast } from "@/hooks/use-status-toast";
import { CheckAlert } from "@/components/shared/Alerts/CheckAlert";

export function useLogout() {
    const router = useRouter();
    const { showToast } = useStatusToast();

    const handleLogout = async () => {
        const result = await CheckAlert({ title: "هل انت متأكد من تسجيل الخروج" })
        if (result.isConfirmed) {
            Cookies.remove(TOKEN_NAME);
            Cookies.remove("userName");
            Cookies.remove("userRole");
            showToast({
                type: "success",
                description: "تم تسجيل الخروج بنجاح",
            });
            router.refresh();
        };
    }
    return { handleLogout };
}