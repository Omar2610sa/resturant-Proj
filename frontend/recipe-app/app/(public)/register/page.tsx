import { RegisterForm } from "@/feature/auth/register/components/RegisterForm";

export async function generateMetadata() {
    return {
        title: "مَذاق | إنشاء حساب",
        description: "قم بإنشاء حسابك لإضافة وصفاتك",
    };
}
export default function page() {
    return (
        <section className="container ">
            <div className="flex flex-1 items-center justify-center">
                <RegisterForm />
            </div>
        </section>
    )
}
