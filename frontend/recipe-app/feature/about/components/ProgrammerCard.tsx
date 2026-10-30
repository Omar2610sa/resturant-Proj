import { Card, CardContent } from "@/components/ui/card";

export default function ProgrammerCard() {
    return (
        <section className="container">
            {/* title section */}
            <div className="flex flex-col gap-3 justify-center items-center">
                <span className="text-lg font-bold text-primary block">وراء التجربة</span>
                <h2 className=" text-2xl font-black text-foreground sm:text-5xl">من يقف خلف مذاق؟</h2>
                <p className="text-base leading-8 sm:text-md font-bold text-muted-foreground">فكرة صُممت بعناية لتقديم تجربة عربية بسيطة، سريعة، ومريحة في كل شاشة.</p>
            </div>

            {/* Card */}
            <Card className="max-w-2xl mx-auto my-10 items-center  gap-7 rounded-2xl  bg-accent p-6 shadow-md  sm:p-9">
                <CardContent className="text-center sm:text-start gap-0">
                    <span className="text-lg font-extrabold text-primary">
                        تصميم وتطوير
                    </span>
                    <h3 className="mt-1 text-3xl font-black ">
                        عمر معتز سلام
                    </h3>
                    <p className="mt-1 font-bold text-muted-foreground">
                        Front-End Developer
                    </p>
                    <p className="mt-4 leading-7 text-[#7d766e]">
                        قمت بتطوير هذا الموقع بالاعتماد على خبرتي في مجال الـ Front-End باستخدام Next.js وTypeScript وTailwind CSS وShadcn UI، بالإضافة إلى بناء الـ Back-End باستخدام Node.js وExpress.js وربطه بقاعدة بيانات MongoDB لتقديم تجربة متكاملة.                    </p>
                </CardContent>
            </Card>

        </section>
    )
}
