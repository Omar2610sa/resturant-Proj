const asyncWrapper = require('../middleware/asyncWrapper')
const appError = require('../utils/appError')
const httpStatus = require('../utils/httpStatusText')
const User = require('../models/auth.model')
const bcrypt = require('bcryptjs')
const userRole = require('../utils/userRole')
const generateJWT = require('../utils/generateJWT')




const register = asyncWrapper(
    async (req, res, next) => {
        const { firstName, lastName, email, password } = req.body

        const user = await User.findOne({ email: email })
        if (user) {
            return next(appError.create("user already exists", 400, httpStatus.FAIL))
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role: userRole.USER
        })
        const token = await generateJWT({ email: newUser.email, id: newUser._id })
        newUser.token = token
        await newUser.save()
        res.status(201).json({ status: httpStatus.SUCCESS, data: { user: newUser } })
    }
)


const login = asyncWrapper(
    async (req, res, next) => {
        const { email, password } = req.body

        if (!email && !password) {
            return next(appError.create("email and password are require", 400, httpStatus.FAIL))
        }
        const user = await User.findOne({ email: email })

        if (!user) {
            return next(appError.create("user not found", 400, httpStatus.FAIL))
        }

        const matchedPassword = await bcrypt.compare(password, user.password)
        if (user && matchedPassword) {
            const token = await generateJWT({ email: user.email, id: user._id, role:user.role })
            user.token = token
            return res.json({ status: httpStatus.SUCCESS, data: user })
        } else {
            const error = appError.create("email or password invalid", 500, httpStatus.ERROR)
            return next(error)
        }
    }
)

module.exports = {
    register,
    login,
}