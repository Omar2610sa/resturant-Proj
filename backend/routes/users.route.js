const express = require('express')
const usersController = require('../controllers/users.controller')

const router = express.Router()


router.route('/')
    .get(usersController.getAllUsers)

router.route('/:userId')
    .get(usersController.getUser)
    .patch(usersController.changeUserRole)
    .delete(usersController.deleteUser)

module.exports = router