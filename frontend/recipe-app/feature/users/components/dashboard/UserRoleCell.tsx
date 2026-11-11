"use client";

"use client";

import { useState, useTransition } from "react";

import { useStatusToast } from "@/hooks/use-status-toast";
import { User } from "@/feature/auth/types";
import { useRouter } from "next/navigation";
import { RoleSwitcher } from "./RoleSwitcher";
import { updateUserRole } from "../../action/update-user-role";
import { useTranslations } from "next-intl";

export function UserRoleCell({ user }: { user: User }) {
    const [isAdmin, setIsAdmin] = useState(user.role === "admin");
    const [isPending, startTransition] = useTransition();
    const { showToast } = useStatusToast();
    const router = useRouter();
    const t = useTranslations("Dashboard.roles");

    function handleChange(next: boolean) {
        const previous = isAdmin;
        setIsAdmin(next);

        startTransition(async () => {
            const result = await updateUserRole(user._id, next ? "admin" : "user");
            router.refresh();

            if (!result.ok) {
                setIsAdmin(previous);
                showToast({ type: "error", description: t("updateFailed") });
                return;
            }
            showToast({ type: "success", description: t("updated") });
        });
    }

    return (
        <RoleSwitcher
            isAdmin={isAdmin}
            onChange={handleChange}
            disabled={isPending}
            label={t("grantAdmin", {
                name: `${user.firstName} ${user.lastName}`,
            })}
        />
    );
}