import Link from "next/link";
import { ChefHat } from "lucide-react";

export default function NotFound() {
    return (
        <main className="flex container flex-col items-center justify-center  space-y-6">
            <span className="flex size-20 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/25">
                <ChefHat className="size-12 text-accent group-hover:rotate-25 duration-200" />
            </span>
            <div className="space-y-3 flex flex-col items-center justify-center text-center ">
                <h2 className=" text-5xl font-semibold">
                    الوصفة غير موجودة
                </h2>

                <p className="text-muted-foreground text-xl">
                    ربما تم تغيير رابط الوصفة أو إزالتها.
                </p>

                <Link
                    href="/recipes"
                    className="rounded-xl bg-primary px-5 py-2.5 font-bold text-white shadow-sm transition-all  hover:bg-primary"
                >
                    العودة إلى الوصفات
                </Link>
            </div>
        </main>
    );
}