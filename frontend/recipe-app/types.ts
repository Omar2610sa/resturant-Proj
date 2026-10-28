type Method = "GET" | "POST" | "PUT" | "DELETE"

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