import { CartItem } from "@/types";
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
