"use server";

import { revalidatePath } from "next/cache";

import { serverApi } from "@/lib/apis/serverApi";
import { UserRole } from "@/feature/auth/types";

export async function updateUserRole(userId: string, role: UserRole) {
    try {
        await serverApi(`users/${userId}`, {
            method: "PATCH",
            body: { role },
        });

        revalidatePath("/dashboard/users");
        return { ok: true as const };
    } catch {
        return { ok: false as const, message: "تعذّر تحديث الدور" };
    }
}