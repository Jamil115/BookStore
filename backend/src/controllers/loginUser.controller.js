import { User } from "../models/user.model.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import bcrypt from "bcrypt"


const generateAccessAndRefreshToken = async(userId) => {
    try {
        const user = await User.findById(userId)

        const accessToken =  user.generateAccessToken();
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        console.log("user.refreshToken: ", user.refreshToken)
        // user.save({validateBeforeSave: false})

        console.log("User: ",user)
        return {accessToken, refreshToken}

    } catch (error) {
        throw new apiError(500, "Something went wrong while generating access and refresh token")
    }
}


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

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(!isPasswordValid)
        throw new apiError(401, "Invalid credentials")

    console.log("User_ID: ",user._id)
    const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id);


    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")
    const options = {
        httpOnly: true,
        secure: true
    }

    // console.log("accessToken: ", accessToken)
    // console.log("refreshToken: ", refreshToken)

    return res
    .status(200)
    .cookie("accessToken", accessToken,options)
    .cookie("refreshToken", refreshToken,options)
    .json(
        new apiResponse(
            201,
            {
                user: loggedInUser, accessToken, refreshToken
            }
        )
    )
})

export {loginUser}