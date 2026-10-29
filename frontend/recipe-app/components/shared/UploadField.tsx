"use client"
import { Upload } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { AddFieldProps } from "@/types";

export default function UploadField({ 
    label,
    error,
    id,
    registration,

}: AddFieldProps) {
    const [preview, setPreview] = useState<string | null>(null);

    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    return (
        <>
                <div
                    className="relative flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-gray-300 p-6 transition hover:border-primary hover:bg-primary/5"
                >
                    {!preview ? (
                        <div className="flex flex-col items-center justify-center gap-3 py-6 text-center">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                                <Upload className="size-5 text-primary" />
                            </div>

                            <span className="text-sm font-medium text-gray-700">
                                اسحب الصورة هنا أو اضغط للاختيار
                            </span>

                            <p className="text-xs text-gray-500">
                                PNG أو JPG أو WEBP، حتى 2MB
                            </p>
                        </div>
                    ) : (
                        <div className="w-full space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-700">
                                    معاينة الصورة
                                </span>

                                <span className="text-xs text-gray-500">
                                    {label}
                                </span>
                            </div>

                            <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-muted">
                                <Image
                                    src={preview}
                                    alt={`معاينة ${label}`}
                                    fill
                                    unoptimized
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 600px"
                                />
                            </div>

                            <p className="text-center text-xs text-gray-500">
                                اضغط على الصورة لاختيار صورة أخرى
                            </p>
                        </div>
                    )}

                    <Input
                        id={id}
                        type="file"
                        accept="image/*"
                        aria-invalid={!!error}
                        name={registration?.name}
                        ref={registration?.ref}
                        onBlur={registration?.onBlur}
                        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                        onChange={(event) => {
                            const file = event.target.files?.[0];
                            registration?.onChange(event);

                            setPreview((current) => {
                                if (current) URL.revokeObjectURL(current);
                                return file ? URL.createObjectURL(file) : null;
                            });
                        }}
                    />
                </div>
        </>
    );
}
