import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getCart = asyncHandler(async(req,res)=>{
    const userId = req.user.id
    const userData = await User.findById(userId)
    console.log(userData)

    const cart = userData.cart.reverse()
    
    return res.status(200).json({data: cart})
})

export {getCart}