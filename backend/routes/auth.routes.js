import express from 'express'
import { Login, logOut, signup } from '../controllers/auth.controller.js'

// call express.Router() and create authRouter
const authRouter = express.Router()

// declar signup, sihnin and logout route
authRouter.post("/signup", signup)
authRouter.post("/signin", Login)
authRouter.get("/logout", logOut)

// export authrouteer
export default authRouter