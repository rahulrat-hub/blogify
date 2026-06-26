import mongoose from 'mongoose'

let registerSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true,
    },

    name : {
        type : String,
        required : true,
        trim : true,
    },

    password : {
        type : String,
        required : true,
        minlength : 4, 
    },

    role : {
        type : String,
        enum : ["user", "admin"],
        default : "user",
    },
  }, 
{timestamps : true}
)

const register = mongoose.model("userinfo", registerSchema)

export default register
