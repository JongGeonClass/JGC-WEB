import { Category } from "@/types";
import { axiosInstance } from "@/utils/axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const fetchCategories = (): Promise<Category[]> => {
  return axiosInstance
    .get(`/product/categories`)
    .then((response) => response.data.categories);
};

export const useCategories = () => {
  const queryClient = useQueryClient();
  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(),
  });
};
