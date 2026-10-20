import { SectionHeading } from './SectionTitle';
import {  ArrowLeft } from 'lucide-react';

export default function RecipeSection() {
    return (
        <section className="bg-[#fcfbf9] ">
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
                    {/* {recipes.slice(0, 6).map((recipe) => (
              <RecipeCard key={recipe.title} recipe={recipe} />
            ))} */}
                </div>
            </div>
        </section>
    );
}
