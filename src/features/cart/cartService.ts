import { ParamsDictionary } from "express-serve-static-core";
import { PrismaClient } from "@prisma/client";
import { IAPIResponse } from "../../interfaces";
import { ParsedQs } from "qs";

const prisma = new PrismaClient();
class CartService {
  private response: IAPIResponse | undefined;

  /**
   *  CART ITEMS
   */
  async getCartItems(params: ParamsDictionary) {
    try {
      const result = await prisma.cart.findMany({
        where: { user_id: +params.userId },
        relationLoadStrategy: "join",
        include: {
          product: true,
        },
      });
      console.log(result, result);
      if (result && result.length > 0) {
        this.response = {
          success: true,
          message: "cart items found",
          data: result,
        };
      } else {
        this.response = {
          success: false,
          message: "cart items not found",
        };
      }
    } catch (error) {
      console.error(error);
    }
    return this.response;
  }

  /**
   *  UPDATE CART ITEMS
   */
  async updateCartItems({
    userId,
    productId,
    quantity,
  }: {
    userId: number;
    productId: number;
    quantity: number;
  }) {
    try {
      if (userId && productId && quantity) {
        const existProduct = await prisma.cart.findFirst({
          where: { user_id: userId, product_id: productId },
        });
        if (existProduct) {
          const updateQNT = await prisma.cart.update({
            where: { user_id: userId, product_id: productId },
            data: { quantity: existProduct.quantity + 1 },
          });
          if (updateQNT) {
            this.response = {
              success: true,
              message: "cart item updated successfully",
            };
          } else {
            this.response = {
              success: false,
              message: "unable to update cart item",
            };
          }
        } else {
          const result = await prisma.cart.createMany({
            data: {
              user_id: userId,
              product_id: productId,
              quantity: quantity,
            },
          });

          if (result) {
            this.response = {
              success: true,
              message: "cart item updated successfully",
            };
          } else {
            this.response = {
              success: false,
              message: "unable to update cart item",
            };
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
    return this.response;
  }

  /**
   *   DELETE ITEM
   */
  async deleteCartItem(body: ParsedQs) {
    try {
      const {userId,productId}=body;
      if(userId && productId){
        const result=await prisma.cart.delete({
          where:{user_id:+userId,product_id:+productId}
        });
        console.log("resultresultresult",result);
        if(result){
          this.response = {
            success: true,
            message: "cart item deleted successfully",
          };
        }else{
          this.response = {
            success: false,
            message: "cart item not deleted",
          };
        }
      }else{
          this.response = {
            success: false,
            message: "userId and productId are required",
          };
      }
    } catch (error) {
      console.error(error);
    }
  }
}
export default new CartService();
