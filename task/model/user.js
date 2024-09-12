const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:Number
    }
})


const userModel = mongoose.model("user001",userSchema)
module.exports = userModel