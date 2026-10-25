import { BreadCrumb } from "@/components/shared/Breadcrumb/BreadCrumb";
import { RegisterForm } from "@/feature/auth/register/components/RegisterForm";

export default function page() {
    return (
        <section className="container ">
            <div className="flex flex-1 items-center justify-center">
                <RegisterForm />
            </div>
        </section>
    )
}
