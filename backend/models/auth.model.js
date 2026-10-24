const { mongoose } = require('mongoose')
const validator = require('validator');
const userRole = require('../utils/userRole');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: [validator.isEmail, "field must be a valid email"]
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
    },
    role: {
        type: String,
        enum: [userRole.USER, userRole.ADMIN],
        default: userRole.USER
    }
})

module.exports = mongoose.model('User', userSchema)
