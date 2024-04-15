import { Omit } from "@prisma/client/runtime/library";

export interface IAPIResponse {
  success: boolean;
  message: string;
  data?: unknown[];
  error?: null;
  statusCode?: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category_id: number;
  image: string;
  rating: string;
}


export type IAddNewProduct = Omit<IProduct, "id">;



// export interface IRating {
//   rate: number;
//   count: number;
// }

export interface ICat{
  title:string;
  description:string;
  parent_category:string;
}

export interface ICSVROW {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating__rate:number;
  rating__count:number;
}
