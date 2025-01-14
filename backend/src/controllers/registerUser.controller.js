import { User } from "../models/user.model.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req, res) => {

    const {username, email, password, address} = req.body;
    

    if(username.length<5)
        throw new apiError(400, "username must contain more than 4 characters");

    const existedUsername = await User.findOne({username})
    if(existedUsername)
        throw new apiError(400, "username already exists.");

    const existedEmail = await User.findOne({email})
    if(existedEmail)
        throw new apiError(400, "email already exists.");

    if(password.length<8)
        throw new apiError(400, "password must contain 8 characters");


    const user = User.create({
        username: username.toLowerCase(),
        email,
        password,
        address
    })

    const createdUser = User.findById(user._id)

    if(!createdUser)
        throw new apiError(500, "Something went wrong while registration.")

    return res.status(201).json(
        new apiResponse(200, "user registered successfully")
    )
})


export {registerUser}