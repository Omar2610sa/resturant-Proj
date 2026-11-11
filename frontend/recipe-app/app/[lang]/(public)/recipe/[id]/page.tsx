import RecipeSection from "@/feature/Single recipe/components/RecipeSection";
import { ParamsPageProps } from "@/types";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const t = await getTranslations({ locale: lang, namespace: "Metadata" });
    return {
        title: t("recipeTitle"),
        description: t("description"),
    };
}
export default async function page({ params }: ParamsPageProps) {
    const { id } = await params


    return (
        <div>
            <RecipeSection id={id} />
        </div>
    )
}
