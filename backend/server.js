require("dotenv").config()
const express = require('express')
const recipeRouter = require('./routes/recipe.route')
const app = express()
const dns = require("node:dns");
const connectDB = require("./config/connectionDB");
const httpStatus = require('./utils/httpStatusText')
const cors = require('cors');
const path = require("node:path");
const AuthRouter = require('./routes/auth.route')
const AnalyticsRouter = require('./routes/analytics.route')
const usersRouter = require('./routes/users.route')



// Dns
dns.setServers(["8.8.8.8", "1.1.1.1"]);

// connect to DB
connectDB()

// to work at client side
app.use(cors({
    origin: process.env.CLIENT_URL,
}));

// to send body as json 
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, "uploads")))


// Routes
app.use('/api/recipe', recipeRouter)
app.use('/api/auth', AuthRouter)
app.use('/api/analytics', AnalyticsRouter)
app.use('/api/users', usersRouter)



app.all('/{*splat}', (req, res, next) => {
    return res.status(404).json({ status: httpStatus.ERROR, message: "this resource is not avaiable" })
})
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