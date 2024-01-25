import { Router } from "express";
import { orderDetails, orderList } from "./orderController";

export const orderRoute = Router();
/**
 * @swagger
 *  /api/order/list:
 *   get:
 *     description: get all cart items
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
orderRoute.get("/orders", orderList);
/**
 * @swagger
 *  /api/order/details/:id:
 *   get:
 *     description: get all cart items
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
orderRoute.get("/order/:id", orderDetails);
