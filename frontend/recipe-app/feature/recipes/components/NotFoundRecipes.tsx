import { BadgeX } from 'lucide-react'

export default function NotFoundRecipes() {
    return (
        <div className="py-5 flex justify-center items-center flex-col gap-5">
            <div>
                <BadgeX className="size-20 text-primary" />
            </div>
            <div className="text-center flex flex-col justify-center items-center gap-3">
                <p className="text-3xl font-black">لا يوجد وصفة بهذا الإسم</p>
                <p className="text-lg font-bold text-gray-500">إبحث عن وصفة اخرى</p>
            </div>
        </div>
    )
}
