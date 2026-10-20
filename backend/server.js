require("dotenv").config()
const express = require('express')
const recipeRouter = require('./routes/recipe.route')
const app = express()
const dns = require("node:dns");
const connectDB = require("./config/connectionDB");

// Dns
dns.setServers(["8.8.8.8", "1.1.1.1"]);

// connect to DB
connectDB()


// Routes
app.use('/api/recipe', recipeRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`lising to port ${PORT}`);

})