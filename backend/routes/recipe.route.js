const express = require('express')
const addRecipe = require('../controllers/recipe.controller')
const recipeController = require('../controllers/recipe.controller')
const { body } = require('express-validator')
const upload = require('../middleware/upload')
const verifyToken = require('../middleware/verifyToken')
const userRole = require('../utils/userRole')
const allowedTo = require('../middleware/allowedTo')
const addRecipeValidation = require('../utils/addRecipeValidation')

const router = express.Router()


router.route('/')
    .get(recipeController.getAllRecipes)
    .post(verifyToken, allowedTo(userRole.ADMIN), upload.single('coverImage'), addRecipeValidation, (req, res, next) => {
        console.log("Reached route middleware");
        next();
    }, recipeController.addRecipe)


router.route('/:id')
    .get(recipeController.getSingleRecipe)
    .put(verifyToken, upload.single('coverImage'), allowedTo(userRole.ADMIN), recipeController.updateRecipe)
    .delete(verifyToken, allowedTo(userRole.ADMIN), recipeController.deleteRecipe)
module.exports = router