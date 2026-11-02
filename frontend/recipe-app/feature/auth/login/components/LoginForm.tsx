"use client";
import {
    FieldGroup,
} from "@/components/ui/field";
import { LockKeyhole, Mail } from "lucide-react";
import { AuthCard } from "../../components/AuthCard";
import { AuthField } from "../../components/AuthField";
import { Button } from "@/components/ui/button";
import { useLogin } from "../hooks/use-login";

export function LoginForm({
    className,
}: React.ComponentProps<"div">) {
    const { form, onSubmit } = useLogin();
    const { register, formState: { errors, isSubmitting },
    } = form;
    return (
        <AuthCard
            title="مرحبًا بعودتك"
            description="سجّل دخولك لتحتفظ بوصفاتك المفضلة."
            footerText="ليس لديك حساب؟"
            footerLinkLabel="إنشاء حساب"
            footerHref="/register"
            className={className}
        >
            <form onSubmit={onSubmit} noValidate>
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
                        placeholder="كلمة السر الخاصة بك"
                        registration={register("password")}
                        error={errors.password?.message}
                    />
                    <Button
                        type="submit"
                        size="lg"
                        className="w-full font-extrabold text-white"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
                    </Button>
                </FieldGroup>
            </form>
        </AuthCard>
    );
}
