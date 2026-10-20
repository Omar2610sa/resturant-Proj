const mongoose = require('mongoose')

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log('server is started')
    })
}

module.exports = connectDB