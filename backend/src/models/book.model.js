import mongoose, {} from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        publishYear: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        }, 
        language: {
            type: Number,
            required: true
        },
    }, {timestamps: true}
)

export const Book = mongoose.model("Book", bookSchema);