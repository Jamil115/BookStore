import { Order } from "../models/order.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getAllOrder = asyncHandler(async(req, res)=>{
    
    const userData = await Order.find()
    .populate({
        path: "book",
    })
    .populate({
        path: "user"
    })
    .sort({createdAt: -1})

    return res.json(200).json({data: userData})
})

export {getAllOrder}