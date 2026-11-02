"use client"

import { useEffect } from "react"
import Aos from "aos"

import "aos/dist/aos.css"

export default function AnimationLayout({ children }: { children: React.ReactNode }) {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            anchorPlacement: "top-bottom",
        })
    }, [])
    
    return (
        <>
            {children}
        </>
    )
}