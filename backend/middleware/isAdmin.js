
const isAdmin = (req,res,next)=>{
       console.log("isAdmin middleware hit");
      console.log(req.user);
   
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