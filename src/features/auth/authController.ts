import { Request, Response } from "express";
import AuthService from "./authService";

/**
 * LOGIN
 * @param req
 * @param res
 * @returns
 */
export const login = (req: Request, res: Response) => {
  const response = AuthService.login(req.body);
  return response;
};

/**
 * SIGNUP
 * @param req
 * @param res
 * @returns
 */
export const signup = (req: Request, res: Response) => {
  const response = AuthService.signup(req.body);
  return response;
};

/**
 * FORGOT PASSWORD
 * @param req
 * @param res
 * @returns
 */
export const forgotPassword = (req: Request, res: Response) => {
  const response = AuthService.forgotPassword(req.body);
  return response;
};

/**
 * CHANGE PASSOWRD
 * @param req
 * @param res
 * @returns
 */
export const changePassword = (req: Request, res: Response) => {
  const response = AuthService.changePassword(req.body);
  return response;
};
