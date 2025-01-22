import { User } from "../models/user.model.js";
import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const delFavourites = asyncHandler(async(req,res)=>{

    const userId = req.user._id
    const userData = await User.findById(userId)

    const  bookId = req.params.id
    const isBookFavourite = userData.favourites.includes(bookId)
    console.log(isBookFavourite)
    

    if(isBookFavourite){
        await User.findByIdAndUpdate(
            userData.id,
            {
                $pull:{
                    favourites: bookId
                }
            },
            {
                new: true
            }
        )
        console.log(userData)
        
        return res.status(200).json("Book removed from favourites.")
    }else{
        throw new apiError(404, "Book already removed!!!")
    }

})

export {delFavourites}

