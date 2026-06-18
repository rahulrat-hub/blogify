import express from 'express'
import { Registerpost, Loginpost} from '../controllers/allcontrol.js'

const userrouter = express.Router()

userrouter.post("/register", Registerpost)
userrouter.post("/login", Loginpost)

export default userrouter