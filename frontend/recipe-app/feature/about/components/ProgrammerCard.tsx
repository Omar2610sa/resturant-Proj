import { Card, CardContent } from "@/components/ui/card";
import { getTranslations } from "next-intl/server";

export default async function ProgrammerCard() {
    const t = await getTranslations("About.programmer");

    return (
        <section className="container">
            {/* title section */}
            <div className="flex flex-col gap-3 justify-center text-center items-center">
                <span className="text-lg font-bold text-primary block">{t("eyebrow")}</span>
                <h2 className=" text-2xl font-black text-foreground sm:text-5xl">{t("title")}</h2>
                <p className="text-base leading-8 sm:text-md font-bold text-muted-foreground">{t("description")}</p>
            </div>

            {/* Card */}
            <Card className="max-w-2xl mx-auto my-10 items-center  gap-7 rounded-2xl  bg-accent p-6 shadow-md  sm:p-9">
                <CardContent className="text-center sm:text-start gap-0">
                    <span className="text-lg font-extrabold text-primary">
                        {t("role")}
                    </span>
                    <h3 className="mt-1 text-3xl font-black ">
                        {t("name")}
                    </h3>
                    <p className="mt-1 font-bold text-muted-foreground">
                        Front-End Developer
                    </p>
                    <p className="mt-4 leading-7 text-[#7d766e]">
                        {t("bio")}
                    </p>
                </CardContent>
            </Card>

        </section>
    )
}
