import EditRecipeForm from "@/feature/dashboard/components/editRecipe/EditRecipeForm";
import { getSingleRecipe } from "@/feature/Single recipe/services/SingleRecipe.api";
import { ParamsPageProps } from "@/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const t = await getTranslations({
        locale: lang,
        namespace: "Dashboard.metadata",
    });
    return {
        title: t("editRecipeTitle"),
        description: t("descriptionRecipes"),
    };
}
async function EditRecipePageContent({ params }: ParamsPageProps) {
    const t = await getTranslations("Dashboard.recipes");
    const { id } = await params
    const { data: recipeData } = await getSingleRecipe({ id })
    const recipe = recipeData.recipe
    if (!recipe) notFound()

    return (
        <section>
            <Link
                href="/dashboard/recipes"
                className="mb-5 flex items-center gap-2 text-xl font-extrabold text-primary"
            >
                <ArrowRight className="size-4" />
                {t("back")}
            </Link>
            <div className="flex flex-1 items-center justify-center">
                <EditRecipeForm
                    initialValues={{
                        ...recipe,
                        coverImage: recipe.coverImage as unknown as File,
                    }} />
            </div>
        </section>
    )
}

export default function page({ params }: ParamsPageProps) {
    return (
        <Suspense fallback={<div className="min-h-40 animate-pulse rounded-2xl bg-muted" />}>
            <EditRecipePageContent params={params} />
        </Suspense>
    );
}
