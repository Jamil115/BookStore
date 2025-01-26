import { Book } from "../models/book.model.js";
import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const updateBook = asyncHandler(async(req, res)=>{
    
    if(req.user.role == 'user')
        throw new apiError(500, "Only admins can update!!!")

    
    await Book.findByIdAndUpdate(
        req.params.id,        //frontend eo mongodb er id diyei url banaite hobe tailei evabe url theke id niye then ber kore kora jay jeta ashole effective way
        {$set: req.body},
        {new: true}
    )

    return res.status(200).json("Information Updated Successfully")

})


export {updateBook}