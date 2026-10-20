const asyncWrapper = require('../middleware/asyncWrapper')
const Recipe = require('../models/recipe.model')
const appError = require('../utils/appError')
const httpStatus = require('../utils/httpStatusText')


const getAllRecipes = asyncWrapper(
    async (req, res, next) => {
        const query = req.query
        const limit = query.limit || 10
        const page = query.page || 1
        const skip = (page - 1) * limit

        const recipes = await Recipe.find({}, { '__v': false }).limit(limit).skip(skip)
        res.json({ status: httpStatus.SUCCESS, data: { recipes } })
    }
)

const getSingleRecipe = asyncWrapper(
    async (req, res, next) => {
        const recipe = await Recipe.findById(req.params.id, { '__v': false })
        if (!recipe) {
            return next(appError.create('not found recipe', 404, httpStatus.FAIL))
        }
        res.json({ status: httpStatus.SUCCESS, data: { recipe } })
    }
)

const addRecipe = asyncWrapper(
    async (req, res, next) => {
        const { title, ingredients, instructions } = req.body

        if (!title || !ingredients || !instructions) {
            return next(appError.create('All fields are required', 400, httpStatus.FAIL))
        }

        const newRecipe = new Recipe(req.body)
        await newRecipe.save()
        res.status(201).json({ status: httpStatus.SUCCESS, data: { recipe: newRecipe } })
    }
)


const updateRecipe = asyncWrapper(
    async (req, res, next) => {
        const { id } = req.params
        const updateRecipe = await Recipe.findByIdAndUpdate(id, { $set: { ...req.body } })

        if (!updateRecipe) {
            return next(appError.create('Recipe not found', 400, httpStatus.FAIL))
        }
        res.status(201).json({ status: httpStatus.SUCCESS, data: "updated successfully" })

    }
)


const deleteRecipe = asyncWrapper(
    async (req, res, next) => {
        const { id } = req.params
        const findReicpe = await Recipe.findById(id)
        if (!findReicpe) {
            return next(appError.create('Recipe not found', 400, httpStatus.FAIL))

        } else {
            await Recipe.deleteOne({ _id: id })
            res.json({ status: httpStatus.SUCCESS, data: "deleted successfully" })
        }

    }
)


module.exports = {
    addRecipe,
    getAllRecipes,
    getSingleRecipe,
    updateRecipe,
    deleteRecipe
}