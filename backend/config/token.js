import jwt from 'jsonwebtoken'

// jwt token generation
const genToken = async (userId) =>{
    try {
        // generate the token 
        const token = await jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn:"10d"})
        return token

    } catch (error) {
        console.log(error)
    }
}

// export this function
export default genToken