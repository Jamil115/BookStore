import express from "express"
const app = express()

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded( {extended: true, limit:"16kb"} ))

import commonRouter from "./routes/common.routes.js"

// app.use("/api/v1/books", commonRouter);
app.use("/api/v1", commonRouter);

export {app}