import dotenv from 'dotenv'
dotenv.config();


import express from 'express'
import cors from 'cors'
import userrouter from './routes/allroute.js'
import connectDB from './config/db.js'
import connectCloudinary from './config/cloudinary.js'



let app = express()
app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.use(cors())
app.use(userrouter)
connectDB()
connectCloudinary()



app.listen(4000, console.log("running"))
