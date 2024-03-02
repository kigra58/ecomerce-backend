import { Request, Response } from "express";
import paymentService from "./paymentService";

/**
 * CREATE PAYMENT
 * @param req
 * @param res
 * @returns
 */
export const createPayment = async (req: Request, res: Response) => {
  const response = await paymentService.createPayment(req.body);
  return res.status(200).send(response);
};

/**
 *  PAYMENT LIST
 * @param req
 * @param res
 * @returns
 */
export const paymentList = async (req: Request, res: Response) => {
  const response = await paymentService.paymentList(req.query);
  return res.status(200).send(response);
};
/**
 * PAYMENT DEATILS
 * @param req
 * @param res
 * @returns
 */
export const paymentDetails = async (req: Request, res: Response) => {
  const response = await paymentService.paymentDetails(req.params);
  return res.status(200).send(response);
};
/**
 * UPDATE PAYMENT
 * @param req
 * @param res
 * @returns
 */
export const updatePayment = async (req: Request, res: Response) => {
  const response = await paymentService.updatePayment(req.params);
  return res.status(200).send(response);
};
