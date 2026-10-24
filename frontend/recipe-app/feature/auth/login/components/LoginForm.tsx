import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div className={cn("w-full max-w-md md:max-w-xl", className)} {...props}>
            <Card className="rounded-2xl border shadow-sm">
                <CardHeader className="space-y-2 text-center">
                    <CardTitle className="text-3xl font-extrabold">
                        مرحبًا بك في مَذاق!
                    </CardTitle>
                    <CardDescription>
                        سجّل دخولك لتصفح وصفاتك المفضلة
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form noValidate>
                        <FieldGroup>
                            <Field>
                                <FieldLabel className="text-lg font-bold" htmlFor="email">البريد الإلكتروني</FieldLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="بريدك الإلكتروني"
                                    autoComplete="email"
                                    className="h-11 text-start"
                                />
                            </Field>

                            <Field>
                                <FieldLabel className="text-lg font-bold" htmlFor="password">كلمة المرور</FieldLabel>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="كلمة المرور"
                                    autoComplete="current-password"
                                    className="h-11 text-start"
                                />
                            </Field>

                            <Field>
                                <Button type="submit" size="lg" className="w-full font-extrabold">
                                    تسجيل الدخول
                                </Button>
                                <FieldDescription className="text-center">
                                    ليس لديك حساب؟{" "}
                                    <Link
                                        href="/register"
                                        className="font-bold text-primary hover:underline"
                                    >
                                        إنشاء حساب
                                    </Link>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}