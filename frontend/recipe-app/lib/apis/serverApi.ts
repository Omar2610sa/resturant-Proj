import { Options } from "@/types"
import { cookies } from "next/headers"
import { TOKEN_NAME } from "../constants"



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

    const cookieStore = await cookies()
    let token: string | undefined
    // let Language: string | undefined

    try {
        token = cookieStore.get(TOKEN_NAME)?.value
        // Language = cookieStore.get("NEXT_LOCALE")?.value
    } catch {
        token = undefined
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`,
        {
            cache: "no-cache",
            method,
            headers: {
                "Content-Type": "application/json",
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
                // ...(headers ? { "Accept-Language": Language } : {}),
            },
            ...(body ? { body: JSON.stringify(body) } : {}),
            ...(next ? { next } : {}),
        }
    )

    return res.json()
}