import { BreadCrumb } from "@/components/shared/Breadcrumb/BreadCrumb";
import { LoginForm } from "@/feature/auth/login/components/LoginForm";

export default function page() {
    return (
        <section className="container flexSection">
            <BreadCrumb secondLink="تسجيل دخول" />
            <div className="flex flex-1 items-center justify-center">
                <LoginForm />
            </div>
        </section>
    )
}
