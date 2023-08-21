import { OmitId } from "../../../types/utils";

export type UserRole = "MANAGER" | "EMPLOYEE" | "USER" | "ADMIN";
export interface User {
  email: string;
  password: string;
  nickName: string;
  empNumber: string;
  role: UserRole;
  notificationAgreement: string;
}

export interface SignUp extends Omit<User, "role"> {
  confirmCode: string;
}
export interface SignUpBody extends Omit<User, "confirmCode" | "role"> {
  profileImage: string;
}

export interface CheckNickName extends Pick<User, "nickName"> {}

export interface SendEmail extends Pick<User, "email"> {}
export interface SendEmailBody extends OmitId<SendEmail> {}
export interface ConfirmCode extends SendEmail, Pick<SignUp, "confirmCode"> {}

export interface Login extends Pick<User, "email" | "password"> {}
export interface LoginResponse extends Pick<User, "nickName"> {}

export interface UserPut
  extends Pick<User, "nickName" | "notificationAgreement" | "empNumber"> {}
export interface ChangePassword extends Pick<User, "password"> {
  newPassword: string;
}

export interface ResetPassword extends Pick<User, "email"> {}
export interface ResetPasswordBody extends OmitId<ResetPassword> {}
