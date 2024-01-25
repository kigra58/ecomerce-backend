import {Request,Response} from 'express'
import userService from './userService';

/**
 * GET USER DETAILS
 * @param req 
 * @param res 
 * @returns 
 */
export const userDetails = (req: Request, res: Response) => {
    const response = userService.userDetails(req.params);
    return res.status(200).send(response);
};

/**
 * UPDATE USER DETAILS
 * @param req 
 * @param res 
 * @returns 
 */
export const updateUserDetails = (req: Request, res: Response) => {
    const response = userService.updateUserDetails(req.body);
    return res.status(200).send(response);
};

/**
 * USER LIST
 * @param req 
 * @param res 
 * @returns 
 */
export const userList = (req: Request, res: Response) => {
    const response = userService.userList(req.query);
    return res.status(200).send(response);
};






  