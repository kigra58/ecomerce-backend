import { Router } from "express";
import {
  createPayment,
  paymentDetails,
  paymentList,
  updatePayment,
} from "./paymentController";

export const paymentRoute = Router();

/**
 * @swagger
 *  /api/payment/create:
 *   post:
 *     description: create new payment
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
paymentRoute.post("/create", createPayment);
/**
 * @swagger
 *  /api/payment/list:
 *   get:
 *     description: get update user payment list
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
paymentRoute.get("/list", paymentList);
/**
 * @swagger
 *  /api/payment/details:
 *   get:
 *     description: get update user payment list
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
paymentRoute.get("/:id", paymentDetails);
/**
 * @swagger
 *  /api/payment/update:
 *   patch:
 *     description: get updated payment details
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
paymentRoute.patch("/update", updatePayment);
