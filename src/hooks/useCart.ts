import { CartItem } from "@/types";
import { addCartDto } from "@/types/product.dto";
import { axiosInstance } from "@/utils/axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const fetchCart = (): Promise<CartItem[]> => {
  return axiosInstance
    .get(`/product/carts`)
    .then((response) => response.data.carts);
};

export const useCart = () => {
  const queryClient = useQueryClient();
  return useQuery<CartItem[]>({
    queryKey: ["cart"],
    queryFn: () => fetchCart(),
  });
};

export const addCart = ({ productId: product_id, amount }: addCartDto) => {
  return axiosInstance
    .post(`/product/add-to-cart`, { product_id, amount })
    .then((response) => {
      response.data;
    });
};

export const updateCart = ({ productId: product_id, amount }: addCartDto) => {
  return axiosInstance
    .put(`/product/update-cart-amount`, { product_id, amount })
    .then((response) => {
      response.data;
    });
};

export const deleteCartItem = (productId: number) => {
  return axiosInstance
    .delete(`/product/delete-cart-product`, { data: { productId: productId } })
    .then((response) => {
      response.data;
    });
};
