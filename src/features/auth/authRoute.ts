import { Router } from "express";
import {
  changePassword,
  forgotPassword,
  login,
  signup,
} from "./authController";

export const authRoute = Router();

authRoute.post("/login", login);
authRoute.post("/signup", signup);
authRoute.post("/forgot-password", forgotPassword);
authRoute.post("/change-password", changePassword);
