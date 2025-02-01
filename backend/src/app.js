import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',
    Credentials: true
}))

// app.use(cors)
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded( {extended: true, limit:"16kb"} ))
app.use(cookieParser())

import commonRouter from "./routes/common.routes.js"

// app.use("/api/v1/books", commonRouter);
app.use("/api/v1", commonRouter);

export {app}