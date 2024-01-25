import { Router } from "express";
import { productList, productDetails, addProduct, deleteProduct } from "./productController";

export const productRoute = Router();

/**
 * @swagger
 *  /api/product/products:
 *   get:
 *     description: get all product list
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
productRoute.get("/products", productList);

/**
 * @swagger
 *  /api/product/product:
 *   get:
 *     description: get product details
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
productRoute.get("/:id", productDetails);

/**
 * @swagger
 *  /api/product/add-product:
 *   post:
 *     description: add new product
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
productRoute.post("/add-product", addProduct);

/**
 * @swagger
 *  /api/product/delete-product:
 *   delete:
 *     description: delete product
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
productRoute.delete("/delete-product", deleteProduct);
