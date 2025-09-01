import genToken from "../config/token.js"
import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'

// user signup controllers
export const signup = async (req, res) =>{
try {
    // extract name , email, password from frontend by req.body
    const {name, email, password} = req.body

    // check user entered email is exist in data base or not
    const existEmail = await User.findOne({email})

    // if user email exist return email alrady exists
    if(existEmail){
        return res.status(400).json({
            message: "email already exists !"
        })
    }

    // check password length if length < 9 return a error
    if(password.length<6){
        return res.status(400).json({
            message: "password is must be greater than 6 characters !"
        })
    }

    // hash user password before store in the database with the help of bcryptjs
    const hashedPassword = await bcrypt.hash(password,10)

    // create user or save user info in data base
    const user = await User.create({
        name,
        password: hashedPassword,
        email
    })

    // Create jwt token here, with genToken function which is present in "config/token.js" and pass the user id
    const token = await genToken(user._id)

    // after create token set that token in cookie
    res.cookie("token", token, {
        httpOnly: true,
        maxAge:7*24*60*60*1000,
        sameSite: "strict",
        secure: false
    })

    // return user
    return res.status(201).json(user)
    
} catch (error) {
    // return error is exist
    return res.status(500).json({message:`sign up error ${error}`})
}
}

// user login controllers
export const Login = async (req, res) =>{
try {

    // extract email and password from frontend or req.body
    const {email, password} = req.body

    // check the user is present in our data base or not through email
    const user = await User.findOne({email})

    // if user not present in data base send a message email doesnot exists
    if(!user){
        return res.status(400).json({
            message: "email does not exists !"
        })
    }
    // compare the input password with hash password
    const  isMatch = await bcrypt.compare(password, user.password)

    // if password not match return incorrect password
    if(!isMatch){
        return res.status(400).json({message: "incorrect password"})
    }

    // when user login  generate a jwt token with the help of genToken function which is present in "cpnfig/token.js"
    const token = await genToken(user._id)

    // set that token in cookie
    res.cookie("token", token, {
        httpOnly: true,
        maxAge:7*24*60*60*1000,
        sameSite: "strict",
        secure: false
    })

    // return login user
    return res.status(200).json(user)
    
} catch (error) {
    // return error if any error occour in login time
    return res.status(500).json({message:`Login error ${error}`})
}
}

// user logout controllers
export const logOut = async (req, res) => {
    try {
        // for logout we have to clear the cookies, which we storeed when the user login
        res.clearCookie("token")
        // logout message send
    return res.status(200).json({message: "logout successfully"})


    } catch (error) {
    // return error if any error occour in logout time
        return res.status(500).json({message:`Logout error ${error}`})
    }
}