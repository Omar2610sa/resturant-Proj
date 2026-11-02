import { useStatusToast } from "@/hooks/use-status-toast";
import { RegisterFormValues, registerSchema } from "../schema/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { TOKEN_NAME } from "@/lib/constants";
import { registerService } from "../services/register.api";
import { useForm } from "react-hook-form";
import { useAuthStore } from "../../store/auth.store";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"
import { User } from "../../types";

export function useRegister() {
    const { showToast } = useStatusToast();
    const router = useRouter();
    const setUser = useAuthStore((state) => state.setUser)

    const form = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
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
        } catch {
            form.setError("root", {
                message: "حصل خطأ أثناء إنشاء الحساب, حاول مرة تانية",
            });
        }
    })
    return { form, onSubmit };
}