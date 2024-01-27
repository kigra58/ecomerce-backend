import { Request, Response } from "express";
import categoryService from "./categoryService";

/**
 * CATEGORY LIST
 * @param req
 * @param res
 * @returns
 */
export const addNewCategory = (req: Request, res: Response) => {
  const response = categoryService.addNewCategory(req.body);
  return res.status(200).send(response);
};
/**
 * CATEGORY LIST
 * @param req
 * @param res
 * @returns
 */
export const categoryList = (req: Request, res: Response) => {
  const response = categoryService.getAllCategory(req.query);
  return res.status(200).send(response);
};

/**
 * CATEGORY DETAILS
 * @param req
 * @param res
 * @returns
 */
export const categoryDetails = (req: Request, res: Response) => {
  const response = categoryService.getCategoryDetails(req.params);
  return res.status(200).send(response);
};

/**
 * PRODUCTS BY CATEGORY
 * @param req
 * @param res
 * @returns
 */
export const getAllProductsByCategory = (req: Request, res: Response) => {
  const response = categoryService.getAllProductByCategory(req.params);
  return res.status(200).send(response);
};

/**
 * UPDATE CATEGORY
 * @param req
 * @param res
 * @returns
 */
export const updateCategory = (req: Request, res: Response) => {
  const response = categoryService.updateCategory(req.params);
  return res.status(200).send(response);
};

/**
 * DELETE CATEGORY
 * @param req
 * @param res
 * @returns
 */
export const deleteCategory = (req: Request, res: Response) => {
  const response = categoryService.deleteCategory(req.params);
  return res.status(200).send(response);
};
