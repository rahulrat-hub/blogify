import express from 'express'
import { Registerpost, Loginpost, blogpost} from '../controllers/allcontrol.js'

const userrouter = express.Router()

userrouter.post("/register", Registerpost)
userrouter.post("/login", Loginpost)
userrouter.post("/blog", blogpost)

export default userrouter