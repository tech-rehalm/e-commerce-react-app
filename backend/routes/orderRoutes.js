 import express from "express"
 import {authenticate, authoriseAdmin} from "../middleware/authMiddleware.js"
 import { createOrder,countTotalOrders, calculateTotalSales, getAllOrders,calculateTotalSalesByDate,findOrderById,  getUserOrders, markOrderAsPaid, markOrderAsDelivered } from "../controllers/orderController.js"

 const router = express.Router()

 router.route("/").post(authenticate, createOrder).get(authenticate, authoriseAdmin, getAllOrders)

 router.route("/mine").get(authenticate, getUserOrders)
 router.route("/total-orders").get(countTotalOrders)
 router.route("/total-slaes").get(calculateTotalSales)
 router.route("/total-sales-by-date").get(calculateTotalSalesByDate)
 router.route("/:id").get(authenticate, findOrderById)
 router.route("/:id/pay").put(authenticate, markOrderAsPaid)
 router.route("/:id/deliver").put(authenticate, authoriseAdmin, markOrderAsDelivered)

export default router