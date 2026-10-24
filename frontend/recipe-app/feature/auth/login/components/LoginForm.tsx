
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "../login.schema";
import type { LoginFormValues } from "../login.schema";
import { loginService } from "../services/login.api";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useStatusToast } from "@/hooks/use-status-toast";
import Cookies from "js-cookie"
import { useRouter } from "next/navigation";
import { TOKEN_NAME } from "@/lib/constants";
import Logo from "@/components/Logo";
import { LockKeyhole, Mail } from "lucide-react";



export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const { showToast } = useStatusToast();
    const router = useRouter()

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function onSubmit(data: LoginFormValues) {
        try {
            const response = await loginService(data);
            const token = response.data?.token

            if (response?.status === "success") {
                Cookies.set(TOKEN_NAME, token)
                showToast({
                    type: "success",
                    description: "تم تسجيل الدخول بنجاح",
                })
                router.refresh()
                router.push("/")
            }
            else {
                showToast({
                    type: "error",
                    description: "فشل تسجيل الدخول، راجع بياناتك وحاول مرة تانية",
                })
            }
        } catch (error) {

            setError("root", {
                message: "حصل خطأ أثناء تسجيل الدخول، حاول مرة تانية",
            });
        }
    }

    return (
        <div className={cn("w-full max-w-md ", className)} {...props}>
            <Card className="rounded-3xl border  shadow-sm">
                <CardHeader className="space-y-2 text-center">

                    <CardTitle className="text-3xl font-black">
                        أنشئ حسابك
                    </CardTitle>
                    <CardDescription className="leading-7 text-[#77716a]">
                        انضم إلينا واكتشف عالمًا من النكهات.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                        <FieldGroup>
                            <Field>
                                <FieldLabel className=" block text-lg  font-extrabold " htmlFor="email">
                                    البريد الإلكتروني
                                </FieldLabel>
                                <span className="relative block">
                                    <Mail className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#9a9289]"
                                    />
                                    <Input
                                        {...register("email")}
                                        id="email"
                                        type="email"
                                        placeholder="بريدك الإلكتروني"
                                        autoComplete="email"
                                        aria-invalid={!!errors.email}
                                        className="h-13 w-full rounded-xl border border-[#dfd8cf] bg-bg-input pr-12 pl-4 text-right text-sm outline-none transition "
                                    />

                                    {errors.email && (
                                        <FieldDescription className="text-red-500">
                                            {errors.email.message}
                                        </FieldDescription>
                                    )}
                                </span>
                            </Field>

                            <Field>
                                <FieldLabel className=" block text-lg  font-extrabold " htmlFor="password">
                                    كلمة المرور
                                </FieldLabel>
                                <span className="relative block">
                                    <LockKeyhole className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#9a9289]"
                                    />
                                    <Input
                                        {...register("password")}
                                        id="password"
                                        type="password"
                                        placeholder="كلمة المرور"
                                        autoComplete="current-password"
                                        aria-invalid={!!errors.password}
                                        className="h-13 w-full rounded-xl border border-[#dfd8cf] bg-bg-input pr-12 pl-4 text-right text-sm outline-none transition placeholder:text-[#aaa39b] focus:border-[#e95432] focus:ring-4 focus:ring-[#e95432]/10"
                                    />

                                    {errors.password && (
                                        <FieldDescription className="text-red-500">
                                            {errors.password.message}
                                        </FieldDescription>
                                    )}
                                </span>
                            </Field>

                            {errors.root && (
                                <p role="alert" className="text-sm text-red-500">
                                    {errors.root.message}
                                </p>
                            )}

                            <Field>
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full font-extrabold"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting
                                        ? "جاري تسجيل الدخول..."
                                        : "تسجيل الدخول"}
                                </Button>

                                <FieldDescription className="text-center text-lg flex gap-3 justify-center items-center">
                                    <span>
                                        ليس لديك حساب؟{" "}
                                    </span>
                                    <Link
                                        href="/register"
                                        className="font-bold text-primary hover:underline"
                                    >
                                        إنشاء حساب
                                    </Link>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
