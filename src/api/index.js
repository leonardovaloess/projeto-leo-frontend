import axios from "axios";

import AuthService from "./services/auth";
import TaskService from "./services/tasks";

const baseURL = import.meta.env.VITE_URL_API;

const httpClient = axios.create({ baseURL });

let isRefreshing = false;

httpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token-auth");

  if (token) {
    config.headers["token-auth"] = token;
  }
  return config;
});

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      if (!isRefreshing) {
        isRefreshing = true;

        try {
          localStorage.setItem("token-auth", response.data.user_token, {
            expires: 7,
            secure: true,
            sameSite: "lax",
          });

          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${response.data.user_token}`;

          return axios(originalRequest);
        } catch (error) {
          localStorage.removeItem("token-auth");

          window.location.href = "/login";

          return Promise.reject(error);
        } finally {
          isRefreshing = false;
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return axios(originalRequest);
      }
    } else {
      return Promise.reject(error);
    }
  }
);

export default {
  auth: AuthService(httpClient),
  task: TaskService(httpClient),
};
