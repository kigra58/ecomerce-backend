import { ParamsDictionary } from "express-serve-static-core";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
class CartService {
  /**
   *  CART ITEMS
   */
  async getCartItems(params: ParamsDictionary) {
    try {
      // const data=await prisma.order.findUnique({
      //   where:{user_id:Number(params.userId)}
      // })
    } catch (error) {
      console.error(error);
    }
  }

  /**
   *  UPDATE CART ITEMS
   */
  async updateCartItems({ userId }: { userId: number }) {
    try {

    } catch (error) {
      console.error(error);
    }
  }

  /**
   *   DELETE ITEM
   */
  async deleteCartItem({userId,productId}:{userId:number,productId:number}) {
    try {
      // const result=await prisma.cart.delete({
      //   where:{user_id:Number(userId),product_id:Number(productId)}
      // })
    } catch (error) {
      console.error(error);
    }
  }
}
export default new CartService();
