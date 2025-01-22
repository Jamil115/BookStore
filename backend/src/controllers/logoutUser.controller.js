import { User } from "../models/user.model.js ";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined
            }
        },
        {
            new: true    //etar mane hocche eta thakle ami updated value ta shathe shathei pabo ar use na korle updated value ta paite amar abar query kora lagbe.
        }
    )
    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(new apiResponse(200, {}, "User logged Out"))
})

export {logoutUser}