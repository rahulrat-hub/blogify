import mongoose from 'mongoose'

const blogSchema = mongoose.Schema({
  
    image : {
        type : String,
        required : true,
    },

    title : {
        type : String,
        required : true,
        trim : true,
    },

    description : {
        type : String,
        required : true,
        trim : true,
    },

   readTime : {
        type : String,
    }, 

    views: {
        type : Number,
        default : 0,
    },

},
{timestamps : true},
)

let blog = mongoose.model("bloginfo", blogSchema)

export default blog;