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

export interface CartItem {
  id: number;
  brand_id: number;
  brand_name: string;
  categories: Category[];
  product_name: string;
  product_price: number;
  amount: number;
  title_image_s3: string;
  created_time: string;
}

export interface HttpError extends Record<string, any> {
  message: string;
  statusCode: number;
}

export * from "./user.dto";
