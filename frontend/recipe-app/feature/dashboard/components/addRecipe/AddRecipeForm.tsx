"use client"
import AddCard from '@/components/AddFrom/AddCard'
import AddField from '@/components/AddFrom/AddField'
import { FieldGroup } from '@/components/ui/field'
import { Separator } from '@/components/ui/separator';
import { CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link'
import { useAddRecipe } from '../../hooks/use-add-recipe';

export default function AddRecipeForm() {
    const { form, onSubmit } = useAddRecipe();
    const {
        register,
        formState: { errors, isSubmitting },
    } = form;

        const difficultyOptions = [
        { label: "سهل", value: "easy" },
        { label: "متوسط", value: "medium" },
        { label: "صعب", value: "hard" },
    ];
    return (
        <AddCard
            title="بيانات الوصفة"
            description="أدخل تفاصيل الوصفة كما ستظهر للزوّار"
            footerText="ليس لديك حساب؟"
            footerHref="/register"
        >
            <Separator className='bg-accent' />
            <form  onSubmit={onSubmit} noValidate>
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
                    <div className="flex flex-col sm:flex-row justify-between gap-5">
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
                        registration={register("coverImage")}
                        error={errors.coverImage?.message}
                    />
                    <Separator className='bg-accent' />
                    <CardFooter className='flex justify-end gap-3   sm:flex-row sm:justify-end sm:px-7'>
                        <Link
                            href='/dashboard/recipes'
                            className="rounded-xl border border-black/20  tex py-2.5 px-5    hover:bg-primary/20">
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
