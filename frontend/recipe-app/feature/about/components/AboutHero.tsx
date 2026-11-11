import {  ChefHatIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function AboutHero() {
    const t = await getTranslations("About.hero");

    return (
        <section className="relative overflow-hidden bg-primary/5 ">
            <div className="pointer-events-none absolute -right-40 -top-40 size-80 rounded-full bg-primary/15 blur-3xl" />
            <div className=" grid container  items-center gap-10 lg:grid-cols-2 ">
                <div className="relative z-10 space-y-6">
                    <span className="text-2xl font-bold text-primary block">
                        {t("eyebrow")}
                    </span>
                    <h1 className=" text-5xl font-black leading-16 sm:leading-20 text-foreground sm:text-6xl">
                        {t("title")}
                        <span className="block text-primary">{t("titleAccent")}</span>
                    </h1>
                    <div className="space-y-4 text-base leading-8 sm:text-md font-bold text-muted-foreground">
                        <p>
                            {t("paragraphOne")}
                        </p>
                        <p >
                            {t("paragraphTwo")}
                        </p>
                    </div>
                </div>
                <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center">
                    <div className="absolute inset-6 rounded-full border border-[#efc5b2] bg-white/5" />
                    <div className="absolute right-3 top-16 size-20 rounded-full bg-[#f8d7c8] animate-pulse duration-150" />
                    <div className="absolute bottom-10 left-2 size-28 rounded-full bg-[#f8e6c9] animate-pulse duration-300" />
                    <div className="relative flex  flex-col items-center justify-center  text-center size-60 sm:size-50">
                        <span className="grid h-20 w-20 place-items-center rounded-3xl bg-primary text-white ">
                            <ChefHatIcon name="chef" className="h-11 w-11" />
                        </span>
                        <div className="space-y-2 flex flex-col">
                            <strong className="mt-6 text-3xl font-black ">
                                {t("featureTitle")}
                            </strong>
                            <span className=" text-sm font-bold text-foreground">
                                {t("featureSubtitle")}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}