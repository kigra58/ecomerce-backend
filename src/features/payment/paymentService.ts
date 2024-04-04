import { ParamsDictionary } from "express-serve-static-core";
import { IAPIResponse } from "../../interfaces";
import { ParsedQs } from "qs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
class ProductService {
  private response: IAPIResponse | undefined;

  /**
   *  CREATE PAYMENT
   */
  async createPayment({}) {
    try {
      
    } catch (error) {
      console.error(error);
    }
    return this.response;
  }

  /**
   *  PAYMENT LIST
   */
  async paymentList(query: ParsedQs) {
    try {
      const list =await prisma.userPayment.findMany();
      if(list && list.length>0){
        this.response={
          success:true,
          message:"payment list found",
          data:list
        }
      }else{
        this.response={
            success:false,
            message:"payment list not found",
        }
      };
    } catch (error) {
      console.error(error);
    }
    return this.response;
  }

  /**
   *  PAYMENT DETAILS
   */
  async paymentDetails(params: ParamsDictionary) {
    try {
      const details =await prisma.userPayment.findFirst({
        where:{
          id:Number(params.id)
        }
      });
      if(details){
        this.response={
          success:true,
          message:"payment details found",
          data:[details]
        }
      }else{
        this.response={
            success:false,
            message:"payment details not found",
        }
      };
    } catch (error) {
      console.error(error);
    }
    return this.response;
  }

  /**
   * UPDATE PAYMENT
   */
  async updatePayment(params: ParamsDictionary) {
    try {
    } catch (error) {
      console.error(error);
    }
    return this.response;
  }
}

export default new ProductService();
