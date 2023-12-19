import {Request,Response,NextFunction} from 'express'

export const validation=(args:(req:Request)=>void )=> async(req:Request,res:Response,next:NextFunction)=>{
  try {
     args({...req.body,...req.params,...req.query})
  } catch (error) {
    console.log("==ValidationError==",error);
    res.status(400).send(error);
    next();
  }
}

