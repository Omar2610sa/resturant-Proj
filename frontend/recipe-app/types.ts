import { UseFormRegisterReturn } from "react-hook-form"

type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH"

export type Options = {
    method?: Method
    body?: Record<string, unknown> | FormData
    headers?: Record<string, string>
    next?: NextFetchRequestConfig
}

export type Status = "success" | "error"


export type Pagination = {
    currentPage: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
};

export interface TableActionsProps {
    isDelete?: boolean
    edit?: boolean
    editHref?: string
    itemId: number | string
    itemName?: string
    endpoint?: string
    onDeleteSuccess?: () => void
}

export type GetParams = {
    page?: number;
    limit?: number;
    search?: string;
};

export type searchParams = {
    searchParams: Promise<{ page?: string; search?: string }>;
};


export type respones = {
    message: string
    status: Status
}

export type AddCardProps = {
    title: string;
    description: string;
    footerText: string;
    footerHref: string;
    children: React.ReactNode;
    className?: string;
};

export type AddFieldProps = {
    id: string;
    label: string;
    type?: React.HTMLInputTypeAttribute;
    placeholder?: string;
    autoComplete?: string;
    defaultValue?: string;
    error?: string;
    registration: UseFormRegisterReturn;
    input?: boolean;
    upload?: boolean;
    textarea?: boolean;
    select?: boolean;
    values?: {
        label: string;
        value: string;
    }[];
};
