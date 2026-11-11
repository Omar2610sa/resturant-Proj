import { SectionHeading } from '../../../components/home/SectionTitle';
import { Recipe } from "@/feature/recipes/types";
import RecipeCard from '@/feature/recipes/components/RecipeCard';
import Link from 'next/link';
import { getTranslations } from "next-intl/server";
import ArrorDirectionIcon from '@/components/shared/ArrorDirectionIcon';

export default async function RecipeSection({ recipes }: { recipes: Recipe[] }) {
    const t = await getTranslations("Home.recipeSection");

    return (
        <section className="bg-accent">
            <div className="mx-auto px-5 container sm:px-8">
                <div data-aos="fade-up" className="mb-10 flex items-end justify-between gap-6">
                    <SectionHeading
                        eyebrow={t("eyebrow")}
                        title={t("title")}
                        description={t("description")}
                    />
                    <Link
                        href='/recipes'
                        className="hidden shrink-0 items-center gap-2 rounded-xl border border-primary bg- px-5 py-3 font-extrabold text-primary transition-colors hover:border-accent-foreground hover:text-accent-foreground sm:flex"
                    >
                        {t("allRecipes")}
                        <ArrorDirectionIcon />
                    </Link>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {recipes.map((recipe, index) => (
                        <div key={recipe._id} data-aos="fade-up" data-aos-delay={100 + index * 100}>
                            <RecipeCard recipe={recipe} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
