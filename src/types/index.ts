export interface Product {
  id: string;
  name: string;
  price: number;
  count: number;
  description: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface HttpError extends Record<string, any> {
  message: string;
  statusCode: number;
}

export * from "./user.dto";
