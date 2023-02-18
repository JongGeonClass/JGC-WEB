import { Category } from ".";

export interface PaginationDto {
  currentPage: number;
  pageSize: number;
}

export interface useProductsDto {
  categoryId: number;
  pagination: PaginationDto;
}

export interface addCartDto {
  productId: number;
  amount: number;
}
