import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormValues, createLoginSchema } from "../login.schema";
import { useRouter } from "next/navigation";
import { useStatusToast } from "@/hooks/use-status-toast";
import { loginService } from "../services/login.api";
import { TOKEN_NAME } from "@/lib/constants";
import Cookies from "js-cookie"
import { useTranslations } from "next-intl";

export function useLogin() {
    const { showToast } = useStatusToast();
    const router = useRouter();
    const t = useTranslations("Auth.login");
    const validationT = useTranslations("Auth.validation");
    const schema = createLoginSchema({
        invalidEmail: validationT("invalidEmail"),
        passwordMin: validationT("passwordMin"),
    });

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const onSubmit = form.handleSubmit(async (data) => {
        try {
            const response = await loginService(data);
            if (response?.status === "success") {
                const token = response.data?.token
                const userName  = response.data.firstName + " " + response.data.lastName
                const userRole  = response.data.role
                Cookies.set(TOKEN_NAME, token)
                Cookies.set("userName", userName)
                Cookies.set("userRole", userRole)
                showToast({
                    type: "success",
                    description: t("success"),
                })
                router.refresh()
                router.push("/")
            }
            else {
                showToast({
                    type: "error",
                    description: t("failure"),
                })
            }
        } catch {
            form.setError("root", {
                message: t("error"),
            });
        }
    })
    return { form, onSubmit };
}