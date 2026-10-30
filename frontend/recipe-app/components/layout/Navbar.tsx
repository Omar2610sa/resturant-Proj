import Link from "next/link";
import Logo from "../Logo";
import { DarkModeToggle } from "../DarkMode";
import { Suspense } from "react";
import NavbarAuth from "./NavbarAuth";
import { headerLinks } from "@/lib/navLinks";
import MobileNav from "./MobileNav";
import MobileNavAuth from "./MobileNavAuth";
export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b  bg-accent backdrop-blur-xl text-xl">
            <div className="mx-auto flex h-10   items-center justify-between  container">
                {/* <Logo /> */}
                <Logo />
                <nav className="hidden items-center   md:flex space-x-12" >

                    {headerLinks.map((link, index) => {
                        return (
                            <Link key={index} href={link.link} className="font-bold hover:text-primary duration-200" >
                                {link.title}
                            </Link>
                        )
                    })}
                </nav>
                <div className="hidden items-center gap-3 md:flex">
                    <DarkModeToggle />
                    <Suspense fallback={<div className="h-10 w-24" />}>
                        <NavbarAuth />
                    </Suspense>
                </div>

                <MobileNav links={headerLinks}>
                    <Suspense fallback={<div className="h-10" />}>
                        <MobileNavAuth />
                    </Suspense>
                </MobileNav>
            </div>
        </header>
    )
}
