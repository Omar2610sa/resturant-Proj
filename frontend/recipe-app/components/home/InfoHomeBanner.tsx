import { ChefHat, Clock, Heart } from "lucide-react";
import { getTranslations } from "next-intl/server";


export default async function InfoHomeBanner() {
    const t = await getTranslations("Home.features");

    const infoItems = [
        {
            icon: ChefHat,
            title: t("varietyTitle"),
            description: t("varietyDescription"),
        },
        {
            icon: Clock,
            title: t("timeTitle"),
            description: t("timeDescription"),
        },
        {
            icon: Heart,
            title: t("favoritesTitle"),
            description: t("favoritesDescription"),
        },
    ];
    return (
        <section className=" bg-gradient-to-br from-primary/30 to-accent ">
            <div className="container grid grid-cols-1 gap-10 lg:grid-cols-3 items-center justify-center ">
                {
                    infoItems.map((item, index) => (
                        <div data-aos="fade-down" data-aos-delay={100 + index * 100} key={index} className="flex flex-col items-center text-center gap-6 group">
                            <span className="flex size-14 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/25">
                                <item.icon className="size-8 text-white group-hover:scale-110 transition-transform duration-300" />
                            </span>

                            <div className="flex flex-col gap-1">
                                <h3 className="font-black text-orange-600  text-2xl">{item.title}</h3>
                                <p className="text-sm font-bold leading-6 text-accent-foreground">{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
