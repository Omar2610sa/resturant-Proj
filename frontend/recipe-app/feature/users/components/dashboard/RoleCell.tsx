import { roleConfig } from "../../config/roleConfig";

export function RoleBadge({ roles }: { roles: keyof typeof roleConfig }) {
    const role = roleConfig[roles];

    return (
        <span
            className={`rounded-md sm:rounded-full p-1.5 sm:py-3 sm:px-4 text-sm font-extrabold shadow-sm ${role.className}`}
        >
            {role.label}
        </span>
    );
}