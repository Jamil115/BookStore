import { Book } from "../models/book.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const allBooks = asyncHandler(async(req,res)=> {
    const books = await Book.find().sort({ createdAt: -1  })

    return res.status(200).json({data: books})
})

export {allBooks}