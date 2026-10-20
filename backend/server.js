require("dotenv").config()
const express = require('express')
const recipeRouter = require('./routes/recipe.route')
const app = express()
const dns = require("node:dns");
const connectDB = require("./config/connectionDB");
const httpStatus = require('./utils/httpStatusText')



// Dns
dns.setServers(["8.8.8.8", "1.1.1.1"]);

// connect to DB
connectDB()

// to send body as json 
app.use(express.json())

// Routes
app.use('/api/recipe', recipeRouter)




// Global error handler 
app.use((error, req, res, next) => {
    res.status(error.statusCode || 500).json({
        status: error.statusText || httpStatus.ERROR,
        message: error.message,
        statusCode: error.statusCode || 500,
        data: null
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`lising to port ${PORT}`);

})