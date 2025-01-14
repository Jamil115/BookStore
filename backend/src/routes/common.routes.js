import { Router } from "express";
import { insertBook } from "../controllers/book.controller.js";
import { registerUser } from "../controllers/registerUser.controller.js";
import { loginUser } from "../controllers/loginUser.controller.js";

const router = Router();

// router.route("/insert").post(insertBook);
router.route("/signup").post(registerUser)
router.route("/signin").post(loginUser)

export default router;