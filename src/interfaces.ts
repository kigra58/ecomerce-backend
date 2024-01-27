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

// export interface IRating {
//   rate: number;
//   count: number;
// }
