import Link from "next/link";
import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";
import LogoutButton from "./LogoutButton";
import { TOKEN_NAME } from "@/lib/constants";

export default async function MobileNavAuth() {
    const token = (await cookies()).get(TOKEN_NAME)?.value ?? null

    if (!token) {
        return (
            <>
                <Button >
                    <Link href="/login">تسجيل الدخول</Link>
                </Button>
                <Button variant="outline">
                    <Link href="/register">إنشاء حساب</Link>
                </Button>
            </>
        );
    }

    return (
        <>
            <Button variant="outline">
                <Link href="/dashboard">لوحة التحكم</Link>
            </Button>
            <LogoutButton />
        </>
    );
}