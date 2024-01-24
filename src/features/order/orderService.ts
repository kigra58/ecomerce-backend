import { ParamsDictionary } from "express-serve-static-core";

class OrderService {
  /**
   * ORDER PRODUCT
   */
  async orderList({}) {
    try {
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * ORDER PRODUCT
   */
  async orderDetails(params: ParamsDictionary) {
    try {
      const { orderId } = params;
      console.log("========orderId", orderId);
    } catch (error) {
      console.error(error);
    }
  }
}

export default new OrderService();
