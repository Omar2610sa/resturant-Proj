"use client";

import { useRouter } from "next/navigation";
import { useStatusToast } from "@/hooks/use-status-toast";
import { CheckAlert } from "@/components/shared/Alerts/CheckAlert";
import { apiClient } from "@/lib/apis/apiClient";
import { respones } from "@/types";

export function useDelete({ name, endpoint, itemId }: { name: string, endpoint: string, itemId: string }) {
    const router = useRouter();
    const { showToast } = useStatusToast();

    const handleDelete = async () => {
        try {
            const result = await CheckAlert({ title: `هل انت متأكد من حذف  ${name}` })
            if (result.isConfirmed) {
                const response: respones = await apiClient(`${endpoint}/${itemId}`, {
                    method: "DELETE"
                })
                if (response.status === 'success') {
                    showToast({
                        type: "success",
                        description: `تم حذف ${name} بنجاح`,
                    });
                    router.refresh();
                }
                else if (response.status === 'error') {
                    showToast({
                        type: "error",
                        description: `${response.message}`,
                    });
                };
            }
        } catch {
            showToast({
                type: "error",
                description: "حدث خطأ أثناء الحذف",
            });
        }
    }
    return { handleDelete };
}