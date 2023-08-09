import { http } from "../axios";
import { URL, checkNickNameURL, findUserPasswordURL } from "./url";
import { CheckNickName, ConfirmCode, SendEmail, SignUpBody } from "./type";

export const sendCodeToEmail = async (body: SendEmail) => {
  return http.post(`${URL["EMAIL_SEND"]}/${body.email}`);
};

export const verifyCode = async (body: ConfirmCode) => {
  return http.post<ConfirmCode>(URL["EMAIL_CONFIRM"], body);
};

export const register = async (body: SignUpBody) => {
  return http.post<SignUpBody>(URL["SIGNUP"], body);
};

export const findUserpassword = async (body: SendEmail) => {
  return http.post(`${findUserPasswordURL}/${body.email}`);
};

export const checkNickName = async (body: CheckNickName) => {
  return http.post(`${checkNickNameURL}/${body.nickName}`);
};
