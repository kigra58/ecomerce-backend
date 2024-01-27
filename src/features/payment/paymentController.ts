import { Request, Response } from "express";
import paymentService from "./paymentService";

/**
 * CREATE PAYMENT
 * @param req
 * @param res
 * @returns
 */
export const createPayment = (req: Request, res: Response) => {
  const response = paymentService.createPayment(req.body);
  return res.status(200).send(response);
};

/**
 *  PAYMENT LIST
 * @param req
 * @param res
 * @returns
 */
export const paymentList = (req: Request, res: Response) => {
  const response = paymentService.paymentList(req.query);
  return res.status(200).send(response);
};
/**
 * PAYMENT DEATILS
 * @param req
 * @param res
 * @returns
 */
export const paymentDetails = (req: Request, res: Response) => {
  const response = paymentService.paymentDetails(req.params);
  return res.status(200).send(response);
};
/**
 * UPDATE PAYMENT
 * @param req
 * @param res
 * @returns
 */
export const updatePayment = (req: Request, res: Response) => {
  const response = paymentService.updatePayment(req.params);
  return res.status(200).send(response);
};
