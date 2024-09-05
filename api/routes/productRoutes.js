import express from "express";
import formidable from "express-formidable"
import { authenticate, authoriseAdmin } from "../middleware/authMiddleware.js";
import checkId from "../middleware/checkId.js"

//controllers
import { addProduct, updateProductDetails, removeProduct, fetchProducts, fetchProductById, fetchAllProducts, addProductReview, fetchTopProducts, fetchNewProducts, filterProducts } from "../controllers/productController.js";

const router = express.Router()

router.route("/")
    .get(fetchProducts).
    post(authenticate, authoriseAdmin,formidable(),  addProduct)

router.route("/allProducts").get(fetchAllProducts)
router.route("/:id/reviews").post(authenticate,checkId, addProductReview)
router.get("/top", fetchTopProducts)
router.get("/new", fetchNewProducts)

router.route("/:id")
    .get(fetchProductById)
    .put(authenticate, authoriseAdmin, formidable(), updateProductDetails)
    .delete(authenticate, authoriseAdmin, formidable(), removeProduct)

router.route("/filtered-products").post(filterProducts)

export default router
