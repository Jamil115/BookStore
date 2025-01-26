import { Order } from "../models/order.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const updateOrderStatus = asyncHandler(async(req, res)=>{
    const {userId} = req.params
    await Order.findByIdAndUpdate(
        userId,
        {
            status: req.body.status
        }
    )

    return res.json(200).json("Status Updated Successfully")
})

export {updateOrderStatus}