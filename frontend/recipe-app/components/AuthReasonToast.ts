"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useStatusToast } from "@/hooks/use-status-toast";

const messages: Record<string, string> = {
    unauthenticated: "سجّل الدخول الأول عشان تكمل",
    forbidden: "مش مسموحلك تدخل لوحة التحكم",
};

export default function AuthReasonToast() {
    const { showToast } = useStatusToast();
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const reason = searchParams.get("reason");
        if (!reason || !messages[reason]) return;

        showToast({
            type: "warning",
            description: messages[reason],
        });

        const params = new URLSearchParams(searchParams.toString());
        params.delete("reason");
        const query = params.toString();
        router.replace(query ? `${pathname}?${query}` : pathname);
    }, [searchParams]); // eslint-disable-line react-hooks/exhaustive-deps

    return null;
}