import productService from "./productService";
import { Request, Response } from "express";

/**
 * PRODUCT LIST
 * @param req
 * @param res
 * @returns
 */
export const productList =async (req: Request, res: Response) => {
  const response =await productService.productList(req.query);
  console.log("responseresponseresponse",response);
  return res.status(200).send(response);
};
/**
 * PRODUCT DETAILS
 * @param req
 * @param res
 * @returns
 */
export const productDetails =async (req: Request, res: Response) => {
  const response =await productService.productDetails(req.params);
  return res.status(200).send(response);
};
/**
 * ADD PRODUCT
 * @param req
 * @param res
 * @returns
 */
export const addProduct =async (req: Request, res: Response) => {
  const response =await productService.addProduct(req.body);
  return res.status(200).send(response);
};
/**
 * DELETE PRODUCT
 * @param req
 * @param res
 * @returns
 */
export const deleteProduct =async (req: Request, res: Response) => {
  const response =await productService.deleteProduct(req.params);
  return res.status(200).send(response);
};
