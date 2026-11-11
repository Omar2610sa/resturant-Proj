import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cookies } from "next/headers";

export default async function ArrorDirectionIcon() {
    const cookieStore = await cookies();
    const isRtl = cookieStore.get("NEXT_LOCALE")?.value === "ar"
    return (
        <>
            {
                isRtl ? <ArrowLeft className="size-5" /> : <ArrowRight className="size-5" />
            }
        </>
    )
}
