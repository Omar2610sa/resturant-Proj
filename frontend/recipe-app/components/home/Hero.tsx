import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import heroPhoto from "@/assets/heroPhoto.avif"
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-primary/5 ">
            <div className="pointer-events-none absolute -right-40 -top-40 h-[430px] w-[430px] rounded-full bg-primary/15 blur-3xl" />
            <div className=" grid container  items-center gap-10 lg:grid-cols-2 ">
                <div className="relative z-10 space-y-6">
                    <span className=" inline-flex items-center gap-2 rounded-full border border-primary/30 text-md bg-background/75 px-5 py-3  font-extrabold text-primary">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        وصفات مجرّبة بكل حب
                    </span>
                    <h1 className=" text-5xl font-black leading-16 sm:leading-20 text-foreground sm:text-6xl">
                        كل يوم طعم جديد
                        <span className="block text-primary">على مائدتك</span>
                    </h1>
                    <p className=" text-xl  font-semibold text-muted-foreground">
                        اكتشف وصفات عربية شهية وسهلة التحضير، بمكوّنات متوفرة وخطوات واضحة
                        لوجبات تجمع العائلة.
                    </p>
                    <Link href="/recipes" className="flex justify-between items-center gap-3">
                        <Button
                            className=" h-auto gap-3 rounded-xl px-6 text-md py-4 font-extrabold shadow-lg shadow-primary/25  border-primary transition-all hover:bg-white hover:text-primary duration-300"
                        >
                            تصفح الوصفات
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                </div>

                <div className="relative mx-auto w-full ">
                    <div className="absolute -bottom-5 -left-5 h-full w-full rounded-[34px] border-2 border-primary/40" />
                    <div className="relative  overflow-hidden rounded-2xl bg-muted shadow-2xl h-96">
                        <Image
                            src={heroPhoto}
                            alt="مائدة شهية تضم أطباقًا عربية متنوعة"
                            fill
                            priority
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                        <div className="absolute bottom-5 start-5 rounded-2xl bg-background/95 px-5 py-4 shadow-xl backdrop-blur">
                            <span className="block text-xs font-bold text-muted-foreground">
                                وصفة اليوم
                            </span>
                            <span className="mt-1 block font-extrabold text-foreground">
                                سلطة متوسطية طازجة
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}