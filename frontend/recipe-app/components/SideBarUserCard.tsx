"use client";
import { User2Icon } from 'lucide-react'
import Cookies from "js-cookie"

export default  function SideBarUserCard() {
    const userName = Cookies.get("userName")
    const userRole =  Cookies.get("userRole")
    return (
        <div className="flex items-center justify-between px-2  text-md py-3 rounded-xl">
            <div className='flex items-center gap-3'>
                <span className="grid size-7 place-items-center rounded-full bg-primary/70 font-black text-white">
                    <User2Icon className="size-4" />
                </span>
                <p className="truncate  font-extrabold">
                    {userName}
                </p>
            </div>
            <p>
                الدور : {userRole === "admin" ? "مسؤول" : "مستخدم"}
            </p>
        </div>
    )
}
