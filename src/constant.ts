import { IAPIResponse } from "./interfaces";

export const apiResponse:IAPIResponse={
  success:false,
  message:"",
  data:[],
  error:null
};

export enum userListFilterENUM {
    All = "All",
    Active = "active",
    Inactive = "inactive",
}
