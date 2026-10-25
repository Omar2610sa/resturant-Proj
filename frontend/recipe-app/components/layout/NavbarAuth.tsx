import { cookies } from "next/headers";
import Link from "next/link";
import { Button } from "@base-ui/react";
import { TOKEN_NAME } from "@/lib/constants";
import LogoutBtn from "./LogoutBtn";

export default async function NavbarAuth() {
    const token = (await cookies()).get(TOKEN_NAME)?.value ?? null

    return (
        <>
            {token ? (
                <>
                    <Link
                        href="/dashboard"
                        className="rounded-xl bg-white px-5 py-2.5 font-bold text-primary shadow-sm transition-all  border hover:border-primary"
                    >
                        لوحة التحكم
                    </Link>
<LogoutBtn  />
                </>
            ) : (
                <>
                    <Link
                        href="/login"
                    >
                        <Button className="rounded-xl px-4 py-2.5 font-bold  transition-colors hover:bg-gray-200/70"
                        >
                            تسجيل الدخول
                        </Button>
                    </Link>
                    <Link
                        href="/register"
                        className="rounded-xl bg-primary px-5 py-2.5 font-bold text-white shadow-sm transition-all  hover:bg-primary"
                    >
                        إنشاء حساب
                    </Link>
                </>
            )}
        </>
    );
}