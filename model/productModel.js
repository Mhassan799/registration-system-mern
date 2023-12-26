const mongoose = require('mongoose')
const BookSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    photo:{
        data:Buffer,
    contentType:String,
    }

},{timestamps:true})
module.exports = mongoose.model('book',BookSchema)