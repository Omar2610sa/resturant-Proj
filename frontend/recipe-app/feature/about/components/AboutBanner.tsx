import { MoveLeftIcon } from "lucide-react";
import Link from "next/link";

export default function AboutBanner() {
    return (
        <section className="container">
            <div className="relative mx-auto flex flex-col  items-center sm:items-start justify-between gap-7 overflow-hidden rounded-3xl bg-primary px-6 py-10 text-white shadow-xl sm:px-10 sm:py-12 md:flex-row md:items-center lg:px-14">
                <div className="pointer-events-none absolute -left-16 -top-24 size-64 rounded-full border-[34px] border-white/10" />
                <div className="pointer-events-none absolute -bottom-24 right-1/3 size-52 rounded-full bg-white/5" />
                <div className="relative z-10 text-center sm:">
                    <h2 className="text-3xl font-black sm:text-4xl">
                        انضم إلى مجتمع مذاق
                    </h2>
                    <p className="mt-3 max-w-2xl leading-7 text-white/85">
                        أنشئ حسابك وابدأ رحلتك مع محتوى يلهم مائدتك ويضيف نكهة جديدة
                        إلى يومك.
                    </p>
                </div>
                <Link
                    href={'/register'}
                    className="relative z-10 flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-extrabold text-primary shadow-lg transition-transform hover:-translate-y-0.5 md:w-auto"
                >
                    إنشاء حساب
                    <MoveLeftIcon className="size-5" />
                </Link>
            </div>
        </section>
    )
}
