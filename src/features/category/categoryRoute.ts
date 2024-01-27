import { Router } from "express";
import {
  addNewCategory,
  categoryList,
  categoryDetails,
  deleteCategory,
  updateCategory,
  getAllProductsByCategory,
} from "./categoryController";

const categoryRoute = Router();

/**
 * @swagger
 *  /api/category/create:
 *   get:
 *     description: get new category
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
categoryRoute.post("/create", addNewCategory);
/**
 * @swagger
 *  /api/category/list:
 *   get:
 *     description: get all categories
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
categoryRoute.get("/list", categoryList);
/**
 * @swagger
 *  /api/category/details
 *   get:
 *     description: get category details
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
categoryRoute.get("/details", categoryDetails);
/**
 * @swagger
 *  /api/category/delete:
 *   get:
 *     description: get success message
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
categoryRoute.delete("/delete", deleteCategory);
/**
 * @swagger
 *  /api/category/update:
 *   get:
 *     description: get updated category
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
categoryRoute.patch("/update", updateCategory);
/**
 * @swagger
 *  /api/category/category-products:
 *   get:
 *     description: get all products from this category
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
categoryRoute.get("/category-products", getAllProductsByCategory);
