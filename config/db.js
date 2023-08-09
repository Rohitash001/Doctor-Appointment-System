const mongoose = require('mongoose')
const colors = require('colors')


const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Mongodb server connected ${mongoose.connection.host}` .bgGreen.white)
    } catch (error) {
        console.log(`Mongodb Server Issue ${error}` .bgRed.bgWhite)
    }
};

module.exports = connectDB;
