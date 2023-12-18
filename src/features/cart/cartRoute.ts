import { Router } from "express";
import {
  deleteCartItem,
  getCartItems,
  updateCartItems,
} from "./cartController";

export const cartRoute = Router();

cartRoute.get("cart-items", getCartItems);
cartRoute.patch("update-cart-items", updateCartItems);
cartRoute.patch("delete-cart-item", deleteCartItem);
