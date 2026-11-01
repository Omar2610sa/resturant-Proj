"use client";
import { FieldGroup } from "@/components/ui/field";
import { AuthCard } from "../../components/AuthCard";
import { AuthField } from "../../components/AuthField";
import { LockKeyhole, Mail, User2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRegister } from "../hooks/use-register";

export function RegisterForm({
    className,
}: React.ComponentProps<"div">) {
    const { form, onSubmit } = useRegister();
    const { register, formState: { errors, isSubmitting },
    } = form;
    return (
        <AuthCard
            title="أنشئ حسابك"
            description="انضم إلينا واكتشف عالمًا من النكهات"
            className={className}
        >
            <form onSubmit={onSubmit} noValidate>
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
                        className="w-full font-extrabold text-white"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "جاري إنشاء الحساب..." : "إنشاء الحساب"}
                    </Button>
                </FieldGroup>
            </form>
        </AuthCard>
    );
}