import { SectionHeading } from '../../../components/home/SectionTitle';
import { ArrowLeft } from 'lucide-react';
import { Recipe } from "@/feature/recipes/types";
import testPhoto from "@/assets/heroPhoto.avif"
import RecipeCard from '@/feature/recipes/components/RecipeCard';
import { getRecipesHomeData } from '../services/recipes.api';
export default async function RecipeSection() {
    const inititRecipe: Recipe[] = [
        {
            _id: "1",
            title: "فتّة الحمص الشامية",
            description: "وصفة شامية تقليدية تحتوي على الحمص والخضار.",
            ingredients: "حمص, بصل, ثوم, زيت الزيتون, أوراق شبه النخيل",
            instructions: "1. اغلي الحمص حتى يصبح ناعماً. 2.切片洋葱和大蒜，在橄榄油中炒熟。 3. 加入碎牛肉，炒至变色。 4. 加入西红柿和香草，小火炖煮20分钟。 5. 将酱汁浇在煮好的意大利面条上。",
            coverImage: testPhoto.src,
            createdAt: "2023-10-01T12:00:00Z",
            difficulty: "medium",
            cookingTime: 30
        },
        {
            _id: "1",
            title: "فتّة الحمص الشامية",
            description: "وصفة شامية تقليدية تحتوي على الحمص والخضار.",
            ingredients: "حمص, بصل, ثوم, زيت الزيتون, أوراق شبه النخيل",
            instructions: "1. اغلي الحمص حتى يصبح ناعماً. 2.切片洋葱和大蒜，在橄榄油中炒熟。 3. 加入碎牛肉，炒至变色。 4. 加入西红柿和香草，小火炖煮20分钟。 5. 将酱汁浇在煮好的意大利面条上。",
            coverImage: testPhoto.src,
            createdAt: "2023-10-01T12:00:00Z",
            difficulty: "medium",
            cookingTime: 30
        },
        {
            _id: "1",
            title: "فتّة الحمص الشامية",
            description: "وصفة شامية تقليدية تحتوي على الحمص والخضار.",
            ingredients: "حمص, بصل, ثوم, زيت الزيتون, أوراق شبه النخيل",
            instructions: "1. اغلي الحمص حتى يصبح ناعماً. 2.切片洋葱和大蒜，在橄榄油中炒熟。 3. 加入碎牛肉，炒至变色。 4. 加入西红柿和香草，小火炖煮20分钟。 5. 将酱汁浇在煮好的意大利面条上。",
            coverImage: testPhoto.src,
            createdAt: "2023-10-01T12:00:00Z",
            difficulty: "medium",
            cookingTime: 30
        },
    ]
    
  const getData = await getRecipesHomeData()
  const recipeData = getData.data.recipes;
    return (
        <section className="bg-[#FCFBF9] ">
            <div className="mx-auto px-5 container sm:px-8">
                <div className="mb-10 flex items-end justify-between gap-6">
                    <SectionHeading
                        eyebrow="من مطبخنا إليك"
                        title="أحدث الوصفات"
                        description="أفكار شهية ومتنوعة اخترناها لتجعل طبخك اليومي أبسط وألذ."
                    />
                    <button
                        className="hidden shrink-0 items-center gap-2 rounded-xl border border-[#ddd5cc] bg-white px-5 py-3 font-extrabold text-[#47423d] transition-colors hover:border-[#e95432] hover:text-[#e95432] sm:flex"
                    >
                        كل الوصفات
                        <ArrowLeft className="h-5 w-5" />
                    </button>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {recipeData.map((recipe) => (
                        <RecipeCard key={recipe.title} recipe={recipe} />
                    ))}
                </div>
            </div>
        </section>
    );
}
