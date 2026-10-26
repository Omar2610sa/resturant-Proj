"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../login.schema";
import type { LoginFormValues } from "../login.schema";
import { loginService } from "../services/login.api";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { useStatusToast } from "@/hooks/use-status-toast";
import Cookies from "js-cookie"
import { useRouter } from "next/navigation";
import { TOKEN_NAME } from "@/lib/constants";
import { LockKeyhole, Mail } from "lucide-react";
import { AuthCard } from "../../components/AuthCard";
import { AuthField } from "../../components/AuthField";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "../../store/auth.store";

export function LoginForm({
    className,
}: React.ComponentProps<"div">) {
    const { showToast } = useStatusToast();
    const router = useRouter()
const setUser = useAuthStore((state) => state.setUser)
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
            
            if (response?.status === "success") {
                const token = response.data?.token
                const user = response.data
                Cookies.set(TOKEN_NAME, token)
                showToast({
                    type: "success",
                    description: "تم تسجيل الدخول بنجاح",
                })
                setUser(user)
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
                        {isSubmitting ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
                    </Button>
                </FieldGroup>
            </form>
        </AuthCard>
    );
}
