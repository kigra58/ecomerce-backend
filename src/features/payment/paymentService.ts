import { ParamsDictionary } from "express-serve-static-core";
import { IAPIResponse } from "../../interfaces";
import { ParsedQs } from "qs";

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
