const appError = require("../utils/appError")

module.exports = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.decodedUser.role)) {
            return next(appError.create("this role is not authorized", 403))
        }
        next()
    }
} 