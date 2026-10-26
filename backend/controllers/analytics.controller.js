const asyncWrapper = require('../middleware/asyncWrapper')
const appError = require('../utils/appError')
const httpStatus = require('../utils/httpStatusText')
const User = require('../models/auth.model')
const Recipe = require('../models/recipe.model')



const getAnalytics = asyncWrapper(
    async (req, res, next) => {
        const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
        const [ totalRecipes, recipesThisWeek, totalUsers ] = await Promise.all([
            Recipe.countDocuments(),
            Recipe.countDocuments({
                createdAt: { $gte: sevenDaysAgo }
            }),
            User.countDocuments()
        ])

console.log(totalRecipes, recipesThisWeek, totalUsers)
        if (!totalRecipes || !recipesThisWeek || !totalUsers) {
            return next(appError.create('not found analytics', 404, httpStatus.FAIL))
        }
        res.json({ status: httpStatus.SUCCESS, data: { totalRecipes, recipesThisWeek, totalUsers } })
    }
)


module.exports = {
    getAnalytics
}