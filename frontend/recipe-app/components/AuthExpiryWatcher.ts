"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { decodeJwt } from "jose";
import { TOKEN_NAME } from "@/lib/constants";

export default function AuthExpiryWatcher() {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;

        const expire = () => {
            Cookies.remove(TOKEN_NAME);
            router.refresh();
        };

        const check = () => {
            clearTimeout(timer);
            const token = Cookies.get(TOKEN_NAME);
            if (!token) return;

            try {
                const { exp } = decodeJwt(token);
                if (!exp) return;

                const remaining = exp * 1000 - Date.now();
                if (remaining <= 0) expire();
                else timer = setTimeout(expire, Math.min(remaining, 2 ** 31 - 1));
            } catch {
                expire();
            }
        };

        check();
        window.addEventListener("focus", check);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("focus", check);
        };
    }, [pathname, router]);
    return null
}