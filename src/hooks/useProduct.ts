import { Category, Product } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProduct = (id: string): Promise<Product> => {
  return axios.get(`/products/${id}`).then((response) => response.data);
};

const fetchProducts = (
  category: Category,
  start: number,
  end: number
): Promise<Product[]> => {
  return axios
    .get(`/products?category=${category.id}&start=${start}&end=${end}`)
    .then((response) => response.data);
};

export const useProduct = (id: string) => {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });
};

export const useProducts = (category: Category, start: number, end: number) => {
  return useQuery<Product[]>({
    queryKey: ["products", category, start, end],
    queryFn: () => fetchProducts(category, start, end),
  });
};
