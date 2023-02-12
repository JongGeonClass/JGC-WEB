export interface Product {
  id: number;
  name: string;
  price: number;
  count: number;
  description: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface HttpError extends Record<string, any> {
  message: string;
  statusCode: number;
}

export * from "./user.dto";
