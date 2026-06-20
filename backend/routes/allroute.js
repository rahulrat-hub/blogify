import express from 'express'
import { Registerpost, Loginpost, blogpost, blogget, Read, Edit, Delete} from '../controllers/allcontrol.js'
import upload from '../middleware/multer.js'

const userrouter = express.Router()

userrouter.post("/register", Registerpost)
userrouter.post("/login", Loginpost)
userrouter.post("/blog", upload.single("image"), blogpost)
userrouter.get("/blog", blogget)
userrouter.get("/blog/:id", Read)
userrouter.put("/blog/:id", Edit)
userrouter.delete("/blog/:id", Delete)

export default userrouter