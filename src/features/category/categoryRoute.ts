import { Router } from "express";
import {
  addNewCategory,
  categoryList,
  categoryDetails,
  deleteCategory,
  updateCategory,
  getAllProductsByCategory,
} from "./categoryController";
import multer from "multer";

export const categoryRoute = Router();

/**
 * @swagger
 *  /api/category/create:
 *   post:
 *     description: get new category
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
const upload = multer({ dest: "src/utils/uploads" }).single("file");
categoryRoute.post("/create", upload,addNewCategory);
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
 *  /api/category/details:
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
 *   delete:
 *     description: get updated category
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
categoryRoute.patch("/update", updateCategory);
/**
 * @swagger
 *  /api/category/category-products:
 *   update:
 *     description: get all products from this category
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
categoryRoute.get("/products", getAllProductsByCategory);
