import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormValues, loginSchema } from "../login.schema";
import { useRouter } from "next/navigation";
import { useStatusToast } from "@/hooks/use-status-toast";
import { loginService } from "../services/login.api";
import { TOKEN_NAME } from "@/lib/constants";
import Cookies from "js-cookie"

export function useLogin() {
    const { showToast } = useStatusToast();
    const router = useRouter();

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
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
        } catch {
            form.setError("root", {
                message: "حصل خطأ أثناء تسجيل الدخول، حاول مرة تانية",
            });
        }
    })
    return { form, onSubmit };
}