import Axios, { AxiosRequestConfig } from "axios";
import { getSession } from "next-auth/react";

export const axiosInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SERVER,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    // Authorization: "Bearer fake_token",
  },
  withCredentials: false,
});

const setAccessTokenOnRequestAndAsAxiosDefaults = async (
  request: AxiosRequestConfig
) => {
  const session = await getSession();
  if (session) {
    const AuthHeaderValue = session.user.accessToken;
    if (!request.headers) request.headers = {};
    request.headers.Authorization = AuthHeaderValue;

    axiosInstance.defaults.headers.common["Authorization"] = AuthHeaderValue;
    /* NOTE - This is to prevent calling getSession() again and again for each request.
      Because getSession() internally calls api/auth/session, which would be very expensive to do
      for each request to our backend [Call to this API was consuming around 10% of our bandwidth provided to us by vercel].
      It will not only lead to increase in costs but also increase time to perform each request as
      we have to every-time make a remote call to /api/auth/session. */
  }
};

const isAccessTokenAttachedToAxiosDefaults = () => {
  const authHeader = axiosInstance.defaults.headers.common["Authorization"];
  if (authHeader === null || authHeader === undefined || authHeader === "")
    return false;
  else return true;
};

axiosInstance.interceptors.request.use(async (request) => {
  if (!isAccessTokenAttachedToAxiosDefaults())
    await setAccessTokenOnRequestAndAsAxiosDefaults(request);
  return request;
});

export const unsetAccessTokenAttachedToAxiosDefaults = () => {
  delete axiosInstance.defaults.headers.common["Authorization"];
};

export const http = {
  get: <Response = any>(url: string) => {
    return axiosInstance.get<Response>(url).then((res) => res.data);
  },
  post: <Request = any, Response = any>(url: string, body?: Request) => {
    return axiosInstance.post<Response>(url, body).then((res) => res.data);
  },
  put: <Request = any, Response = any>(url: string, body?: Request) => {
    return axiosInstance.put<Response>(url, body).then((res) => res.data);
  },
  delete: (url: string, body?: any) => {
    return axiosInstance.delete(url, body).then((res) => res);
  },
};
