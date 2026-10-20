const express = require('express')
const addRecipe = require('../controllers/recipe.controller')
const recipeController = require('../controllers/recipe.controller')

const router = express.Router()


router.route('/')
    .get(recipeController.getAllRecipes)
    .post(recipeController.addRecipe)


router.route('/:id')
    .get(recipeController.getSingleRecipe)
    .put(recipeController.updateRecipe)
    .delete(recipeController.deleteRecipe)
module.exports = router