import { Order } from "../models/order.model.js";
import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const placeOrder = asyncHandler(async(req, res)=>{
    const userId = req.user.id
    const {order} = req.body

    for(const orderData of order){
        console.log(orderData)
        const newOrder = Order.create(
            {
                user: userId,
                book: orderData._id
            }
        )

        await User.findByIdAndUpdate(
            userId,
            {
                $push:{
                    order: orderData._id
                }
            }
        )

        await User.findByIdAndUpdate(
            userId,
            {
                $pull:{
                    cart: orderData._id
                }
            }
        )
    }
    return res.status(200).json("Order Placed Successfully")
})

export {placeOrder}