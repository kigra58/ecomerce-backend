import productService from "./orderService";
import { Request, Response } from "express";

/**
 * CREATE NEW ORDER
 * @param req
 * @param res
 * @returns
 */
export const createNewOrder = (req: Request, res: Response) => {
  const response = productService.createNewOrder(req.body);
  return res.status(200).send(response);
};

/**
 * ORDER LIST
 * @param req
 * @param res
 * @returns
 */
export const orderList = (req: Request, res: Response) => {
  const response = productService.orderList(req.query);
  return res.status(200).send(response);
};
/**
 * ORDER DETAILS
 * @param req
 * @param res
 * @returns
 */
export const orderDetails = (req: Request, res: Response) => {
  const response = productService.orderDetails(req.params);
  return res.status(200).send(response);
};
