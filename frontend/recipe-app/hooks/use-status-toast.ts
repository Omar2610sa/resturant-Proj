"use client";

import { toast } from "@/components/ui/toast";

type ToastType = "success" | "error" | "warning" | "info";

type ShowToastParams = {
    type: ToastType;
    description: string;
    title?: string;
};

export function useStatusToast() {
    const showToast = ({
        type,
        description,
        title,
    }: ShowToastParams) => {
        toast.add({
            type,
            description,
            ...(title ? { title } : {}),
        });
    };

    return { showToast };
}