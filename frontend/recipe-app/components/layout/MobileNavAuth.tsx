import Link from "next/link";
import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";
import LogoutButton from "./LogoutButton";
import { TOKEN_NAME } from "@/lib/constants";
import SideBarUserCard from "../SideBarUserCard";
import { getTranslations } from "next-intl/server";

export default async function MobileNavAuth() {
    const token = (await cookies()).get(TOKEN_NAME)?.value ?? null
    const t = await getTranslations("Navigation");

    if (!token) {
        return (
            <>
                <Link href="/login" >
                    <Button size={'lg'} className="w-full">
                        {t("login")}
                    </Button>
                </Link>
                <Link href="/register">
                    <Button
                        variant="outline"
                        size={'lg'}
                        className="w-full"
                    >
                        {t("register")}
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
                    {t("dashboard")}
                </Button>
            </Link>
            <LogoutButton />
        </>
    );
}