import express from 'express'
import  dotenv  from 'dotenv'
import connectDb from './config/db.js'
import authRouter from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import userRouter from './routes/user.routes.js'

// config dot env file
dotenv.config()

// store all the methods which is provide by express in app
const app = express()

app.use(cors({
    origin:"http://localhost:5173",
    credentials: true
}))

// declar the port number
const port = process.env.PORT || 5000

// use meddlewares for parce cookie, get the data in json format
app.use(express.json())
app.use(cookieParser())

// declar meddlewares for route
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)


// start the server
app.listen(port, ()=>{
    // connect to the data base when server start
    connectDb()
    // server running port
    console.log(`http://localhost:${port}`)
})