import { Router } from "express";
import {
  changePassword,
  forgotPassword,
  login,
  signup,
} from "./authController";

export const authRoute = Router();

/**
 * @swagger
 *  /api/auth/login:
 *   get:
 *     description: get update user details
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
authRoute.post("/login", login);
/**
 * @swagger
 *  /api/auth/signup:
 *   get:
 *     description: get update user details
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
authRoute.post("/signup", signup);
/**
 * @swagger
 *  /api/auth/forgot-password:
 *   get:
 *     description: get update user details
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
authRoute.post("/forgot-password", forgotPassword);
/**
 * @swagger
 *  /api/auth/change-password:
 *   get:
 *     description: get update user details
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
authRoute.post("/change-password", changePassword);
