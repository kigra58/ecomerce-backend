import { Router } from "express";
import {
  productList,
  productDetails,
  addProduct,
  deleteProduct,
} from "./productController";

export const productRoute = Router();

/**
 * @swagger
 *  /api/product/list:
 *   get:
 *     description: get all product list
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
productRoute.get("/list", productList);

/**
 * @swagger
 *  /api/product/details:
 *   get:
 *     description: get product details
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
productRoute.get("/:id", productDetails);

/**
 * @swagger
 *  /api/product/create:
 *   post:
 *     description: add new product
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
productRoute.post("/create", addProduct);

/**
 * @swagger
 *  /api/product/delete:
 *   delete:
 *     description: delete product
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
productRoute.delete("/delete", deleteProduct);
