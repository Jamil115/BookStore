import { Book } from "../models/book.model.js";
import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const deleteBook = asyncHandler(async (req, res) => {

    if(req.user.role == 'user')
        throw new apiError(500, "Only admins can update!!!")

    const {id} = req.params     //frontend eo mongodb er id diyei url banaite hobe tailei evabe url theke id niye then ber kore kora jay jeta ashole effective way

    const delBook = await Book.findByIdAndDelete(id)
    if(!delBook)
        throw new apiError(500, "There has no book according to this id")

    return res.status(200).json("The book has been deleted!!!")
})

export {deleteBook}