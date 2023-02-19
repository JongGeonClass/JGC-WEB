import { Category, Product } from ".";

export interface PaginationDto {
  page: number;
  pageSize: number;
}

export interface useProductsDto {
  categoryId?: number;
  pagination: PaginationDto;
}

export interface ProductsListDto {
  products: Product[];
  max_pagesize: number;
}

export interface addCartDto {
  productId: number;
  amount: number;
}
