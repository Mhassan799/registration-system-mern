const mongoose = require('mongoose')

async function connectDb(){
    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            useNewUrlParser: true
        });
        console.log("database connected succesfuly")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDb;