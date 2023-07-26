import Done from "./7_Done";
import Email from "./3_Email";
import EmployeeNumber from "./6_EmployeeNumber";
import Name from "./2_Name";
import Password from "./5_Password";
import TermAndConditions from "./1_TermAndConditions";
import VerifyCode from "./4_VerifyCode";

export const RegisterSteps = [
  <TermAndConditions key='약관동의' />,
  <Name key='이름 입력' />,
  <Email key='이메일 입력' />,
  <VerifyCode key='인증번호 입력' />,
  <Password key='비밀번호 입력' />,
  <EmployeeNumber key='사원번호 입력' />,
  <Done key='완료' />,
];

export const widthArray = [
  "w-1/6",
  "w-1/3",
  "w-1/2",
  "w-2/3",
  "w-5/6",
  "w-full",
];
