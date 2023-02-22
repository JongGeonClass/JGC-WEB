import { axiosInstance } from "@/utils/axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const fetchPbv = () => {
  axiosInstance.get("/product/pbv").then((response) => response.data);
};

export const usePbv = () => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["pbv"],
    queryFn: () => fetchPbv(),
  });
};
