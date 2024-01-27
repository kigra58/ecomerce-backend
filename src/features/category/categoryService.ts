import { PrismaClient } from "@prisma/client";
import { IAPIResponse } from "../../interfaces";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

const prisma = new PrismaClient();
class ProductCategory {
  private response: IAPIResponse | undefined;

  async addNewCategory({}: {
    title: string;
    description: string;
    parentCategory: string;
  }) {
    try {
      const addNewCategory = await prisma;
    } catch (error) {
      console.error(error);
    }
    return this.response;
  }

  async getAllCategory(query: ParsedQs) {
    try {
    } catch (error) {
      console.error();
    }
    return this.response;
  }

  async getAllProductByCategory(params: ParamsDictionary) {
    try {
    } catch (error) {
      console.error(error);
    }
  }

  async updateCategory(params: ParamsDictionary) {
    try {
    } catch (error) {
      console.error(error);
    }
    return this.response;
  }

  async getCategoryDetails(params: ParamsDictionary) {
    try {
    } catch (error) {
      console.error();
    }
  }
  async deleteCategory(params: ParamsDictionary) {
    try {
    } catch (error) {
      console.error();
    }
    return this.response;
  }
}

export default new ProductCategory();
