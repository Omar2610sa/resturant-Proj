const express = require('express')
const usersController = require('../controllers/users.controller')
const verifyToken = require('../middleware/verifyToken')
const allowedTo = require('../middleware/allowedTo')
const userRole = require('../utils/userRole')

const router = express.Router()


router.route('/')
    .get(verifyToken, allowedTo(userRole.ADMIN), usersController.getAllUsers)

router.route('/:userId')
    .get(verifyToken, usersController.getUser)
    .patch(verifyToken, allowedTo(userRole.ADMIN), usersController.changeUserRole)
    .delete(verifyToken, allowedTo(userRole.ADMIN), usersController.deleteUser)

module.exports = router