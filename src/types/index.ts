export interface Product {
  id: number;
  brand_id: number;
  brand_name: string;
  categories: Category[];
  name: string;
  price: number;
  count: number;
  title_image_s3: string;
  description_s3: string;
  created_time: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
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

export interface Review {
  id: number;
  product_id: number;
  user_id: number;
  nickname: string;
  score: number;
  content: string;
  is_parent: boolean;
  created_time: string;
}

export interface PBVData {
  type?: "personal" | "enterprise";
  purpose?: string;
}

export interface HttpError extends Record<string, any> {
  message: string;
  statusCode: number;
}

export * from "./user.dto";
export * from "./product.dto";
