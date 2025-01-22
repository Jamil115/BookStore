import { User } from "../models/user.model.js";
import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const delCart = asyncHandler(async(req,res)=> {
    const userId = req.user._id
    console.log(userId)
    const userData = await User.findById(userId)
    console.log(userData)
    
    const bookId = req.params.id
    console.log(bookId)
    const isCart = userData.cart.includes(bookId)
    console.log(isCart)
    if(isCart){
        await User.findByIdAndUpdate(
            userData.id,
            {
                $pull: {
                    cart: bookId
                }
            },
            {
                new: true
            }
        )

        return res.status(200).json("Book removed from cart successfully!!!")
    }else{
        throw new apiError(500, "This book is not present into the cart.")
    }
})

export {delCart}