// library
import axios from "axios";
import queryString from "query-string";

import apiConfig from "./apiConfig";

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  header: {
    "content-type": "application/json",
  },
  // paramsSerializer : quy định các params (tham số) nối sau URL
  // paramsSerializer: (params) =>
  //   queryString.stringify({ ...params, api_key: apiConfig.apiKey }),
});

// interceptor (đánh chặn) : xử lý trước khi nhận dữ liệu từ api, hay gửi dữ liệu đi :
// Xử lý trước khi gửi dữ liệu đi
axiosClient.interceptors.request.use(async (config) => {
  // hanlde token here

  return config;
});

// Xử lý trước khi nhận dữ liệu vào từ api :
axiosClient.interceptors.response.use(
  (response) => {
    // Nếu có response (dữ liệu) thì trả về response.data(data của tk axios chữa dữ liệu)
    // Khi dùng đỡ phải .data nữa
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
