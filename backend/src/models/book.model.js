import mongoose, {} from "mongoose";


//etay image sction add korte mone chilo na jeta tai pore shortcut e korar jonno mongodb database e oikhane edit kore boshaye disi pore.
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
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }, 
        language: {
            type: String,
            required: true
        },
    }, {timestamps: true}
)

export const Book = mongoose.model("Book", bookSchema);