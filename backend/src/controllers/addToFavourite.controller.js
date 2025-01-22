import { User } from "../models/user.model.js";
import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const favourites = asyncHandler(async(req,res)=>{

    const userId = req.user._id
    const userData = await User.findById(userId)

    const  bookId = req.params.id
    const isBookFavourite = userData.favourites.includes(bookId)
    console.log(isBookFavourite)
    console.log(userData)

    if(isBookFavourite)
        throw new apiError(500, "This book has already bookmarked")

    await User.findByIdAndUpdate(
        userData.id,
        {
            $push:{
                favourites: bookId
            }
        },
        {
            new: true
        }
    )

    return res.status(200).json("Book stored into the favourites section.")

})

export {favourites}

