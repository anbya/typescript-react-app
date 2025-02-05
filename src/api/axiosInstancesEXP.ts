import axios, {
    AxiosResponse,
    AxiosError,
    InternalAxiosRequestConfig,
  } from "axios";
import { proceedRefreshToken } from "../services/auth.service";
import { useAuth } from "../context/AuthContext";


const { logout } = useAuth();

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
  });

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    if (config.headers) {
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
    
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      
      const response = await refreshAccessToken();

      if (response && !response.success) {
        alert("Token is expired, please try login again")
        logout()
        setTimeout(() => {
          window.location.reload();
        }, 7000);
      } else {
        return axiosInstance(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);

const refreshAccessToken = async (): Promise<{ success: boolean } | null> => {
  try {
    const response = await proceedRefreshToken();
    return response;
  } catch (error) {
    console.error("Error refreshing token:", error);
    return null;
  }
};

export default axiosInstance;