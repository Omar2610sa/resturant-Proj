"use client";
import { FieldGroup } from "@/components/ui/field";
import { AuthCard } from "../../components/AuthCard";
import { AuthField } from "../../components/AuthField";
import { LockKeyhole, Mail, User2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRegister } from "../hooks/use-register";
import { useTranslations } from "next-intl";

export function RegisterForm({
    className,
}: React.ComponentProps<"div">) {
    const { form, onSubmit } = useRegister();
    const t = useTranslations("Auth.register");
    const { register, formState: { errors, isSubmitting },
    } = form;
    return (
        <AuthCard
            title={t("title")}
            description={t("description")}
            className={className}
        >
            <form onSubmit={onSubmit} noValidate>
                <FieldGroup>
                    <div className="flex justify-between gap-5">
                        <AuthField
                            id="firstName"
                            label={t("firstNameLabel")}
                            icon={User2}
                            type="text"
                            placeholder={t("firstNamePlaceholder")}
                            registration={register("firstName")}
                            error={errors.firstName?.message}
                        />
                        <AuthField
                            id="lastName"
                            label={t("lastNameLabel")}
                            icon={User2}
                            type="text"
                            placeholder={t("lastNamePlaceholder")}
                            registration={register("lastName")}
                            error={errors.lastName?.message}
                        />
                    </div>
                    <AuthField
                        id="email"
                        label={t("emailLabel")}
                        icon={Mail}
                        type="email"
                        autoComplete="email"
                        placeholder={t("emailPlaceholder")}
                        registration={register("email")}
                        error={errors.email?.message}
                    />
                    <AuthField
                        id="password"
                        label={t("passwordLabel")}
                        icon={LockKeyhole}
                        type="password"
                        autoComplete="new-password"
                        placeholder={t("passwordPlaceholder")}
                        registration={register("password")}
                        error={errors.password?.message}
                    />
                    <Button
                        type="submit"
                        size="lg"
                        className="w-full font-extrabold text-white"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? t("submitting") : t("submit")}
                    </Button>
                </FieldGroup>
            </form>
        </AuthCard>
    );
}