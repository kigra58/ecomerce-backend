import { Router } from "express";
import { orderDetails, orderList } from "./orderController";

export const orderRoute = Router();
/**
 * @swagger
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
orderRoute.get("/orders", orderList);
orderRoute.get("/order/:id", orderDetails);
