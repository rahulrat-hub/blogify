
const isAdmin = (req,res,next)=>{
    if(req.user.role !== "admin"){
        return res.json({
            success : false,
            msg : "Only admin allow"
        })
    }

    next()
}

export default isAdmin;