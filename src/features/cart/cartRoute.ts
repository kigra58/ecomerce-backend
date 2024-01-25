import { Router } from "express";
import {
  deleteCartItem,
  getCartItems,
  updateCartItems,
} from "./cartController";

export const cartRoute = Router();

/**
 * @swagger
 *  /api/cart/cart-item:
 *   get:
 *     description: get all cart items
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
cartRoute.get("cart-items", getCartItems);
/**
 * @swagger
 *  /api/cart/update-cart-items:
 *   get:
 *     description: get updated cart items
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
cartRoute.patch("update-cart-items", updateCartItems);
/**
 * @swagger
 *  /api/cart/delete-cart-item:
 *   get:
 *     description: get success message
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
cartRoute.delete("delete-cart-item", deleteCartItem);
