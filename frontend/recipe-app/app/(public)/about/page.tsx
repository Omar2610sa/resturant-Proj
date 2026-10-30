import AboutBanner from "@/feature/about/components/AboutBanner";
import { AboutHero } from "@/feature/about/components/AboutHero";
import ProgrammerCard from "@/feature/about/components/ProgrammerCard";

export default function page() {
    return (
        <div className="flexSection">
            <AboutHero />
            <ProgrammerCard />
            <AboutBanner />
        </div>
    )
}
