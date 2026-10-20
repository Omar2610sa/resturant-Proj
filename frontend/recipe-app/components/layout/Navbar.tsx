import { Button } from "@base-ui/react";
import { HatGlasses } from "lucide-react";
import Link from "next/link";

export default function Navbar() {

    const headerLinks = [
        {
            title: 'الرئيسية',
            link: '/',
        },
        {
            title: 'الوصفات',
            link: '/recipes',
        },
        {
            title: 'من نحن',
            link: '/',
        },
    ]
    return (
        <header className="sticky top-0 z-50 border-b border-[#eee9e2] bg-[#fffdf9]/95 backdrop-blur-xl text-xl">
            <div className="mx-auto flex h-10  items-center justify-between  container">
                {/* <Logo /> */}
                <div className="flex items-center gap-5">
                    <div className="size-12 bg-primary flex justify-center items-center rounded-xl">
                        <HatGlasses className="text-white size-6" />
                    </div>
                    <span className="font-bold text-3xl">مَذاق</span>
                </div>
                <nav className="hidden items-center   md:flex space-x-12" >

                    {headerLinks.map((link, index) => {
                        return (
                            <Link key={index} href={link.link} className="font-medium hover:text-primary duration-200" >
                                {link.title}
                            </Link>
                        )
                    })}
                </nav>
                <div className="hidden items-center gap-3 md:flex">
                    <Link
                        href="/login"
                    >
                        <Button className="rounded-xl px-4 py-2.5 font-bold  transition-colors hover:bg-gray-200/70"
                        >
                            تسجيل الدخول
                        </Button>
                    </Link>
                    <Link
                        href="/register"
                        className="rounded-xl bg-primary px-5 py-2.5 font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#d94728]"
                    >
                        إنشاء حساب
                    </Link>
                </div>
            </div>
        </header>
    )
}
