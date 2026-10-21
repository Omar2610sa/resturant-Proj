const { mongoose } = require('mongoose')
const difficultyLevel = require('../utils/difficulty')


const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 150
    },
    ingredients: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    cookingTime: {
        type: Number,
        required: true,
        min: 1
    },
    difficulty: {
        type: String,
        enum: [
            difficultyLevel.EASY,
            difficultyLevel.MEDIUM,
            difficultyLevel.HARD],
        default: "easy"
    },
    coverImage: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Recipe', recipeSchema)