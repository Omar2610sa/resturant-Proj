"use client"
import AddCard from '@/components/AddFrom/AddCard'
import AddField from '@/components/AddFrom/AddField'
import { FieldGroup } from '@/components/ui/field'
import { Separator } from '@/components/ui/separator';
import { CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link'
import { getImageUrl } from '@/lib/image';
import { useEditRecipe } from '../../hooks/use-edit-recipe';
import { EditRecipeFormProps } from '../../types';


export default function EditRecipeForm({
    initialValues,
}: EditRecipeFormProps) {
    const { form, onSubmit } = useEditRecipe(initialValues._id, initialValues);
    const {
        register,
        formState: { errors, isSubmitting },
    } = form;
    const coverImage = initialValues.coverImage

    const difficultyOptions = [
        { label: "سهل", value: "easy" },
        { label: "متوسط", value: "medium" },
        { label: "صعب", value: "hard" },
    ];
    return (
        <AddCard
            title="تعديل بيانات الوصفة"
            description="أدخل تفاصيل الوصفة كما ستظهر للزوّار"
        >
            <Separator className='bg-[#eee8e1]' />
            <form onSubmit={onSubmit} noValidate>
                <FieldGroup>
                    <AddField
                        input
                        id="titleAr"
                        label="العنوان بالعربي"
                        type="text"
                        registration={register('title.ar')}
                        placeholder="مثال: فئة حمص الشام"
                        error={errors.title?.ar?.message}
                    />
                    <AddField
                        input
                        id="titleEn"
                        label="العنوان بالإنجليزية"
                        type="text"
                        registration={register('title.en')}
                        placeholder="مثال: Sham Hummus"
                        error={errors.title?.en?.message}
                    />
                    <AddField
                        textarea
                        id="descriptionAr"
                        label="وصف مختصر بالعربي"
                        type="text"
                        registration={register('description.ar')}
                        placeholder="اكتب وصفًا شهيًا ومختصرًا للوصفة..."
                        error={errors.description?.ar?.message}
                    />
                    <AddField
                        textarea
                        id="descriptionEn"
                        label="وصف مختصر بالإنجليزية"
                        type="text"
                        registration={register('description.en')}
                        placeholder="اكتب وصفًا شهيًا ومختصرًا للوصفة..."
                        error={errors.description?.en?.message}
                    />
                    <AddField
                        textarea
                        id="ingredientsAr"
                        label="المكونات بالعربي"
                        type="text"
                        registration={register('ingredients.ar')}
                        placeholder={"مثال:\nكوبان من الحمص\nملعقة زيت زيتون\nعصير ليمونة"}
                        error={errors.ingredients?.ar?.message}
                    />
                    <AddField
                        textarea
                        id="ingredientsEn"
                        label="المكونات بالإنجليزية"
                        type="text"
                        registration={register('ingredients.en')}
                        placeholder="مثال:\n1 cup of chickpeas\n1 tablespoon olive oil\n1 tablespoon lemon juice"
                        error={errors.ingredients?.en?.message}
                    />
                    <AddField
                        textarea
                        id="instructionsAr"
                        label="طريقة التحضير بالعربي"
                        type="text"
                        registration={register('instructions.ar')}
                        placeholder="اكتب خطوات التحضير بوضوح وبالترتيب..."
                        error={errors.instructions?.ar?.message}
                    />
                    <AddField
                        textarea
                        id="instructionsEn"
                        label="طريقة التحضير بالإنجليزية"
                        type="text"
                        registration={register('instructions.en')}
                        placeholder="Write the preparation steps clearly and in order..."
                        error={errors.instructions?.en?.message}
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
                        currentImageUrl={typeof coverImage === 'string' ? getImageUrl(coverImage) : undefined}
                        error={errors.coverImage?.message}
                    />
                    <Separator className='bg-[#eee8e1]' />
                    <CardFooter className='flex justify-end gap-3   sm:flex-row sm:justify-end sm:px-7'>
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
