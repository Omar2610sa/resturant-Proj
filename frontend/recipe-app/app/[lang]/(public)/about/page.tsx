import AboutBanner from "@/feature/about/components/AboutBanner";
import { AboutHero } from "@/feature/about/components/AboutHero";
import ProgrammerCard from "@/feature/about/components/ProgrammerCard";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
    params: Promise<{ lang: string }>;
};

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { lang } = await params;

    const t = await getTranslations({
        locale: lang,
        namespace: "Metadata",
    });

    return {
        title: t("aboutTitle"),
        description: t("description"),
    };
}

export default function AboutPage() {
    return (
        <div className="flexSection">
            <AboutHero />
            <ProgrammerCard />
            <AboutBanner />
        </div>
    );
}
