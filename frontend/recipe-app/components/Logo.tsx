import Link from "next/link";
import { ChefHat } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function Logo() {
        const t = await getTranslations("logo");
    
    return (
        <Link href="/" className="flex items-center group gap-3">
            <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/25">
                <ChefHat className="size-7 text-accent group-hover:rotate-25 duration-200" />
            </span>
            <span className="font-extrabold  text-3xl">{t('name')}</span>
        </Link>
    )
}
