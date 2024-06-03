/* eslint-disable no-param-reassign */
import axios from "axios";

let authToken = "";

function setTokenInHeader(token) {
  authToken = token;
}

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("Please check internet connection..!!");
  }
  return Promise.reject(error);
});

axios.interceptors.request.use((config) => {
  if (!config.headers.Authorization) {
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
      return config;
    }
    return config;
  }
  return config;
});

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setTokenInHeader,
};

export default http;
