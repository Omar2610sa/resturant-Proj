"use client"
import AddCard from '@/components/AddFrom/AddCard'
import AddField from '@/components/AddFrom/AddField'
import { FieldGroup } from '@/components/ui/field'
import { useForm } from 'react-hook-form';
import { EditRecipeFormValues, editRecipeSchema, RecipeFormValues } from '../../schema/recipe.schema';
import type { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Separator } from '@/components/ui/separator';
import { CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useStatusToast } from '@/hooks/use-status-toast'
import { useRouter } from 'next/navigation'
import { respones } from '@/types'
import Link from 'next/link'
import { getImageUrl } from '@/lib/image';
import { editRecipeApi } from '../../services/editRecipe.api';

type EditRecipeFormProps = {
    initialValues: RecipeFormValues & { _id: string };
};

export default function EditRecipeForm({
    initialValues,
}: EditRecipeFormProps) {
    const { showToast } = useStatusToast();
    const router = useRouter()
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<z.input<typeof editRecipeSchema>, unknown, EditRecipeFormValues>({
        resolver: zodResolver(editRecipeSchema),
        defaultValues: initialValues
    });

    const coverImage = initialValues.coverImage

    const difficultyOptions = [
        { label: "سهل", value: "easy" },
        { label: "متوسط", value: "medium" },
        { label: "صعب", value: "hard" },
    ];

    const onSubmit = async (values: EditRecipeFormValues) => {
        try {
            const response = await editRecipeApi({
                values: values as Parameters<typeof editRecipeApi>[0]['values'],
                id: initialValues._id,
            }) as respones;
            if (response?.status === "success") {
                showToast({
                    type: "success",
                    description: "تم تعديل الوصفة بنجاح",
                })
                router.refresh()
                router.push("/dashboard/recipes")
            } else {
                showToast({
                    type: "error",
                    description: "فشل في تعديل الوصفة وحاول مرة تانية",
                });
            }
        } catch {
            setError("root", {
                message: "حصل خطأ أثناء تسجيل الدخول، حاول مرة تانية",
            });
        }
    };

    return (
        <AddCard
            title="تعديل بيانات الوصفة"
            description="أدخل تفاصيل الوصفة كما ستظهر للزوّار"
        >
            <Separator className='bg-[#eee8e1]' />
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <FieldGroup>
                    <AddField
                        input
                        id="address"
                        label="العنوان"
                        type="text"
                        registration={register('title')}
                        placeholder="مثال: فئة حمص الشام"
                        error={errors.title?.message}
                    />
                    <AddField
                        textarea
                        id="description"
                        label="وصف مختصر"
                        type="text"
                        registration={register('description')}
                        placeholder="اكتب وصفًا شهيًا ومختصرًا للوصفة..."
                        error={errors.description?.message}
                    />
                    <AddField
                        textarea
                        id="ingredients"
                        label="المكونات"
                        type="text"
                        registration={register('ingredients')}
                        placeholder={"مثال:\nكوبان من الحمص\nملعقة زيت زيتون\nعصير ليمونة"}
                        error={errors.ingredients?.message}
                    />
                    <AddField
                        textarea
                        id="instructions"
                        label="طريقة التحضير"
                        type="text"
                        registration={register('instructions')}
                        placeholder="اكتب خطوات التحضير بوضوح وبالترتيب..."
                        error={errors.instructions?.message}
                    />
                    <div className="flex justify-between gap-5">
                        <AddField
                            input
                            id="cookingTime"
                            label="مدة لتحضير"
                            type="number"
                            registration={register("cookingTime", {
                                valueAsNumber: true,
                            })}
                            error={errors.cookingTime?.message}
                        />
                        <AddField
                            input
                            id="servingSize"
                            label="يكفي لكام شخص"
                            type="number"
                            registration={register("servingSize", {
                                valueAsNumber: true,
                            })}
                            error={errors.servingSize?.message}
                        />
                        <AddField
                            id="difficulty"
                            label="مستوى الصعوبة"
                            placeholder="اختر مستوى الصعوبة"
                            select
                            registration={register("difficulty")}
                            values={difficultyOptions}
                            error={errors.difficulty?.message}
                        />
                    </div>
                    <AddField
                        id="coverImage"
                        label="صورة الوصفة"
                        upload
                        currentImageUrl={typeof coverImage === 'string' ? getImageUrl(coverImage) : undefined}
                        error={errors.coverImage?.message}
                    />
                    <Separator className='bg-[#eee8e1]' />
                    <CardFooter className='flex flex-col-reverse gap-3   sm:flex-row sm:justify-end sm:px-7'>
                        <Link
                            href='/dashboard/recipes'
                            className="rounded-xl border border-black/20 bg-white py-2.5 px-5   text-black hover:bg-primary/20">
                            إلغاء
                        </Link>
                        <Button
                            type='submit'
                            className="rounded-xl bg-primary p-5  font-bold text-white shadow-sm transition-all cursor-pointer"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "جارٍ الحفظ..." : "حفظ الوصفة"}
                        </Button>
                    </CardFooter>
                </FieldGroup>
            </form>

        </AddCard>
    )
}
