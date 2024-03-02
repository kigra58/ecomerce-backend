import { Request, Response } from "express";
import categoryService from "./categoryService";

/**
 * CATEGORY LIST
 * @param req
 * @param res
 * @returns
 */
export const addNewCategory = async (req: Request, res: Response) => {
  const response = await categoryService.addNewCategory(req.body);
  return res.status(200).send(response);
};
/**
 * CATEGORY LIST
 * @param req
 * @param res
 * @returns
 */
export const categoryList = async (req: Request, res: Response) => {
  const response = await categoryService.getAllCategory(req.query);
  return res.status(200).send(response);
};

/**
 * CATEGORY DETAILS
 * @param req
 * @param res
 * @returns
 */
export const categoryDetails = async (req: Request, res: Response) => {
  const response = await categoryService.getCategoryDetails(req.params);
  return res.status(200).send(response);
};

/**
 * PRODUCTS BY CATEGORY
 * @param req
 * @param res
 * @returns
 */
export const getAllProductsByCategory = async (req: Request, res: Response) => {
  const response = await categoryService.getAllProductByCategory(req.params);
  return res.status(200).send(response);
};

/**
 * UPDATE CATEGORY
 * @param req
 * @param res
 * @returns
 */
export const updateCategory = async (req: Request, res: Response) => {
  const response = await categoryService.updateCategory(req.params);
  return res.status(200).send(response);
};

/**
 * DELETE CATEGORY
 * @param req
 * @param res
 * @returns
 */
export const deleteCategory = async (req: Request, res: Response) => {
  const response = await categoryService.deleteCategory(req.params);
  return res.status(200).send(response);
};
