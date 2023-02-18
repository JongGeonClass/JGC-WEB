import { Category, HttpError, Product } from "@/types";
import { useProductsDto } from "@/types/product.dto";
import { axiosInstance } from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";

const fetchProduct = (id: string): Promise<Product> => {
  return axiosInstance.get(`/products/${id}`).then((response) => response.data);
};

const fetchProducts = ({
  categoryId,
  pagination,
}: useProductsDto): Promise<Product[]> => {
  return axiosInstance
    .get(
      `/products?category=${categoryId}&current=${pagination.currentPage}&size=${pagination.pageSize}`
    )
    .then((response) => response.data);
};

export const useProduct = (id: string) => {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });
};

export const useProducts = (dto: useProductsDto) => {
  return useQuery<Product[]>({
    queryKey: ["products", dto],
    queryFn: () => fetchProducts(dto),
  });
};
