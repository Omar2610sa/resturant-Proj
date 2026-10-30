const jtw = require("jsonwebtoken")
const appError = require("../utils/appError")
const httpStatus = require('../utils/httpStatusText')

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['Authorization'] || req.headers['authorization']

    if (!authHeader) {
        const error = appError.create("token is require", 401, httpStatus.FAIL)
        return next(error)
    }

    const token = authHeader.split(' ')[1]
    try {
        const decodedUser = jtw.verify(token, process.env.JWR_SECRT_KEY)
        req.decodedUser = decodedUser
        next()
    } catch (err) {
        const error = appError.create("token is expired", 401, httpStatus.ERROR)
        return next(error)
    }
}


module.exports = verifyToken