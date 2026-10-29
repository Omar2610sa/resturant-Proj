"use client";
import { FieldGroup } from "@/components/ui/field";
import { AuthCard } from "../../components/AuthCard";
import { AuthField } from "../../components/AuthField";
import { LockKeyhole, Mail, User2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormValues, registerSchema } from "../register.schema";
import { Button } from "@/components/ui/button";
import { registerService } from "../services/register.api";
import { TOKEN_NAME } from "@/lib/constants";
import Cookies from "js-cookie"
import { useRouter } from "next/navigation";
import { useStatusToast } from "@/hooks/use-status-toast";
import { useAuthStore } from "../../store/auth.store";
import { User } from "../../types";



export function RegisterForm({
    className,
}: React.ComponentProps<"div">) {
    const { showToast } = useStatusToast();
    const router = useRouter()
    const setUser = useAuthStore((state) => state.setUser)

    const { register, handleSubmit, setError, formState: { errors, isSubmitting },
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
    });

    async function onSubmit(data: RegisterFormValues) {
        try {
            const response = await registerService(data);

            if (response?.status === "success") {
                const token = response.data?.token
                const user = response.data as unknown as User
                Cookies.set(TOKEN_NAME, token)
                showToast({
                    type: "success",
                    description: "تم إنشاء الحساب بنجاح",
                })
                setUser(user)
                router.refresh()
                router.push("/")
            }
            else {
                showToast({
                    type: "error",
                    description: "فشل إنشاء الحساب راجع بياناتك وحاول مرة تانية",
                })
            }
        } catch (error) {
            setError("root", {
                message: "حصل خطأ أثناء إنشاء الحساب, حاول مرة تانية",
            });
        }
    }
    return (
        <AuthCard
            title="مرحبًا بعودتك"
            description="سجّل دخولك لتحتفظ بوصفاتك المفضلة."
            footerText="ليس لديك حساب؟"
            footerLinkLabel="إنشاء حساب"
            footerHref="/register"
            className={className}
        >
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <FieldGroup>
                    <div className="flex justify-between gap-5">
                        <AuthField
                            id="firstName"
                            label="الإسم الاول"
                            icon={User2}
                            type="text"
                            placeholder="إسمك الاول"
                            registration={register("firstName")}
                            error={errors.firstName?.message}
                        />
                        <AuthField
                            id="lastName"
                            label="الإسم الاخير"
                            icon={User2}
                            type="text"
                            placeholder="إسمك الاخير"
                            registration={register("lastName")}
                            error={errors.lastName?.message}
                        />
                    </div>
                    <AuthField
                        id="email"
                        label="البريد الإلكتروني"
                        icon={Mail}
                        type="email"
                        autoComplete="email"
                        placeholder="بريدك الإلكتروني"
                        registration={register("email")}
                        error={errors.email?.message}
                    />
                    <AuthField
                        id="password"
                        label="كلمة المرور"
                        icon={LockKeyhole}
                        type="password"
                        autoComplete="كلمة المرور"
                        placeholder=""
                        registration={register("password")}
                        error={errors.password?.message}
                    />
                    <Button
                        type="submit"
                        size="lg"
                        className="w-full font-extrabold"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "جاري إنشاء الحساب..." : "إنشاء الحساب"}
                    </Button>
                </FieldGroup>
            </form>
        </AuthCard>
    );
}