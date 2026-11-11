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
import { useTranslations } from "next-intl";


export default function EditRecipeForm({
    initialValues,
}: EditRecipeFormProps) {
    const { form, onSubmit } = useEditRecipe(initialValues._id, initialValues);
    const t = useTranslations("Dashboard.form");
    const recipesT = useTranslations("Dashboard.recipes");
    const {
        register,
        formState: { errors, isSubmitting },
    } = form;
    const coverImage = initialValues.coverImage

    return (
        <AddCard
            title={recipesT("editFormTitle")}
            description={recipesT("formDescription")}
        >
            <Separator className='bg-[#eee8e1]' />
            <form onSubmit={onSubmit} noValidate>
                <FieldGroup>
                    <AddField
                        input
                        id="address"
                        label={t("title")}
                        type="text"
                        registration={register('title')}
                        placeholder={t("titlePlaceholder")}
                        error={errors.title?.message}
                    />
                    <AddField
                        textarea
                        id="description"
                        label={t("description")}
                        type="text"
                        registration={register('description')}
                        placeholder={t("descriptionPlaceholder")}
                        error={errors.description?.message}
                    />
                    <AddField
                        textarea
                        id="ingredients"
                        label={t("ingredients")}
                        type="text"
                        registration={register('ingredients')}
                        placeholder={t("ingredientsPlaceholder")}
                        error={errors.ingredients?.message}
                    />
                    <AddField
                        textarea
                        id="instructions"
                        label={t("instructions")}
                        type="text"
                        registration={register('instructions')}
                        placeholder={t("instructionsPlaceholder")}
                        error={errors.instructions?.message}
                    />
                    <div className="flex flex-col sm:flex-row justify-between gap-5">
                        <AddField
                            input
                            id="cookingTime"
                            label={t("cookingTime")}
                            type="number"
                            registration={register("cookingTime", {
                                valueAsNumber: true,
                            })}
                            error={errors.cookingTime?.message}
                        />
                        <AddField
                            input
                            id="servingSize"
                            label={t("servingSize")}
                            type="number"
                            registration={register("servingSize", {
                                valueAsNumber: true,
                            })}
                            error={errors.servingSize?.message}
                        />
                        <AddField
                            id="difficulty"
                            label={t("difficulty")}
                            placeholder={t("selectDifficulty")}
                            select
                            registration={register("difficulty")}
                            error={errors.difficulty?.message}
                        />
                    </div>
                    <AddField
                        id="coverImage"
                        label={t("coverImage")}
                        upload
                        currentImageUrl={typeof coverImage === 'string' ? getImageUrl(coverImage) : undefined}
                        error={errors.coverImage?.message}
                    />
                    <Separator className='bg-[#eee8e1]' />
                    <CardFooter className='flex justify-end gap-3   sm:flex-row sm:justify-end sm:px-7'>
                        <Link
                            href='/dashboard/recipes'
                            className="rounded-xl border border-black/20 bg-white py-2.5 px-5   text-black hover:bg-primary/20">
                            {t("cancel")}
                        </Link>
                        <Button
                            type='submit'
                            className="rounded-xl bg-primary p-5  font-bold text-white shadow-sm transition-all cursor-pointer"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? t("saving") : t("save")}
                        </Button>
                    </CardFooter>
                </FieldGroup>
            </form>
        </AddCard>
    )
}
