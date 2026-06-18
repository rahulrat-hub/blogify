import mongoose from 'mongoose'

let registerSchema = mongoose.Schema({
    username : {
        type : String,
        require : true,
        unique : true,
        trim : true,
    },

    name : {
        type : String,
        require : true,
        trim : true,
    },

    password : {
        type : String,
        require : true,
        minlength : 4, 
    }
} 
{timestamps : true}
)

const register = mongoose.model("userinfo", registerSchema)

export default register
