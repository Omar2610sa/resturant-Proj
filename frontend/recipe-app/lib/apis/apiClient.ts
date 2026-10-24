"use client"

import { Options } from "@/types"
import Cookies from "js-cookie"
import { TOKEN_NAME } from "../constants"

const auth_Token = TOKEN_NAME


export async function apiClient<T = unknown>(
    endpoint: string,
    options: Options = {}
): Promise<T> {
    const {
        method = "GET",
        body,
        headers = {},
        next
    } = options
    let token: string | undefined

    // let Language: string | undefined

    try {
        token = Cookies.get(auth_Token)
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