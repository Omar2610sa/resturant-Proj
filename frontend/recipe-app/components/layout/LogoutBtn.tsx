"use client"
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react'
import Cookies from "js-cookie";
import { TOKEN_NAME } from '@/lib/constants';
import { Button } from '@base-ui/react';
import { useStatusToast } from '@/hooks/use-status-toast';


export default function LogoutBtn() {
    const router = useRouter();
        const { showToast } = useStatusToast();
    
    const handleLogout = async () => {
        Cookies.remove(TOKEN_NAME)
        showToast({
            type: "success",
            description: "تم تسجيل الخروج بنجاح",
        })
        router.push("/")
        router.refresh()
    }
    return (
        <Button
            onClick={handleLogout}
            className="rounded-xl flex items-center gap-2 bg-destructive px-5 py-2.5 font-bold text-white shadow-sm transition-all  hover:bg-destructive"
        >
            <LogOut className="size-5 " />
            تسجيل خروج
        </Button>)
}
