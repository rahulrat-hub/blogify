import express from 'express'
import cors from 'cors'
import userrouter from './routes/allroute.js'
import connectDB from './config/db.js'



let app = express()
app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.use(cors())
app.use(userrouter)
connectDB()



app.listen(4000, console.log("running"))
