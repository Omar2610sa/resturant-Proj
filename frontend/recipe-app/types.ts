type Method = "GET" | "POST" | "PUT" | "DELETE" |"PATCH"

export type Options = {
    method?: Method
    body?: Record<string, unknown>
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
    message : string
    status : Status
}