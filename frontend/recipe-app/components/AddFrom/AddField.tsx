"use client";

import { AddFieldProps } from "@/types";
import { Field, FieldDescription, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import UploadField from "../shared/UploadField";
import { useTranslations } from "next-intl";

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
    currentImageUrl
}: AddFieldProps) {
    const formT = useTranslations("Dashboard.form");
    const difficultyT = useTranslations("Recipes.difficulty");

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
                        defaultValue=""
                        {...registration}
                        className="h-12 w-full rounded-xl border dark:bg-input/30 bg-[#fffefa] px-4 text-sm outline-none focus:ring-4 focus:ring-primary/10"
                    >
                        <option value="" disabled>{placeholder ?? formT("selectDifficulty")}</option>
                        <option value="easy">{difficultyT("easy")}</option>
                        <option value="medium">{difficultyT("medium")}</option>
                        <option value="hard">{difficultyT("hard")}</option>
                    </select>
                )
            }
            {upload && (
                <UploadField
                    id={id}
                    label={label}
                    registration={registration}
                    currentImageUrl={currentImageUrl}
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
