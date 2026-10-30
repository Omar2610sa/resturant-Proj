const express = require('express')
const router = express.Router()
const analyticsController = require('../controllers/analytics.controller')
const verifyToken = require('../middleware/verifyToken')



router.route('/')
    .get(verifyToken, analyticsController.getAnalytics)

module.exports = router