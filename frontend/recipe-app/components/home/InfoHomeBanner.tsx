import { BookOpen, ChefHat, Clock, Heart } from "lucide-react";


export default async function InfoHomeBanner() {

    const infoItems = [
        {
            icon: ChefHat,
            title: "وصفات لكل الأذواق",
            description: "اكتشف مجموعة متنوعة من الوصفات المناسبة لكل ذوق ومناسبة.",
        },
        {
            icon: Clock,
            title: "وفّر وقتك",
            description: "اعثر على وصفات تناسب وقتك وساعد نفسك في تخطيط وجباتك.",
        },
        {
            icon: Heart,
            title: "شارك شغفك بالطبخ",
            description: "اكتشف وصفات جديدة واحفظ أطباقك المفضلة للرجوع إليها.",
        },
    ];
    return (
        <section className=" bg-gradient-to-br from-primary/30 to-accent ">
            <div className="container grid grid-cols-1 gap-10 lg:grid-cols-3 items-center justify-center ">
                {
                    infoItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center gap-6 group">
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
