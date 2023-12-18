import { Router } from "express";
import { orderDetails, orderList } from "./orderController";

export const orderRoute = Router();

orderRoute.get("/orders", orderList);
orderRoute.get("/order/:id", orderDetails);
