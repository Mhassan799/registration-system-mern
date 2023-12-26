const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    
    role:{
        type:Number,
        default:0
    },
    
    
    
},{timestamps:true})
module.exports = mongoose.model('user', UserSchema)