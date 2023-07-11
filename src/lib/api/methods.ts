import { http } from "./axios";
import { URL } from "./constants";
import { User } from "@/types/common";

export const sendCodeToEmail = async (body: Pick<User, "email">) => {
  return http.post<void>(URL["CODE_SEND"], body);
};

export const verifyCode = async (body: Pick<User, "email" | "code">) => {
  return http.post<void>(URL["CODE_VERIFY"], body);
};

export const register = async (body: User) => {
  return http.post<void>(URL["REGISTER"], body);
};
