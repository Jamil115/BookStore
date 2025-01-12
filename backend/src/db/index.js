import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
        console.log(connectionInstance.connection)
        console.log("\n MongoDB connected Successfully!!! ",connectionInstance.connection.host);
    } catch (error) {
        console.log("MongoDB Connection Failed!!! ", error.message)
        process.exit(1)
    }
}

export default connectDB