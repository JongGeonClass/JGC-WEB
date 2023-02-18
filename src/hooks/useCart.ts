import { CartItem } from "@/types";
import { addCartDto } from "@/types/product.dto";
import { axiosInstance } from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";

const fetchCart = (): Promise<CartItem[]> => {
  return axiosInstance.get(`/cart`).then((response) => response.data.carts);
};

export const useCart = () => {
  return useQuery<CartItem[]>({
    queryKey: ["cart"],
    queryFn: () => fetchCart(),
  });
};

export const addCart = ({ productId: product_id, amount }: addCartDto) => {
  return axiosInstance
    .post(`/cart`, { product_id, amount })
    .then((response) => {
      response.data;
    });
};
