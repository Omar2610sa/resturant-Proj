import { roleConfig } from "../../config/roleConfig";

export function RoleBadge({ roles }: { roles: keyof typeof roleConfig }) {
    const role = roleConfig[roles];

    return (
        <span
            className={`rounded-full py-3 px-4 text-sm font-extrabold shadow-sm ${role.className}`}
        >
            {role.label}
        </span>
    );
}