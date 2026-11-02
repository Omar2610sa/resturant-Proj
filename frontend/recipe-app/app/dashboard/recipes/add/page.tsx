import AddRecipeForm from "@/feature/dashboard/components/addRecipe/AddRecipeForm";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export async function generateMetadata() {
    return {
        title: "مَذاق | أضف وصفة",
        description: "مَذاق للوصفات الشهية والعربية الأصيلة",
    };
}
export default function page() {
    return (
        <section>
            <Link
                href="/dashboard/recipes"
                className="mb-5 flex items-center gap-2 text-xl font-extrabold text-primary"
            >
                <ArrowRight className="size-4" />
                العودة إلى الوصفات
            </Link>
            <div className="flex flex-1 items-center justify-center">
                <AddRecipeForm />
            </div>
        </section>
    )
}
