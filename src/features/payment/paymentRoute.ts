import { Router } from "express";
import { userPayment } from "./paymentController";

export const paymentRoute = Router();

paymentRoute.get("/payment", userPayment);
