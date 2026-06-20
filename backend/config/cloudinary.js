import {v2 as cloudinary} from 'cloudinary'

const connectCloudinary = () =>{
   cloudinary.config({
    cloud_name : "dbhsjnsw0",
    api_key : "931716226841924",
    api_secret : "Xh5I_1UD6yItcwDy5NuX85VTVV4",
    })
}

export default connectCloudinary;