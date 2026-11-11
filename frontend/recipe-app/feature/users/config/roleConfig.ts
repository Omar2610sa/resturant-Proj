import { User } from "@/feature/auth/types";

export const roleConfig: Record<
    User["role"],
    { className: string }
> = {
    admin: { className: "bg-red-200 text-red-800" },
    user: { className: "bg-gray-200 text-gray-800" },
};