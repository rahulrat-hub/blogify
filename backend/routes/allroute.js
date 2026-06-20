import express from 'express'
import { Registerpost, Loginpost, blogpost} from '../controllers/allcontrol.js'
import upload from '../middleware/multer.js'

const userrouter = express.Router()

userrouter.post("/register", Registerpost)
userrouter.post("/login", Loginpost)
userrouter.post("/blog", upload.single("image"), blogpost)

export default userrouter