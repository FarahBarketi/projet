const mongoose = require ('mongoose')
const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    } ,
    firstName :{
        type : String,
        required : true
    },
    dateBirth :{
        type : date,
        required : true
    },
    email :{
        type : String,
        required : true
    },
    phone :{
        type : Number,
        required : true
    },
    role: {
        type: String,
        enum: ["v", "b","user", "admin"],
        default: "user",
      }
}) 
module.exports = mongoose.model('user' , userSchema)