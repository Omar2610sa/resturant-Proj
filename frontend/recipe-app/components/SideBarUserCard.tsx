"use client"
import { useAuthStore } from '@/feature/auth/store/auth.store';
import { User2Icon } from 'lucide-react'

export default function SideBarUserCard() {
    const user = useAuthStore((state) => state.user);
    return (
        <div className="flex items-center justify-between px-2  text-lg py-3 rounded-xl">
            <div className='flex items-center gap-3'>
                <span className="grid size-7 place-items-center rounded-full bg-primary/70 font-black text-white">
                    <User2Icon className="size-4" />
                </span>
                <p className="truncate text-md font-extrabold">
                    {user?.firstName} {user?.lastName}
                </p>
            </div>
            <p className="">
                الدور : {user?.role === "admin" ? "مسؤول" : "مستخدم"}
            </p>
        </div>
    )
}
