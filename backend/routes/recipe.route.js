const express = require('express')
const addRecipe = require('../controllers/recipe.controller')
const recipeController = require('../controllers/recipe.controller')
const { body } = require('express-validator')
const upload = require('../middleware/upload')

const router = express.Router()


router.route('/')
    .get(recipeController.getAllRecipes)
    .post(upload.single('coverImage'),[body('title').not().isEmpty().withMessage('Title is required').isLength({ min: 2 }).withMessage('Title at least is 2 chrats'),
    body('description').not().isEmpty().withMessage('Description is required'),
    body('ingredients').not().isEmpty().withMessage('Ingredients are required'),
    body('instructions').not().isEmpty().withMessage('Instructions are required'),
    body('cookingTime').not().isEmpty().withMessage('Cooking time is required'),
    body('difficulty').not().isEmpty().withMessage('Difficulty is required')] ,recipeController.addRecipe)


router.route('/:id')
    .get(recipeController.getSingleRecipe)
    .put(recipeController.updateRecipe)
    .delete(recipeController.deleteRecipe)
module.exports = router