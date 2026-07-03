import jwt from 'jsonwebtoken'
import register from '../Models/registerModel.js'


const auth = async (req,res,next)=>{
  try{
      
  let authHeader = req.headers.authorization

    if(!authHeader){
  return res.json({
    success : false,
    msg : "Unauthorized"
  })
}
const token = authHeader.split(" ")[1];

 let decoded = jwt.verify(token, "secretkey12")

 const user = await register.findById(decoded.id).select("-password")
 if(!user){
    return res.json({
        success : false,
        message : "User not found"
    })
 }

 req.user = user

 next()

} catch (error){
    res.json({
        success : false,
        msg : "invalid token"
    })
}
}

 export default auth;



