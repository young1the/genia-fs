import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const http = {
  get: <Response = any>(url: string) => {
    return axios.get<Response>(url).then((res) => res.data);
  },
  post: <Request = any, Response = any>(url: string, body?: Request) => {
    return axios.post<Response>(url, body).then((res) => res.data);
  },
  put: <Request = any, Response = any>(url: string, body?: Request) => {
    return axios.put<Response>(url, body).then((res) => res.data);
  },
  delete: <Response = any>(url: string) => {
    return axios.delete<Response>(url).then((res) => res);
  },
};
