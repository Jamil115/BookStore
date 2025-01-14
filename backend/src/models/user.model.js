import mongoose from "mongoose"
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select: false
    },
    address: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg"
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    },
    favourites: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
    },
    orders: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "order"
    },
},{timestamps:true})

userSchema.pre("save", async function(next){
    this.password = await bcrypt.hash(this.password, 10)
    next()
})




export const User = mongoose.model("User", userSchema)