import { useStatusToast } from "@/hooks/use-status-toast";
import { RegisterFormValues, createRegisterSchema } from "../schema/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { TOKEN_NAME } from "@/lib/constants";
import { registerService } from "../services/register.api";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"
import { useTranslations } from "next-intl";

export function useRegister() {
    const { showToast } = useStatusToast();
    const router = useRouter();
    const t = useTranslations("Auth.register");
    const validationT = useTranslations("Auth.validation");
    const schema = createRegisterSchema({
        invalidEmail: validationT("invalidEmail"),
        passwordMin: validationT("passwordMin"),
        firstNameMin: validationT("firstNameMin"),
        lastNameMin: validationT("lastNameMin"),
    });

    const form = useForm<RegisterFormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
    });
    const onSubmit = form.handleSubmit(async (data) => {
        try {
            const response = await registerService(data);

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