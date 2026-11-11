const localizeRecipe = (recipe, language = "ar") => {
    const data = recipe.toObject
        ? recipe.toObject()
        : recipe;

    return {
        ...data,
        title: data.title?.[language] || data.title?.ar,
        description:
            data.description?.[language] || data.description?.ar,
        ingredients:
            data.ingredients?.[language] || data.ingredients?.ar,
        instructions:
            data.instructions?.[language] || data.instructions?.ar,
    };
};

module.exports = localizeRecipe;