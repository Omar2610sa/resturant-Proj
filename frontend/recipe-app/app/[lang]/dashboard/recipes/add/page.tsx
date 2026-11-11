import AddRecipeForm from "@/feature/dashboard/components/addRecipe/AddRecipeForm";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
    const t = await getTranslations("Dashboard.metadata");
    return {
        title: t("addRecipeTitle"),
        description: t("descriptionRecipes"),
    };
}
export default async function page() {
    const t = await getTranslations("Dashboard.recipes");

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
                <AddRecipeForm />
            </div>
        </section>
    )
}
