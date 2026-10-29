import { User } from "@/feature/auth/types";

export const roleConfig: Record<
    User["role"],
    { label: string; className: string }
> = {
    admin: { label: "مسؤول", className: "bg-red-200 text-red-800" },
    user: { label: "مستخدم", className: "bg-gray-200 text-gray-800" },
};