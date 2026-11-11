const { mongoose } = require('mongoose')
const difficultyLevel = require('../utils/difficulty')


const recipeSchema = new mongoose.Schema({
    title: {
        ar: {
            type: String,
            required: true,
            trim: true
        },
        en: {
            type: String,
            required: true,
            trim: true
        }
    },
    description: {
        ar: {
            type: String,
            required: true,
            trim: true,
            maxlength: 150
        },
        en: {
            type: String,
            required: true,
            trim: true,
            maxlength: 150
        },
    },
    ingredients: {
        ar: {
            type: String,
            required: true
        },
        en: {
            type: String,
            required: true
        }
    },
    instructions: {
        ar: {
            type: String,
            required: true
        },
        en: {
            type: String,
            required: true
        }
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
    },
    servingSize: {
        type: Number,
        required: true,
        min: 1,
        default: 1
    }
})


module.exports = mongoose.model('Recipe', recipeSchema)