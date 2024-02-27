import { ParamsDictionary } from "express-serve-static-core";
import { IAPIResponse, IProduct } from "../../interfaces";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class ProductService {
  private response: IAPIResponse | undefined;

  /**
   *  PRODUCT LIST
   */
  async productList({}) {
    try {
      const list = await prisma.product.findMany();

      console.log("====list", list);

      if (list && list.length > 0) {
        this.response = {
          success: true,
          message: "products list found",
          data: list,
        };
      } else {
        this.response = {
          success: false,
          message: "unable to found product list",
          data: [],
        };
      }
    } catch (error) {
      console.error(error);
    }
    return this.response;
  }

  /**
   *  PRODUCT DETAILS
   */
  async productDetails(params: ParamsDictionary) {
    try {
      const data = await prisma.product.findUnique({
        where: { id: Number(params.id) },
      });
      console.log("product details", data);
      if (data) {
        this.response = {
          success: true,
          message: "product found",
          data: [data],
        };
      } else {
        this.response = {
          success: false,
          message: "Unable to found product",
        };
      }
    } catch (error) {
      console.error(error);
    }
    return this.response;
  }

  /**
   *  ADD NEW PRODUCT
   */
  async addProduct(data: IProduct) {
    try {
      const newProduct = await prisma.product.createMany({ data });
      if (newProduct) {
        this.response = {
          success: true,
          message: "Add New Product succesfully",
          data: [data],
        };
      } else {
        this.response = {
          success: false,
          message: "Unable to add new Product",
        };
      }
    } catch (error) {
      console.error(error);
    }
    return this.response;
  }

  /**
   *  DELETE PRODUCT
   */
  async deleteProduct(params: ParamsDictionary) {
    try {
      const deleteData = await prisma.product.delete({
        where: { id: Number(params.id) },
      });
      if (deleteData) {
        this.response = {
          success: true,
          message: "data deleted successfully",
        };
      } else {
        this.response = {
          success: false,
          message: "unable to delete",
        };
      }
    } catch (error) {
      console.error(error);
    }
    return this.response;
  }
}

export default new ProductService();
