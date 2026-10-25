import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { AuthFieldProps } from "../types";



export function AuthField({
    id,
    label,
    icon: Icon,
    registration,
    type = "text",
    placeholder,
    autoComplete,
    error,
}: AuthFieldProps) {
    return (
        <Field>
            <FieldLabel htmlFor={id} className="text-base font-extrabold">
                {label}
            </FieldLabel>

            <div className="relative">
                <Icon className="pointer-events-none absolute start-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    aria-invalid={!!error}
                    className="h-12 rounded-xl ps-12 pe-4 text-start"
                    {...registration}
                />
            </div>

            {error && (
                <FieldDescription role="alert" className="text-destructive">
                    {error}
                </FieldDescription>
            )}
        </Field>
    );
}