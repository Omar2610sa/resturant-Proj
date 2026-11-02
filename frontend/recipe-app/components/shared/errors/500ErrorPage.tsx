import Image from "next/image";
import ErrorButton from "../buttons/ErrorButton";
import NotFound from "@/assets/500.png";

export default function Error500Page() {
    return (
        <div className="h-[100vh] grid items-center container">
            <div className="flex justify-center flex-col gap-4 items-center">
                <Image
                    width="400"
                    height="400"
                    src={NotFound}
                    alt="not found icon"
                />
                <h2 className="text-center font-bold lg:text-3xl text-lg  ">
                    هذه الصفحة لا تعمل
                </h2>
                <h2 className="text-center lg:w-105 w-3/4 mx-auto font-medium leading-8 text-xl text-sub">
تأكد فقط من اتصالك بالإنترنت، ثم حاول تحديث الصفحة مرة أخرى. إذا استمرت المشكلة، يُرجى المحاولة لاحقًا.                </h2>
                <ErrorButton title={"العودة إلى الصفحة الرئيسية"} link="/" />
            </div>
        </div>
    )
}