import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getOrder = asyncHandler(async(req, res)=>{
    const userId = req.user
    const userData = await User.findById(userId).populate({
        path: "orders",
        populate: {
            path: "book"
        }
    })
    const orderData = userData.orders.reverse()

    return res.json(200).json({data: orderData})
})

export {getOrder}