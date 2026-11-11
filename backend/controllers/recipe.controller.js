const { validationResult } = require('express-validator')
const asyncWrapper = require('../middleware/asyncWrapper')
const Recipe = require('../models/recipe.model')
const appError = require('../utils/appError')
const httpStatus = require('../utils/httpStatusText')
const fs = require('fs/promises');
const path = require('path');
const uploadToCloudinary = require('../utils/uploadToCloudinary')
const localizeRecipe = require('../utils/localizeRecipe')

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

        const localizedRecipes = recipes.map((recipe) =>
            localizeRecipe(recipe, req.language)
        );

        const totalPages = Math.ceil(totalRecipes / limit);
        res.json({
            status: httpStatus.SUCCESS,
            data: {
                recipes: localizedRecipes,
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
        const localizedRecipes = localizeRecipe(recipe, req.language)
        res.json({ status: httpStatus.SUCCESS, data:  localizedRecipes  })
    }
)

const addRecipe = asyncWrapper(
    async (req, res, next) => {
        const errors = validationResult(req)
        const { title, description, ingredients, instructions, cookingTime, difficulty, servingSize } = req.body
        if (!errors.isEmpty()) {
            return next(appError.create(errors.array(), 400, httpStatus.FAIL))
        }
        const result = await uploadToCloudinary(req.file.buffer);
        const newRecipe = new Recipe({
            title,
            description,
            ingredients,
            instructions,
            cookingTime,
            difficulty,
            coverImage: result.secure_url,
            servingSize
        })
        await newRecipe.save()
        res.status(201).json({ status: httpStatus.SUCCESS, data: { recipe: newRecipe } })
    }
)


const updateRecipe = asyncWrapper(
    async (req, res, next) => {
        const { id } = req.params;

        const recipe = await Recipe.findById(id);
        if (!recipe) {
            if (req.file) await fs.unlink(req.file.path).catch(() => { });
            return next(appError.create('Recipe not found', 404, httpStatus.FAIL));
        }

        const { title, description, ingredients, instructions, cookingTime, difficulty, servingSize } = req.body;
        const updates = { title, description, ingredients, instructions, cookingTime, difficulty, servingSize };
        Object.keys(updates).forEach((key) => updates[key] === undefined && delete updates[key]);

        const oldImage = recipe.coverImage;
        if (req.file) {
            const result = await uploadToCloudinary(req.file.buffer);
            updates.coverImage = result.secure_url;
        }

        recipe.set(updates);
        await recipe.save();

        if (req.file && oldImage) {
            await deleteFromCloudinary(oldImage);
        }

        res.status(200).json({ status: httpStatus.SUCCESS, data: { recipe } });
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