"use client";

import { useState, useTransition } from "react";

import { useStatusToast } from "@/hooks/use-status-toast";
import { User } from "@/feature/auth/types";
import { useRouter } from "next/navigation";
import { RoleSwitcher } from "./RoleSwitcher";
import { updateUserRole } from "../../action/update-user-role";

export function UserRoleCell({ user }: { user: User }) {
    const [isAdmin, setIsAdmin] = useState(user.role === "admin");
    const [isPending, startTransition] = useTransition();
    const { showToast } = useStatusToast();
    const router = useRouter();

    function handleChange(next: boolean) {
        const previous = isAdmin;
        setIsAdmin(next);

        startTransition(async () => {
            const result = await updateUserRole(user._id, next ? "admin" : "user");
            router.refresh();

            if (!result.ok) {
                setIsAdmin(previous);
                showToast({ type: "error", description: result.message });
                return;
            }
            showToast({ type: "success", description: "تم تحديث الدور" });
        });
    }

    return (
        <RoleSwitcher
            isAdmin={isAdmin}
            onChange={handleChange}
            disabled={isPending}
            label={`منح صلاحية مدير إلى ${user.firstName} ${user.lastName}`}
        />
    );
}