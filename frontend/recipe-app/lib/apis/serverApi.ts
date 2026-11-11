import { Options } from "@/types";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { TOKEN_NAME } from "../constants";
import axios from "axios";
import { connection } from "next/server";

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 10000,
    
});

export async function serverApi<T = unknown>(
    endpoint: string,
    options: Options = {}
): Promise<T> {
    const { method = "GET", body, headers = {} } = options;
await connection();
    const cookieStore = await cookies();
    const token = cookieStore.get(TOKEN_NAME)?.value;
    // const language = cookieStore.get("NEXT_LOCALE")?.value;
    try {
        const res = await instance.request<T>({
            url: endpoint,
            method,
            ...(body ? { data: body } : {}),
            headers: {
                "Content-Type": "application/json",
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
                // ...(language ? { "Accept-Language": language } : {}),
                ...headers,
            },
        });
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            notFound();
        }
        throw error;
    }
}