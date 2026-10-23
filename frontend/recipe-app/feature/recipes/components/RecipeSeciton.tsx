import { SectionHeading } from '../../../components/home/SectionTitle';
import { ArrowLeft } from 'lucide-react';
import { Recipe} from "@/feature/recipes/types";
import RecipeCard from '@/feature/recipes/components/RecipeCard';


export default function RecipeSection({ recipes }: { recipes: Recipe[] }) {


    return (
        <section className="bg-accent">
            <div className="mx-auto px-5 container sm:px-8">
                <div className="mb-10 flex items-end justify-between gap-6">
                    <SectionHeading
                        eyebrow="من مطبخنا إليك"
                        title="أحدث الوصفات"
                        description="أفكار شهية ومتنوعة اخترناها لتجعل طبخك اليومي أبسط وألذ."
                    />
                    <button
                        className="hidden shrink-0 items-center gap-2 rounded-xl border border-primary bg-white px-5 py-3 font-extrabold text-primary transition-colors hover:border-black hover:text-black sm:flex"
                    >
                        كل الوصفات
                        <ArrowLeft className="h-5 w-5" />
                    </button>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {recipes.map((recipe) => (
                        <RecipeCard key={recipe._id} recipe={recipe} />
                    ))}
                </div>
            </div>
        </section>
    );
}
