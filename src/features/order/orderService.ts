import { ParamsDictionary } from "express-serve-static-core";
import { PrismaClient } from "@prisma/client";
import { IAPIResponse } from "../../interfaces";
import { ParsedQs } from "qs";
const prisma = new PrismaClient();

class OrderService {
  private response: IAPIResponse | undefined;

  /**
   *  CREATE NEW OREDER
   */
  async createNewOrder({userId}: { userId: number }) {
    try {
      /**
       * 1. FIND THE CART DATA
       * 2. CREATE PAYMENT FOR THIS CART
       * 3. ADD ENTRY IN ORDERS TABLE AND ORDER HISTORY TABLE
       */
      const findCartData=await prisma.cart.findMany({
        where: { user_id: userId },
      });

      if(findCartData && findCartData.length > 0) {
         /**
          *  1. CREATE STRIPE PAYMENT
          *  2. ADD ENTRY IN PAYMENTS TABLE
          *  3. 
          */
      };
    } catch (error) {
      console.error(error);
    }
    return this.response;
  }

  /**
   * ORDER PRODUCT
   */
  async orderList(query: ParsedQs) {
    try {
      const list = await prisma.order.findMany({
        where: { user_id: Number(query.userId) },
      });
      if (list && list.length > 0) {
        this.response = {
          success: true,
          message: "order list found",
          data: list,
        };
      } else {
        this.response = {
          success: false,
          message: "order list not found",
        };
      }
    } catch (error) {
      console.error(error);
    }
    return this.response;
  }

  /**
   * ORDER PRODUCT
   */
  async orderDetails(params: ParamsDictionary) {
    try {
      const data = await prisma.order.findUnique({
        where: { id: Number(params.id) },
      });
      if (data) {
        this.response = {
          success: true,
          message: "order details found",
          data: [data],
        };
      } else {
        this.response = {
          success: false,
          message: "order details not found",
        };
      }
    } catch (error) {
      console.error(error);
    }
    return this.response;
  }
}

export default new OrderService();
