import { ParamsDictionary } from "express-serve-static-core";

class CartService {
  /**
   *  CART ITEMS
   */
  async getCartItems(params: ParamsDictionary) {
    try {
      const { userId } = params;
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
  async deleteCartItem({}) {
    try {
    } catch (error) {
      console.error(error);
    }
  }
}
export default new CartService();
