import { Book } from "../models/book.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const recentlyAddedBooks = asyncHandler(async(req,res)=> {
    const recentBooks = await Book.find().sort({ createdAt: -1  }).limit(4)

    return res.status(200).json({data: recentBooks})
})

export {recentlyAddedBooks}