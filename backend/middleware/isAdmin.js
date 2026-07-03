
const isAdmin = (req,res,next)=>{
    console.log(req.user.role)
   
    if(req.user.role !== "admin")
    {
        return res.json({
            success : false,
            msg : "Only admin allow"
        })
    }

    next()
}

export default isAdmin;