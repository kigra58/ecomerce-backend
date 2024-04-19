import { PrismaClient } from "@prisma/client";
import { IAPIResponse } from "../../interfaces";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { readCSVFile } from "../../utils/helper";

const prisma = new PrismaClient();
class ProductCategory {
  private response: IAPIResponse | undefined;

  // async addNewCategory({}: {
  //   title: string;
  //   description: string;
  //   parentCategory: string;
  // }) {

  async addNewCategory(file: Express.Multer.File | undefined) {
    try {
      if(file){
  
        const data=await readCSVFile(file.filename);
        console.log("datadata",data)
        // const addNewCategory = await prisma.category.createMany({
        //   data: (data as { title: string; description: string; parentCategory: string}[]),
        // });
        // console.log("======addNewCategory", addNewCategory);
      };

    } catch (error) {
      console.error(error);
    }
    return this.response;
  }

  async getAllCategory(query: ParsedQs) {
    try {
      const list =await prisma.category.findMany();
      if(list && list.length>0){
        this.response={
          success:true,
          message:"category list found",
          data:list
        }
      }else{
        this.response={ 
          success:false,
          message:"category list not found",
        }
      }
    } catch (error) {
      console.error();
    }
    return this.response;
  }

  async getAllProductByCategory(query: ParsedQs) {
    try {
      let list;
      if(query.categoryId&&+query.categoryId>0 ){
          console.log("iffffffffqueryqueryquery",query.categoryId)
          list=await prisma.product.findMany({
            where:{
              category_id:+query.categoryId
            },
            // take:5,
            // skip:1
          });
        }else{
          console.log("elseeeeeequeryqueryquery",query.categoryId)
          list=await prisma.product.findMany();
        }

        console.log("list================",list[0].id);

        if(list && list.length>0){
          this.response={
            success:true,
            message:"product list found",
            data:list
          }
        }else{
          this.response={ 
            success:false,
            message:"product list not found",
          }
        }
        
               
    } catch (error) {
      console.error(error);
    };
    return this.response;
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
