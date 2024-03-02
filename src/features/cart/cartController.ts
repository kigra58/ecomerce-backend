import cartService from "./cartService";
import { Request, Response } from "express";

/**
 * CART ITEMS
 * @param req
 * @param res
 * @returns
 */
export const getCartItems =async (req: Request, res: Response) => {
  const response =await cartService.getCartItems(req.params);
  return res.status(200).send(response);
};

/**
 * UPDATE CART ITEMS
 * @param req
 * @param res
 * @returns
 */
export const updateCartItems =async (req: Request, res: Response) => {
  const response =await cartService.updateCartItems(req.body);
  return res.status(200).send(response);
};

/**
 * DELETE CART ITEM
 * @param req
 * @param res
 * @returns
 */
export const deleteCartItem =async (req: Request, res: Response) => {
  const response =await cartService.deleteCartItem(req.body);
  return res.status(200).send(response);
};
