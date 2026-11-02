import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import Logo from "../Logo";
import { headerLinks } from "@/lib/navLinks";
import { socialLinks } from "@/lib/SocialLinks";

export default function Footer() {
    return (
        <footer className="bg-[#151414] text-white text-xl">
            <div className="mx-auto flex justify-between md:items-start space-y-10 md:space-x-10 container flex-col sm:px-8 md:flex-row">
                <div >
                    <Logo />
                    <p className="mt-4 max-w-sm text-md leading-7 text-gray-300 ">
                        وصفات منزلية موثوقة، نشاركها معك لتصنع لحظات ألذ حول المائدة.
                    </p>
                </div>
                <div >
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
                <div >
                    <h3 className="mb-4 font-extrabold">حسابك</h3>
                    <div className="flex flex-col items-start gap-3 text-md text-gray-300 ">
                        <Link href="/login" className="hover:text-primary duration-200">تسجيل الدخول</Link>
                        <Link href="/register" className="hover:text-primary duration-200">إنشاء حساب</Link>
                    </div>
                </div>
                <div>
                    <h3 className="mb-4 font-extrabold">معلومات التواصل</h3>
                    <div className="flex flex-col items-start gap-3  text-gray-300 ">
                        <div className="duration-200 flex items-center gap-2" >
                            <Phone className="size-5" />
                            <span>
                                01234567890
                            </span>
                        </div>
                        <div className=" duration-200 flex items-center gap-2" >
                            <Mail className="size-5" />info@mazzak.com
                        </div>
                        {/* Social Links */}
                        <div className="flex mt-2 gap-4  rounded-full ">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="size-10 flex items-center border-2 border-gray-300 rounded-full justify-center  hover:border-primary group transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="size-4 text-text group-hover:text-primary" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t flex flex-col gap-3 border-white/70 px-5 py-5 text-center text-sm text-gray-300">
                جميع الحقوق محفوظة لمذاق © 2026
                <span className="text-lg">
                    من تطوير وبرمجة <Link href="https://omarsalam-portofolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white duration-200">عمر معتز</Link>
                </span>
            </div>
        </footer>
    );
}
