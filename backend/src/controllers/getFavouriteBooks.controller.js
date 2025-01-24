import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getfav = asyncHandler(async(req,res)=>{
    const userId = req.user.id
    const userData = await User.findById(userId).populate("favourites")
    const favouriteBooks = userData.favourites;

    return res.status(200).json({data: favouriteBooks})
})

export {getfav}