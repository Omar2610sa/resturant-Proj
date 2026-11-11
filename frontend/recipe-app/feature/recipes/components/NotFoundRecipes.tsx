import { BadgeX } from 'lucide-react'
import { getTranslations } from "next-intl/server";

export default async function NotFoundRecipes() {
    const t = await getTranslations("Recipes.empty");

    return (
        <div className="py-5 flex justify-center items-center flex-col gap-5">
            <div>
                <BadgeX className="size-20 text-primary" />
            </div>
            <div className="text-center flex flex-col justify-center items-center gap-3">
                <p className="text-3xl font-black">{t("title")}</p>
                <p className="text-lg font-bold text-gray-500">{t("description")}</p>
            </div>
        </div>
    )
}
