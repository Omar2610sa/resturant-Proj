import { DifficultyBadge } from '@/feature/dashboard/components/dashboard/DifficultyCell'
import { Recipe } from '@/feature/recipes/types'
import { getImageUrl } from '@/lib/image';
import Image from 'next/image'
import Link from 'next/link'
import { getLocale, getTranslations } from "next-intl/server";

export default async function NewRecipesPreview({ newRecipes }: { newRecipes: Recipe[] }) {
    const t = await getTranslations("Dashboard.overview");
    const locale = await getLocale();

    return (
        <section className="rounded-2xl border bg-card p-5 shadow-sm sm:p-6">
            <div className="mb-5 flex items-center justify-between ">
                <h2 className="font-black text-2xl">{t("latestRecipes")}</h2>
                <Link
                    href='/dashboard/recipes'
                    className=" font-extrabold text-primary text-xl"
                >
                    {t("viewAll")}
                </Link>
            </div>
            <div className="space-y-3 divide-y divide-border">
                {newRecipes.map((recipe) => {
                    const date = new Date(recipe.createdAt);
                    const formattedDate = date.toLocaleDateString(locale === "ar" ? "ar-EG" : "en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    });
                    return (
                        <div key={recipe._id} className="flex items-center gap-3 py-3">
                            <Image
                                src={getImageUrl(recipe.coverImage) ?? ""}
                                width={180}
                                height={80}
                                alt=""
                                className="h-15 w-25 rounded-lg object-cover"
                            />
                            <div className="min-w-0 flex-1">
                                <strong className="block truncate text-lg font-extrabold ">
                                    {recipe.title}
                                </strong>
                                <span className="text-sm text-[#948d85]">{formattedDate}</span>
                            </div>
                            <DifficultyBadge difficulty={recipe.difficulty} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
