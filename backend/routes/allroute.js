import express from 'express'
import { Registerpost, Loginpost, blogpost, blogget} from '../controllers/allcontrol.js'
import upload from '../middleware/multer.js'

const userrouter = express.Router()

userrouter.post("/register", Registerpost)
userrouter.post("/login", Loginpost)
userrouter.post("/blog", upload.single("image"), blogpost)
userrouter.get("/blog", blogget)

export default userrouter