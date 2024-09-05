import express from "express";
import  {authenticate, authoriseAdmin} from "../middleware/authMiddleware.js"
import { createCategory, updateCategory, deleteCategory, listCategory, readCategory } from "../controllers/categoryController.js";

const router = express.Router()

router.route("/").post(authenticate, authoriseAdmin, createCategory)
router.route("/:categoryId").put(authenticate, authoriseAdmin, updateCategory)
router.route("/:categoryId").delete(authenticate, authoriseAdmin, deleteCategory)
router.route("/categories").get(listCategory)
router.route("/:id").get(readCategory)

export default router