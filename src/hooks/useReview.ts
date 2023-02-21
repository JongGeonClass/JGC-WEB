import { Review } from "@/types";
import { axiosInstance } from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";

const fetchReviews = (product_id: string): Promise<Review[]> => {
  return axiosInstance
    .get(`/product/reviews`, { params: { product_id } })
    .then((response) => response.data.reviews);
};

export const useReviews = (product_id: string) => {
  return useQuery<Review[]>({
    queryKey: ["reviews", product_id],
    queryFn: () => fetchReviews(product_id),
  });
};
