import { ParamsDictionary } from "express-serve-static-core";
import { IAPIResponse } from "../../interfaces";
import { PrismaClient } from "@prisma/client";
import { ParsedQs } from "qs";

const prisma = new PrismaClient();

class UserService {
  private response: IAPIResponse | undefined;

  async userDetails(params: ParamsDictionary) {
    try {
      // const data = await prisma.user.findUnique({
      //   where: { id: Number(params.userId) },
      // });
      // if (data) {
      //   this.response = {
      //     success: true,
      //     message: "user details found",
      //     data: [data],
      //   };
      // } else {
      //   this.response = {
      //     success: false,
      //     message: "user details not found",
      //     data: [],
      //   };
      // }
    } catch (error) {
      console.error(error);
    }
    return this.response;
  };

  async updateUserDetails({userId,firstName,lastName,email}:{userId:number,firstName:string;lastName:string,email:string})  {
    try {
        const updateUser = await prisma.user.update({
            where: {
              id: Number(userId),
            },
            data: {
              first_name:firstName, 
              last_name:lastName ,
              email
            },
          });
          if(updateUser){
            this.response={
                success:true,
                message:"user details updated successfully",
                data:[updateUser]
            }
          }else{
            this.response={
                success:false,
                message:"unable to update user details"
            }
          };
    } catch (error) {
        console.error(error);
    }
    return this.response;
  };

  async userList(query: ParsedQs){
    console.log("Hello", query);
    try {
        const list =await prisma.user.findMany();
        console.log("list",list);
        if(list && list.length>0){
          this.response={
            success:true,
            message:"user list found",
            data:list
          }
        }else{
            this.response={
                success:false,
                message:"user list not found",
                data:[]
            }       
        }
    } catch (error) {
        console.error(error)
    };
    return this.response;
  }
};

export default new UserService();
