import { Category, Product } from "@/types";
import { useProductsDto } from "@/types/product.dto";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProduct = (id: string): Promise<Product> => {
  return axios.get(`/products/${id}`).then((response) => response.data);
};

const fetchProducts = ({
  categoryId,
  pagination,
}: useProductsDto): Promise<Product[]> => {
  return axios
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
