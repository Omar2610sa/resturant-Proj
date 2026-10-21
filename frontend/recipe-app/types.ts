type Method = "GET" | "POST" | "PUT" | "DELETE"

export type Options = {
    method?: Method
    body?: Record<string, unknown>
    headers?: Record<string, string>
    next?: NextFetchRequestConfig
}