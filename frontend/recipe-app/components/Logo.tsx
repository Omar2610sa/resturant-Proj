import Image from "next/image";
import hatIcon from "@/assets/hat.png"
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center group gap-5">
            <div className="size-14 bg-primary relative flex justify-center items-center rounded-xl">
                <div className="bg-white flex justify-center items-center size-9 rounded-xl">
                    <Image
                        src={hatIcon}
                        alt="hat icon"
                        className="text-white size-7 absolute group-hover:rotate-25 group-hover:scale-110 duration-200" />
                </div>
            </div>
            <span className="font-extrabold  text-3xl">مَذاق</span>
        </Link>
    )
}
