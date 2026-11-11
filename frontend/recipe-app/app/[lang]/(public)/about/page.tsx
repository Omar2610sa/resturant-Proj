import AboutBanner from "@/feature/about/components/AboutBanner";
import { AboutHero } from "@/feature/about/components/AboutHero";
import ProgrammerCard from "@/feature/about/components/ProgrammerCard";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
    const t = await getTranslations("Metadata");
    return {
        title: t("aboutTitle"),
        description: t("description"),
    };
}
export default function page() {
    return (
        <div className="flexSection">
            <AboutHero />
            <ProgrammerCard />
            <AboutBanner />
        </div>
    )
}
