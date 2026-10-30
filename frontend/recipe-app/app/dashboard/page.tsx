import { StatsSection } from "@/feature/analytics/components/StatsSection";

export async function generateMetadata() {
    return {
        title: "مَذاق | لوحة التحكم",
        description: "لوحة التحكم الخاصة بي مَذاق",
    };
}
export default function page() {
    return (
        <div>
            <StatsSection />
        </div>
    )
}
