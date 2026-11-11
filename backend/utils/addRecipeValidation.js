const { body } = require('express-validator')

const addRecipeValidation = [
    // Title
    body("title").isObject().withMessage("Title must be an object"),
    body("title.ar")
        .trim()
        .notEmpty().withMessage("Arabic title is required")
        .isLength({ min: 2 }).withMessage("Arabic title must be at least 2 characters"),

    body("title.en")
        .trim()
        .notEmpty().withMessage("English title is required")
        .isLength({ min: 2 }).withMessage("English title must be at least 2 characters"),

    // Description
    body("description").isObject().withMessage("Description must be an object"),

    body("description.ar")
        .trim()
        .notEmpty().withMessage("Arabic description is required")
        .isLength({ max: 150 })
        .withMessage("Arabic description cannot exceed 150 characters"),

    body("description.en")
        .trim()
        .notEmpty().withMessage("English description is required")
        .isLength({ max: 150 })
        .withMessage("English description cannot exceed 150 characters"),

    // Ingredients
    body("ingredients").isObject().withMessage("Ingredients must be an object"),

    body("ingredients.ar")
        .trim()
        .notEmpty().withMessage("Arabic ingredients are required"),

    body("ingredients.en")
        .trim()
        .notEmpty().withMessage("English ingredients are required"),


    body("instructions").isObject().withMessage("instructions must be an object"),

    body("instructions.ar")
        .trim()
        .notEmpty().withMessage("Arabic instructions are required"),

    body("instructions.en")
        .trim()
        .notEmpty().withMessage("English instructions are required"),

    // Cooking Time
    body("cookingTime")
        .notEmpty().withMessage("Cooking time is required")
        .isInt({ min: 1 }).withMessage("Cooking time must be a positive number"),

    // Difficulty
    body("difficulty")
        .notEmpty().withMessage("Difficulty is required")
        .isIn(["easy", "medium", "hard"])
        .withMessage("Difficulty must be easy, medium, or hard"),

    // Serving Size
    body("servingSize")
        .notEmpty().withMessage("Serving size is required")
        .isInt({ min: 1 }).withMessage("Serving size must be at least 1"),
]

module.exports = addRecipeValidation