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
  }, 
{timestamps : true}
)

const register = mongoose.model("userinfo", registerSchema)

export default register
