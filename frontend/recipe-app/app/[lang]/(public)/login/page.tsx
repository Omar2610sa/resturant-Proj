import { LoginForm } from "@/feature/auth/login/components/LoginForm";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
    const t = await getTranslations("Metadata");
    return {
        title: t("loginTitle"),
        description: t("loginDescription"),
    };
}

export default function page() {
    return (
        <section className="container ">
            <div className="flex flex-1 items-center justify-center">
                <LoginForm />
            </div>
        </section>
    )
}
