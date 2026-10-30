import { LucideIcon } from "lucide-react";
import { UseFormRegisterReturn } from "react-hook-form";

export type AuthCardProps = {
    title: string;
    description: string;
    footerText?: string;
    footerLinkLabel?: string;
    footerHref?: string;
    children: React.ReactNode;
    className?: string;
};


export type AuthFieldProps = {
    id: string;
    label: string;
    icon: LucideIcon;
    registration: UseFormRegisterReturn;
    type?: React.HTMLInputTypeAttribute;
    placeholder?: string;
    autoComplete?: string;
    error?: string;
};

export type UserRole = "admin" | "user";

export type User = {
    _id: string
    firstName: string;
    lastName: string;
    email: string;
    role: UserRole;
    token: string;
    createdAt: string
};