import { HatGlasses } from "lucide-react";
import Link from "next/link";
import Logo from "../Logo";
import { headerLinks } from "@/lib/navLinks";

export default function Footer() {
    return (
        <footer className="bg-[#151414] text-white text-xl">
            <div className="mx-auto flex justify-between md:items-start space-y-10 md:space-x-10 container flex-col sm:px-8 md:flex-row">
                <div>
                    <Logo />
                    <p className="mt-4 max-w-sm text-md leading-7 text-gray-300 ">
                        وصفات منزلية موثوقة، نشاركها معك لتصنع لحظات ألذ حول المائدة.
                    </p>
                </div>
                <div>
                    <h3 className="mb-4 font-extrabold">روابط سريعة</h3>
                    <div className="flex flex-col items-start gap-3 text-md text-gray-300 ">
                        {
                            headerLinks.map((link, index) => {
                                return (
                                    <Link
                                        key={index}
                                        href={link.link}
                                        className="hover:text-primary duration-200"
                                    >
                                        {link.title}
                                    </Link>
                                )
                            })
                        }

                    </div>
                </div>
                <div>
                    <h3 className="mb-4 font-extrabold">حسابك</h3>
                    <div className="flex flex-col items-start gap-3 text-md text-gray-300 ">
                        <Link href="" className="hover:text-primary duration-200">تسجيل الدخول</Link>
                        <Link href="" className="hover:text-primary duration-200">إنشاء حساب</Link>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/70 px-5 py-5 text-center text-sm text-gray-300">
                جميع الحقوق محفوظة لمذاق © 2026
            </div>
        </footer>
    );
}
