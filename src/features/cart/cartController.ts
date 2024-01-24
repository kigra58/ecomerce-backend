import cartService from "./cartService";
import { Request, Response } from "express";

/**
 * CART ITEMS
 * @param req
 * @param res
 * @returns
 */
export const getCartItems = (req: Request, res: Response) => {
  const response = cartService.getCartItems(req.params);
  return res.status(200).send(response);
};

/**
 * UPDATE CART ITEMS
 * @param req
 * @param res
 * @returns
 */
export const updateCartItems = (req: Request, res: Response) => {
  const response = cartService.updateCartItems(req.body);
  return res.status(200).send(response);
};

/**
 * DELETE CART ITEM
 * @param req
 * @param res
 * @returns
 */
export const deleteCartItem = (req: Request, res: Response) => {
  const response = cartService.deleteCartItem(req.body);
  return res.status(200).send(response);
};
