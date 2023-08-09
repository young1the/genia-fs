import { http } from "./axios";
import { URL } from "./constants";
import { ConfirmCode, SendEmail, SignUpBody } from "./user/type";

export const sendCodeToEmail = async (body: SendEmail) => {
  return http.post(`${URL["EMAIL_SEND"]}/${body.email}`);
};

export const verifyCode = async (body: ConfirmCode) => {
  return http.post<ConfirmCode>(URL["EMAIL_CONFIRM"], body);
};

export const register = async (body: SignUpBody) => {
  return http.post<SignUpBody>(URL["SIGNUP"], body);
};
