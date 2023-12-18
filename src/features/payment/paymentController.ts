

import {Request,Response} from 'express'
import productService from "./paymentService"



/**
 * PRODUCT DETAILS
 * @param req 
 * @param res 
 * @returns 
 */
export const productDetails=(req:Request,res:Response)=>{
    const response=productService.userPayment(req.body)
    return response;
}
