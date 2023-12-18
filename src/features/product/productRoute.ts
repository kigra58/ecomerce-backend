import { Router } from "express";
import { productList, productDetails, addProduct } from "./productController";

export const productRoute = Router();

productRoute.get("/products", productList);
productRoute.get("/product/:id", productDetails);
productRoute.post("/add-product", addProduct);
