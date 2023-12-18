import productService from "./productService"
import {Request,Response} from 'express'


/**
 * PRODUCT LIST
 * @param req 
 * @param res 
 * @returns 
 */
export const productList=(req:Request,res:Response)=>{
    const response=productService.productList(req.query)
    return response;
}
/**
 * PRODUCT DETAILS
 * @param req 
 * @param res 
 * @returns 
 */
export const productDetails=(req:Request,res:Response)=>{
    const response=productService.productDetails(req.query)
    return response;
}
/**
 * PRODUCT LIST
 * @param req 
 * @param res 
 * @returns 
 */
export const addProduct=(req:Request,res:Response)=>{
    const response=productService.addProduct(req.body)
    return response;
}