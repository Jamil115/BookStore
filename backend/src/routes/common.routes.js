import { Router } from "express";
import { registerUser } from "../controllers/registerUser.controller.js";
import { loginUser } from "../controllers/loginUser.controller.js";
import { logoutUser } from "../controllers/logoutUser.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { insertBook } from "../controllers/addBook.controller.js";
import { updateBook } from "../controllers/updateBook.controller.js";
import { deleteBook } from "../controllers/deleteBook.controller.js";
import { allBooks } from "../controllers/allBooks.controller.js";
import { recentlyAddedBooks } from "../controllers/recentlyAddedBooks.controller.js";
import { favourites } from "../controllers/addToFavourite.controller.js";
import { delFavourites } from "../controllers/deleteFromFavourite.controller.js";
import { cart } from "../controllers/addToCart.controller.js";
import { delCart } from "../controllers/deleteFromCart.controller.js";
import { getCart } from "../controllers/getUserCart.controller.js";
import { getfav } from "../controllers/getFavouriteBooks.controller.js";
import { placeOrder } from "../controllers/placeOrder.controller.js";
import { getOrder } from "../controllers/getOrder.controller.js";
import { getAllOrder } from "../controllers/getAllOrderForAdmin.controller.js";
import { updateOrderStatus } from "../controllers/updateOrderStatus.controller.js";

const router = Router();

router.route("/sign-up").post(registerUser)
router.route("/sign-in").post(loginUser)
router.route("/sign-out").post(verifyJWT,logoutUser)
router.route("/add-book").post(verifyJWT, insertBook);
router.route("/update-book/:id").put(verifyJWT, updateBook);
router.route("/delete-book/:id").delete(verifyJWT, deleteBook);
router.route("/get-all-books").get(allBooks);
router.route("/get-recent-books").get(recentlyAddedBooks);
router.route("/add-book-to-favourite/:id").put(verifyJWT, favourites);
router.route("/delete-book-from-favourite/:id").put(verifyJWT, delFavourites);
router.route("/get-favourite-book").get(verifyJWT, getfav);
router.route("/add-to-cart/:id").put(verifyJWT, cart);
router.route("/delete-book-from-cart/:id").put(verifyJWT, delCart);
router.route("/get-user-cart").get(verifyJWT, getCart);
router.route("/place-order").post(verifyJWT, placeOrder);
router.route("/get-order").get(verifyJWT, getOrder);
router.route("/get-all-order").get(getAllOrder);
router.route("/update-order-status/:id").get(updateOrderStatus);


export default router;