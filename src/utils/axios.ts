import { HttpError } from "@/types";

import axios, { AxiosError, isAxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error): Promise<HttpError> => {
    if (isAxiosError(error)) {
      return Promise.reject({
        ...error,
        message: error.message,
        statusCode: error.code,
      });
    }
    const customError: HttpError = {
      ...error,
      message: error.response?.data?.message,
      statusCode: error.response?.status,
    };

    return Promise.reject(customError);
  }
);

export { axiosInstance };
