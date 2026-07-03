import express from 'express'
import { Registerpost, Loginpost, blogpost, blogget, Read, Edit, Delete, SearchSortHandling} from '../controllers/allcontrol.js'
import upload from '../middleware/multer.js'
import auth from '../middleware/auth.js'
import isAdmin from '../middleware/isAdmin.js' 

const userrouter = express.Router()

userrouter.post("/register", Registerpost)
userrouter.post("/login", Loginpost)
userrouter.post("/blog", auth, isAdmin, upload.single("image"), blogpost)
userrouter.get("/blog", blogget)
userrouter.get("/blog/:id", Read)
userrouter.put("/blog/:id", Edit)
userrouter.delete("/blog/:id", Delete)
userrouter.get("/blogs", SearchSortHandling)

export default userrouter