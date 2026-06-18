import bcrypt from 'bcrypt'
import register from '../Models/registerModel.js'

export let Registerpost = async (req,res) =>{

   try{
     let {username, name, password} = req.body
    console.log(req.body)
     
    // {Salt generate}
    const salt = await bcrypt.genSalt(10)
    // {password hash}
    const hash = await bcrypt.hash(password, salt)

    // {User created in DB}
    const createduser = await register.create({
        username,
        name,
        password : hash,
    })

    res.json({
        success : true,
        msg : "User Created"
    })
   } ccatch (error){
    res.status(500).json({
        success : false,
        msg : "Server Error",
        error : error.message,
    })
   }
} 

export let Loginpost = async (req,res)=>{

    try{
        let {username, password} = req.body
        console.log(req.body)

        let user = await register.findOne({username})

        if(!user){
         return res.json({
                success : false,
                msg : "username not found"
            })
           
            let matchpass = await bcrypt.compare(password, user.password)
            if(!matchpass){
              return res.json({
                    success : false,
                    msg : "Invalid Password"
                })
            }else{
                res.json({
                 success : false,
                 msg : "Login Successfully"
                })
            }
        }
    } catch (error){
        res.status(500).json({
            success : false,
            msg : "server error",
            error : error.message,
        })
    }
}

