import { Request, Response } from "express";
import productService from "./paymentService";

/**
 * USER PAYMENT
 * @param req
 * @param res
 * @returns
 */
export const userPayment = (req: Request, res: Response) => {
  const response = productService.userPayment(req.body);
  return res.status(200).send(response);
};



