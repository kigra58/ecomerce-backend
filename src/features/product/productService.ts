import { ParamsDictionary } from "express-serve-static-core";
import { IAPIResponse, IProduct } from "../../interfaces";
import { PrismaClient } from "@prisma/client";
import {pipeline} from "stream"
import fs from "fs"
import path from "path"
const prisma = new PrismaClient();

class ProductService {
  private response: IAPIResponse | undefined;

  /**
   *  PRODUCT LIST
   */
  async productList({}) {
    try {
      const list = await prisma.product.findMany();

      console.log("====list", list[0]);

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
      const data = await prisma.product.
      findUnique({
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
  // async addProduct(data: IProduct) {
  async addProduct(file: Express.Multer.File | undefined) {
    try {
      // const newProduct = await prisma.product.createMany({ data });
      // if (newProduct) {
      //   this.response = {
      //     success: true,
      //     message: "Add New Product succesfully",
      //     data: [data],
      //   };
      // } else {
      //   this.response = {
      //     success: false,
      //     message: "Unable to add new Product",
      //   };
      // }
     if(file){
      //  console.log("FIleeeeeeeee",file)
      //  const filePath= path.join(__dirname,"5f4b6eaf897aa3b4b05d9b4016a3abe8")
      //  console.log("filePath",filePath)


       let readStream = fs.createReadStream("uploads");
       let writeStream = fs.createWriteStream("uploads");
       console.log("readStream",readStream)
       pipeline(readStream, writeStream, error => {
       if (error) {
             console.error(error);
         } else {
             console.info("Pipeline Successful")
         }
       });
      }
      

      // if(file )
 

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
      // const deleteData = await prisma.product.delete({
      //   where: { id: Number(params.id) },
      // });
      // if (deleteData) {
      //   this.response = {
      //     success: true,
      //     message: "data deleted successfully",
      //   };
      // } else {
      //   this.response = {
      //     success: false,
      //     message: "unable to delete",
      //   };
      // }
     const filePath=path.join(__filename,"myfile.txt");
     console.log("file path",filePath);

     const readStream = fs.createReadStream(filePath);
     console.log("read stream",readStream);

     readStream.on('error', function (error) {
      console.log(`error: ${error.message}`);
     })

     readStream.on('data', (chunk) => {
      console.log(chunk);
     })


      // let writeStream = fs.createWriteStream("uploads");
      // console.log("readStream",readStream)
      // pipeline(readStream, writeStream, error => {
      // if (error) {
      //       console.error(error);
      //   } else {
      //       console.info("Pipeline Successful")
      //   }
      // });
  
 

    } catch (error) {
      console.error(error);
    }
    return this.response;
  }
}

export default new ProductService();
