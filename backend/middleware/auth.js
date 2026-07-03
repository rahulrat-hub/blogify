import jwt from 'jsonwebtoken'
import register from '../Models/registerModel.js'


const auth = async (req,res,next)=>{
  try{
        console.log("Authorization Header:", req.headers.authorization);
    let authHeader = req.headers.authorization

    if(!authHeader){
  return res.json({
    success : false,
    msg : "Unauthorized"
  })
}

const token = authHeader.split(" ")[1];

console.log("token", token)

 let decoded = jwt.verify(token, "secretkey12")

 console.log("decoded", decoded)

 const user = await register.findById(decoded.id).select("-password")
 if(!user){
    return res.json({
        success : false,
        message : "User not found"
    })
 }

 req.user = user
 console.log(req.user)
 next()
} catch (error){
     console.log("ERROR NAME:", error.name);
    console.log("ERROR MESSAGE:", error.message);
    console.log(error);
    res.json({
        success : false,
        msg : "invalid token"
    })
}
}

 export default auth;



