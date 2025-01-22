import { User } from "../models/user.model.js";
import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const cart = asyncHandler(async(req,res)=>{
    const userId = req.user.id
    const userData = await User.findById(userId)
    console.log(userData)

    const bookId = req.params.id

    const isCart = userData.cart.includes(bookId)
    if(isCart)
        throw new apiError(500, "This book is already added into cart.")

    await User.findByIdAndUpdate(
        userData.id,
        {
            $push: {
                cart: bookId
            }
        },
        {
            new: true
        }
    )
    return res.status(200).json("Your book is added into the cart successfully. ")
})

export {cart}