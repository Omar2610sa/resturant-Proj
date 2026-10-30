import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { AuthCardProps } from "../types";
import Image from "next/image";
import logo from "@/assets/Orange Chef Hat App Icon.png";



export function AuthCard({
    title,
    description,
    footerText,
    footerLinkLabel,
    footerHref,
    children,
    className,
}: AuthCardProps) {
    return (
        <div className={cn("w-full max-w-md", className)}>
            <Card className="rounded-3xl border shadow-sm">
                <CardHeader className="space-y-1 text-center">
                    <div className="mx-auto relative">
                        <Image src={logo} width={60} height={60} alt="logo" className="object-cover " />
                    </div>
                    <CardTitle className="text-3xl font-black">{title}</CardTitle>
                    <CardDescription className="leading-7">{description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                    {children}
                    {
                        footerText && (
                            <p className="flex items-center justify-center gap-2 text-center text-base text-muted-foreground">
                                <span>{footerText}</span>
                                <Link
                                    href={footerHref ?? ""}
                                    className="font-bold text-primary hover:underline"
                                >
                                    {footerLinkLabel}
                                </Link>
                            </p>
                        )
                    }
                </CardContent>
            </Card>
        </div>
    );
}