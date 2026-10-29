import { AddFieldProps } from "@/types";
import { Field, FieldDescription, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import UploadField from "../shared/UploadField";

export default function AddField({
    id,
    label,
    type = "text",
    placeholder,
    autoComplete,
    defaultValue,
    error,
    input = false,
    registration,
    textarea = false,
    select = false,
    upload = false,
    // values = [],
}: AddFieldProps) {
    return (
        <Field>
            <FieldLabel htmlFor={id} className="text-lg font-extrabold">
                {label}
            </FieldLabel>

            {input && (
                <Input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    aria-invalid={!!error}
                    {...registration}
                    defaultValue={defaultValue}
                    className="h-12 w-full rounded-xl border bg-[#fffefa] px-4 text-sm outline-none focus:ring-4 focus:ring-primary/10"
                />
            )}

            {textarea && (
                <Textarea
                    id={id}
                    placeholder={placeholder}
                    aria-invalid={!!error}
                    {...registration}
                    className="min-h-32 w-full rounded-xl border bg-[#fffefa] px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary/10"
                />
            )}
            {
                select && (
                    <select
                        defaultValue='اختر مستوى الصعوبة'
                        {...registration}
                        className="h-12 w-full rounded-xl border bg-[#fffefa] px-4 text-sm outline-none focus:ring-4 focus:ring-primary/10"
                    >
                        <option value="easy">سهل</option>
                        <option value="medium">متوسط</option>
                        <option value="hard">صعب</option>
                    </select>
                )
            }
            {upload && (
                <UploadField
                    id={id}
                    label={label}
                    registration={registration}
                    error={error}
                />
            )}
            {error && (
                <FieldDescription role="alert" className="text-destructive">
                    {error}
                </FieldDescription>
            )}
        </Field>
    );
}
