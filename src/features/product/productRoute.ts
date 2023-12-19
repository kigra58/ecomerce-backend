import { Router } from "express";
import { productList, productDetails, addProduct } from "./productController";

export const productRoute = Router();


/**
 * @swagger
 * /product/products:
 *   get:
 *     description: get all product list
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
*/
productRoute.get("/products", productList);
productRoute.get("/product/:id", productDetails);
productRoute.post("/add-product", addProduct);
