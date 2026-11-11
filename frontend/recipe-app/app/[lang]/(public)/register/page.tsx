import { RegisterForm } from "@/feature/auth/register/components/RegisterForm";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
    const t = await getTranslations("Metadata");
    return {
        title: t("registerTitle"),
        description: t("registerDescription"),
    };
}
export default function page() {
    return (
        <section className="container ">
            <div className="flex flex-1 items-center justify-center">
                <RegisterForm />
            </div>
        </section>
    )
}
