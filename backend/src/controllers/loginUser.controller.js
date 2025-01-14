import { User } from "../models/user.model.js";
import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import bcrypt from "bcrypt"

const loginUser = asyncHandler(async (req,res)=> {
    
    const {username, email, password} = req.body
    console.log(password)

    if(!(username || email))
        throw new apiError(400, "username or email is required");

    const user = await User.findOne({
        $or : [{username}, {email}]
    }).select("+password")

    console.log(user)
    console.log(user.password)

    if(!user)
        throw new apiError(404, "User does not exists");

    // const isPasswordValid = user.isPasswordCorrect(password);
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(!isPasswordValid)
        throw new apiError(401, "Invalid credentials")

    return res
    .status(200)
    .json("User logged in successfully")
})

export {loginUser}