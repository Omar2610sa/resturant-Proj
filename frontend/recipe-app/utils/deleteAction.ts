"use client";

import { useRouter } from "next/navigation";
import { useStatusToast } from "@/hooks/use-status-toast";
import { CheckAlert } from "@/components/shared/Alerts/CheckAlert";
import { apiClient } from "@/lib/apis/apiClient";
import { respones } from "@/types";
import { useTranslations } from "next-intl";

export function useDelete({ name, endpoint, itemId }: { name: "recipe" | "user", endpoint: string, itemId: string }) {
    const router = useRouter();
    const { showToast } = useStatusToast();
    const t = useTranslations("Dashboard.delete");
    const nameLabel = t(name);

    const handleDelete = async () => {
        try {
            const result = await CheckAlert({
                title: t("confirm", { name: nameLabel }),
                confirmButtonText: t("yes"),
                cancelButtonText: t("no"),
            })
            if (result.isConfirmed) {
                const response: respones = await apiClient(`${endpoint}/${itemId}`, {
                    method: "DELETE"
                })
                if (response.status === 'success') {
                    showToast({
                        type: "success",
                        description: t("success", { name: nameLabel }),
                    });
                    router.refresh();
                }
                else if (response.status === 'error') {
                    showToast({
                        type: "error",
                        description: t("error"),
                    });
                };
            }
        } catch {
            showToast({
                type: "error",
                description: t("error"),
            });
        }
    }
    return { handleDelete };
}