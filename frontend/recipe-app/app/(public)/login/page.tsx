import { LoginForm } from "@/feature/auth/login/components/LoginForm";

export default function page() {
    return (
        <section className="container ">
            <div className="flex flex-1 items-center justify-center">
                <LoginForm />
            </div>
        </section>
    )
}
