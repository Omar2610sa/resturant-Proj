import Link from "next/link";
import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";
import LogoutButton from "./LogoutButton";
import { TOKEN_NAME } from "@/lib/constants";
import SideBarUserCard from "../SideBarUserCard";

export default async function MobileNavAuth() {
    const token = (await cookies()).get(TOKEN_NAME)?.value ?? null

    if (!token) {
        return (
            <>
                <Link href="/login" >
                    <Button size={'lg'} className="w-full">
                        تسجيل الدخول
                    </Button>
                </Link>
                <Link href="/register">
                    <Button
                        variant="outline"
                        size={'lg'}
                        className="w-full"
                    >
                        إنشاء حساب
                    </Button>
                </Link>
            </>
        );
    }

    return (
        <>
            <SideBarUserCard />
            <Link href="/dashboard">
                <Button variant="outline" className="w-full" size={'lg'}>
                    لوحة التحكم
                </Button>
            </Link>
            <LogoutButton />
        </>
    );
}