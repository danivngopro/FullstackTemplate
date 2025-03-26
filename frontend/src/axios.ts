import axios from "axios";
export const createAxiosInstance = (baseUrl: string) => {
  const axiosInstance = axios.create({
    withCredentials: true,
    timeout: 10000,
    baseURL: `/api${baseUrl}`,
  });
  axiosInstance.interceptors.response.use(
    (response: any) => response,
    (error: any) => Promise.reject(error)
  );
  return axiosInstance;
};
