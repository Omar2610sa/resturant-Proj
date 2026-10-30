const { validationResult } = require('express-validator')
const asyncWrapper = require('../middleware/asyncWrapper')
const Recipe = require('../models/recipe.model')
const appError = require('../utils/appError')
const httpStatus = require('../utils/httpStatusText')


const getAllRecipes = asyncWrapper(
    async (req, res, next) => {
    const page = Math.max(parseInt(req.query.page) || 1, 1);
    const limit = Math.min(Math.max(parseInt(req.query.limit) || 10, 1), 50); 
    const search = (req.query.search || "").trim();
    const skip = (page - 1) * limit;

    const filter = {};
    if (search) {
        const escaped = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const regex = { $regex: escaped, $options: "i" };
        filter.$or = [{ title: regex },]; 
    }
        const [recipes, totalRecipes] = await Promise.all([
            Recipe.find(filter, { __v: false, password: false })
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit),
            Recipe.countDocuments(filter), 
        ]);
    
        const totalPages = Math.ceil(totalRecipes / limit);
        res.json({
            status: httpStatus.SUCCESS,
            data: {
                recipes,
                pagination: {
                    currentPage: page,
                    limit,
                    totalRecipes,
                    totalPages,
                    hasNextPage: page < totalPages,
                    hasPrevPage: page > 1
                }
            }
        });
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
        const errors = validationResult(req)
        const { title, description, ingredients, instructions, cookingTime, difficulty } = req.body
        if (!errors.isEmpty()) {
            return next(appError.create(errors.array(), 400, httpStatus.FAIL))
        }

        const newRecipe = new Recipe({
            title,
            description,
            ingredients,
            instructions,
            cookingTime,
            difficulty,
            coverImage :req.file.filename
        })
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