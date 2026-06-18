import express from 'express'

const userrouter = express.Router()

userrouter.post("/register", Registerpost)
userrouter.post("/login", Loginpost)

export default userrouter