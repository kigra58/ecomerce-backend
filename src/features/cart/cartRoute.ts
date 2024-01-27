import { Router } from "express";
import {
  deleteCartItem,
  getCartItems,
  updateCartItems,
} from "./cartController";

export const cartRoute = Router();

/**
 * @swagger
 *  /api/cart/list:
 *   get:
 *     description: get all cart items
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
cartRoute.get("/list", getCartItems);
/**
 * @swagger
 *  /api/cart/update:
 *   get:
 *     description: get updated cart items
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
cartRoute.patch("/update", updateCartItems);
/**
 * @swagger
 *  /api/cart/delete:
 *   get:
 *     description: get success message
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
cartRoute.delete("/delete", deleteCartItem);
