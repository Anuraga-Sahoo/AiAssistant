import express from 'express'
import { getCurrentUser, updateAssistant } from '../controllers/user.controller.js'
import isAuth from '../middlewares/isAuth.js'
import upload from '../middlewares/multer.js'


// call express.Router() and create authRouter
const userRouter = express.Router()

// declar signup, sihnin and logout route
userRouter.get("/current", isAuth,  getCurrentUser )
userRouter.post("/update", isAuth, upload.single("assistantImage") ,  updateAssistant )


// export authrouteer
export default userRouter