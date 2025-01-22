import { Book } from "../models/book.model.js";
import { User } from "../models/user.model.js";
import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const insertBook = asyncHandler(async (req, res)=> {

    const userId = req.user._id;
    const user = await User.findById(userId)
    console.log(user)
    console.log("role : ", user.role)

    if(user.role == 'user')
        throw new apiError(500, "you are not having access to perform admin work")

    const {title, author, publishYear, price, description, language} = req.body

    const existedBook = await Book.findOne({title})

    if(existedBook)
        throw new apiError(500, "This book is already exists!!!")

    const book = await Book.create({
        title,
        author,
        publishYear,
        price,
        description,
        language
    })

    // await book.save

    if( !book )
        throw new apiError(500, "Invalid Credentials")

    return res.status(200).json("Book uploaded Successfully")
    
})



export {insertBook}