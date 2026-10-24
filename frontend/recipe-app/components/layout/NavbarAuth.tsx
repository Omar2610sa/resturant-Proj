import { cookies } from "next/headers";
import Link from "next/link";
import { Button } from "@base-ui/react";
import { TOKEN_NAME } from "@/lib/constants";

export default async function NavbarAuth() {
    const token = (await cookies()).get(TOKEN_NAME)?.value ?? null

    return (
        <>
            {token ? (
                // حط هنا عناصر المستخدم المسجل دخوله
                <div>Account</div>
            ) : (
                // حط هنا Login / Register
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
                        className="rounded-xl bg-primary px-5 py-2.5 font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#d94728]"
                    >
                        إنشاء حساب
                    </Link>
                </>
            )}
        </>
    );
}