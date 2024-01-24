import { ParamsDictionary } from "express-serve-static-core";
import { IAPIResponse, IProduct } from "../../interfaces";

class ProductService {
  private response: IAPIResponse | undefined;

  /**
   *  PRODUCT LIST
   */
  async productList({}) {
    try {
      const arr = [{ id: 101 }, { id: 102 }, { id: 103 }, { id: 104 }];
      this.response = {
        success: true,
        message: "",
        data: arr,
        error: null,
      };
      return this.response;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   *  PRODUCT DETAILS
   */
  async productDetails(params: ParamsDictionary) {
    const { productId } = params;
    try {
      console.log("productId", productId);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   *  ADD NEW PRODUCT
   */
  async addProduct({ title }: IProduct) {
    try {
    } catch (error) {
      console.error(error);
    }
  }

  /**
   *  DELETE PRODUCT
   */
  async deleteProduct(params: ParamsDictionary) {
    try {
      const { productId } = params;
      console.log("productId", productId);
    } catch (error) {
      console.error(error);
    }
  }
}

export default new ProductService();
