import { LoginForm } from "@/feature/auth/login/components/LoginForm";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
    params: Promise<{ lang: string }>;
};

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { lang } = await params;

    const t = await getTranslations({
        locale: lang,
        namespace: "Metadata",
    });

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
