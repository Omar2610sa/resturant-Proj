"use client";
import {
    FieldGroup,
} from "@/components/ui/field";
import { LockKeyhole, Mail } from "lucide-react";
import { AuthCard } from "../../components/AuthCard";
import { AuthField } from "../../components/AuthField";
import { Button } from "@/components/ui/button";
import { useLogin } from "../hooks/use-login";
import { useTranslations } from "next-intl";

export function LoginForm({
    className,
}: React.ComponentProps<"div">) {
    const { form, onSubmit } = useLogin();
    const t = useTranslations("Auth.login");
    const { register, formState: { errors, isSubmitting },
    } = form;
    return (
        <AuthCard
            title={t("title")}
            description={t("description")}
            footerText={t("footerText")}
            footerLinkLabel={t("footerLink")}
            footerHref="/register"
            className={className}
        >
            <form onSubmit={onSubmit} noValidate>
                <FieldGroup>
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
                        autoComplete="current-password"
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
