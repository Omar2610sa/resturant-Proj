import { DifficultyBadge } from '@/feature/recipes/components/dashboard/DifficultyCell'
import { Recipe } from '@/feature/recipes/types'
import { getImageUrl } from '@/lib/image';
import Image from 'next/image'
import Link from 'next/link'
export default function NewRecipesPreview({ newRecipes }: { newRecipes: Recipe[] }) {

    return (
        <section className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-5 flex items-center justify-between ">
                <h2 className="font-black text-2xl">أحدث الوصفات</h2>
                <Link
                    href='/dashboard/recipes'
                    className=" font-extrabold text-primary text-xl"
                >
                    عرض الكل
                </Link>
            </div>
            <div className="space-y-3 divide-y divide-[#f0ebe5]">
                {newRecipes.map((recipe) => {
                    const date = new Date(recipe.createdAt);
                    const formattedDate = date.toLocaleDateString("ar-EG", {
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
                                <strong className="block truncate text-lg font-extrabold text-[#38332e]">
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
