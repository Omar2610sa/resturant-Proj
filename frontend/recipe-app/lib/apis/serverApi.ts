import { Options } from "@/types"



export async function serverApi<T = unknown>(
    endpoint: string,
    options: Options = {}
): Promise<T> {
    const {
        method = "GET",
        body,
        headers = {},
        next
    } = options

    // let Language: string | undefined

    try {
        // Language = cookieStore.get("NEXT_LOCALE")?.value
    } catch {
    }

    const res = await fetch(
        `${process.env.BASE_URL}/${endpoint}`,
        {
            method,
            headers: {
                "Content-Type": "application/json",
                // ...(headers ? { "Accept-Language": Language } : {}),
            },
            ...(body ? { body: JSON.stringify(body) } : {}),
            ...(next ? { next } : {}),
        }
    )

    return res.json()
}