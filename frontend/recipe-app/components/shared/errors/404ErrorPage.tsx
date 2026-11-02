import Image from "next/image";
import ErrorButton from "../buttons/ErrorButton";
import NotFound from "@/assets/404.png";
export default function Error404Page() {
    return (
        <div className="h-fit grid items-center py-20">
            <div className="flex justify-center flex-col gap-4 items-center">
                <Image
                    width="500"
                    height="500"
                    src={NotFound}
                    alt="not found icon"

                />
                <h2 className="text-center font-bold lg:text-2xl text-lg  ">
                    {"page not found"}
                </h2>
                <h2 className="text-center lg:w-[30%] w-3/4 mx-auto font-medium leading-8 text-lg text-sub">
                    {"page not found description"}
                </h2>
                <ErrorButton title={"Back to home"} link="/" />
            </div>
        </div>
    )
}


