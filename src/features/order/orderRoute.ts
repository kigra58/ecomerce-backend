import { Router } from "express";
import { orderDetails, orderList, createNewOrder } from "./orderController";

export const orderRoute = Router();

/**
 * @swagger
 *  /api/order/create:
 *   post:
 *     description: get all order list for particular user
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
orderRoute.get("/create", createNewOrder);

/**
 * @swagger
 *  /api/order/list:
 *   get:
 *     description: get all order list for particular user
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
orderRoute.get("/list", orderList);

/**
 * @swagger
 *  /api/order/details/:id:
 *   get:
 *     description: get all cart items
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
orderRoute.get("/:orderId", orderDetails);
