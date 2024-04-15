import { ParamsDictionary } from "express-serve-static-core";
import { IAPIResponse, IAddNewProduct, ICSVROW, ICat, IProduct} from "../../interfaces";
import { PrismaClient } from "@prisma/client";
import { getUniqueTitles, readCSVFile } from "../../utils/helper";
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
      if(file){
        const data: ICSVROW[]=await readCSVFile(file.filename);
        if (data && data.length>0) {
          // console.log("dat==========>",data);
          // const insertData= await Promise.all(data.map(async (item) => {
          //   try {
          //     console.log("item==========>",item)
          //       const catId = await prisma.category.create({
          //           data: {
          //               title: item.title,
          //               description: null,
          //               parent_category: null
          //           }
          //       });

          //       console.log("catId=========>",catId)
        
          //       if (catId) {
          //          const newProduct= await prisma.product.create({
          //               data: {
          //                   title: item.title,
          //                   description: item.description,
          //                   price: +item.price,
          //                   category_id: catId.id,
          //                   image: item.image,
          //                   rating: JSON.stringify({
          //                       rate: item.rating__rate,
          //                       count: item.rating__count
          //                   })
          //               }
          //           });
          //         console.log("newProduct========>",newProduct);  
          //       }
          //   } catch (error) {
          //       console.error("Error processing item:", item, error);
          //   }
          // }));
          
          const tempCategory:any[]=[];
          // const tempProduct:any[]=[]

          getUniqueTitles(data).forEach(async (item)=>{
            // tempCategory.push({
            //   title: item.category,
            //   description: "",
            //   parent_category: ""
            // })
             const insert= await prisma.category.create({
              data:{
                title: item.category,
                description: null,
                parent_category: null
              }
             });
          });

          // console.log("tempCategory",tempCategory);
          
          // const createNewCategory=
          
          // const res= await prisma.category.createMany({
          //   data:tempCategory
          // });
          
          data.forEach(async(item)=>{
           const cartId=await prisma.category.findFirst({where:{
            title:item.category
           }});
           console.log("cartId",cartId)
           if(cartId){
            //  tempProduct.push({
            //    title: item.title,
            //    description: item.description,
            //    price: +item.price,
            //    category_id: cartId.id,
            //    image: item.image,
            //    rating: JSON.stringify({
            //      rate: item.rating__rate,
            //      count: item.rating__count
            //    })
            //  });
             
            const newP=await prisma.product.create({
              data:{
                title: item.title,
                description: item.description,
                price: +item.price,
                category_id: cartId.id,
                image: item.image,
                rating: JSON.stringify({
                  rate: item.rating__rate,
                  count: item.rating__count
                })
              }
            });
            console.log("newPnewP",newP);
           }
         });
         
        // const createNewProduct=await prisma.product.createMany({
        //      data:tempProduct
        // });
        // console.log("createNewProduct",createNewProduct);
       
        //  if(tempProduct && tempProduct.length>0){
        //    const createNewProduct=await prisma.product.createMany({
        //      data:tempProduct
        //    });
        //  }



          if(data){
            this.response = {
              success: true,
              message: "Add New Product succesfully",
            };
          }else{
            this.response = {
              success: false,
              message: "Unable to add new product",
            };
          }
        } else {
          this.response = {
            success: false,
            message: "Unable fetch data csv file",
          };
        }
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
