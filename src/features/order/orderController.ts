import productService from "./orderService"
import {Request,Response} from 'express'


/**
 * PRODUCT LIST
 * @param req 
 * @param res 
 * @returns 
 */
export const orderList=(req:Request,res:Response)=>{
    const response=productService.orderList(req.query)
    return res.status(200).send(response);
}
/**
 * PRODUCT DETAILS
 * @param req 
 * @param res 
 * @returns 
 */
export const orderDetails=(req:Request,res:Response)=>{
    const response=productService.orderDetails(req.query)
    return res.status(200).send(response);
}
