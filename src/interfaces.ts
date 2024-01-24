export interface IAPIResponse {
  success: boolean;
  message: string;
  data: unknown[];
  error: null | undefined;
  statusCode?: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
}

export interface IRating {
  rate: number;
  count: number;
}
