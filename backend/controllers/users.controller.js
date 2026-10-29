const asyncWrapper = require("../middleware/asyncWrapper")
const User = require('../models/auth.model')
const appError = require('../utils/appError')
const httpStatus = require('../utils/httpStatusText')
const userRole = require("../utils/userRole")

const getAllUsers = asyncWrapper(
    async (req, res) => {
        const query = req.query
        const limit = query.limit || 10
        const page = query.page || 1
        const skip = (page - 1) * limit
        const totalUsers = await User.countDocuments();

        const users = await User.find({}, { "__v": false, "password": false }).limit(limit).skip(skip)
        const totalPages = Math.ceil(totalUsers / limit);

        res.json({
            status: httpStatus.SUCCESS,
            data: {
                users,
                pagination: {
                    currentPage: page,
                    limit,
                    totalUsers,
                    totalPages,
                    hasNextPage: page < totalPages,
                    hasPrevPage: page > 1
                }
            }
        });
    }

)

const getUser = asyncWrapper(
    async (req, res, next) => {
        const user = await User.findById(req.params.userId, { "__v": false })
        if (!user) {
            return next(appError.create('not found user', 404, httpStatus.FAIL))
        }
        res.json({ status: httpStatus.SUCCESS, data: { user } })
    }
)


const changeUserRole = asyncWrapper(async (req, res, next) => {
    const { userId } = req.params;
    const { role } = req.body;

    const user = await User.findById(userId);

    if (!user) {
        return next(appError.create('not found user', 404, httpStatus.FAIL))
    }

    if (![userRole.USER, userRole.ADMIN].includes(role)) {
        return next(appError.create('Invalid Role', 404, httpStatus.FAIL))
    }

    user.role = role;
    await user.save();

    res.json({ status: httpStatus.SUCCESS, data: { user } })
});


const deleteUser = asyncWrapper(
    async (req, res, next) => {
    const { userId } = req.params;
        const findUser =  await User.findById(userId);
        if (!findUser) {
            return next(appError.create('User not found', 404, httpStatus.FAIL))

        } else {
            await User.deleteOne({ _id: userId })
            res.json({ status: httpStatus.SUCCESS, data: "deleted successfully" })
        }

    }
)

module.exports = {
    getAllUsers,
    getUser,
    changeUserRole,
    deleteUser
}