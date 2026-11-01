import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormValues, loginSchema } from "../login.schema";
import { useRouter } from "next/navigation";
import { useStatusToast } from "@/hooks/use-status-toast";
import { loginService } from "../services/login.api";
import { TOKEN_NAME } from "@/lib/constants";
import { useAuthStore } from "../../store/auth.store";
import { User } from "../../types";
import Cookies from "js-cookie"


export function useLogin() {
    const { showToast } = useStatusToast();
    const router = useRouter();
    const setUser = useAuthStore((state) => state.setUser)

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
                const user = response.data as unknown as User
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
        } catch {
            form.setError("root", {
                message: "حصل خطأ أثناء تسجيل الدخول، حاول مرة تانية",
            });
        }
    })
    return { form, onSubmit };
}