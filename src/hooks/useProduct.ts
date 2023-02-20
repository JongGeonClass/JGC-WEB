import { Category, HttpError, Product } from "@/types";
import { ProductsListDto, useProductsDto } from "@/types/product.dto";
import { axiosInstance } from "@/utils/axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const fetchProduct = (id: string): Promise<Product> => {
  return axiosInstance
    .get(`/product/product`, { params: { product_id: id } })
    .then((response) => response.data.product);
};

const fetchProducts = ({
  categoryId,
  pagination,
}: useProductsDto): Promise<ProductsListDto> => {
  return axiosInstance
    .get(`/product/products`, {
      params: {
        category_id: categoryId,
        page: pagination.page,
        pagesize: pagination.pageSize,
      },
    })
    .then((response) => response.data);
};

export const useProduct = (id: string) => {
  const queryClient = useQueryClient();
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });
};

export const useProducts = (dto: useProductsDto) => {
  const queryClient = useQueryClient();
  return useQuery<ProductsListDto>({
    queryKey: ["products", dto],
    queryFn: () => fetchProducts(dto),
  });
};
