import AddRecipeForm from "@/feature/dashboard/components/addRecipe/AddRecipeForm";

export async function generateMetadata() {
    return {
        title: "مَذاق | أضف وصفة",
        description: "مَذاق للوصفات الشهية والعربية الأصيلة",
    };
}
export default function page() {
    return (
        <section>
            <div className="flex flex-1 items-center justify-center">
                <AddRecipeForm />
            </div>
        </section>
    )
}
