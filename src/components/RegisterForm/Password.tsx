"use client";
import { useEffect, useRef, useState } from "react";
import { RegisterStepProps } from "./RegisterForm";
import NewPasswordInput from "../commons/inputs/NewPasswordInput";
import RepeatPassword from "../commons/inputs/RepeatPassword";

const Password = (props: RegisterStepProps) => {
  const { userInputs, setIsActive } = props;
  const passwordInputState = useState("");
  const repeatInputState = useState("");
  const firstElement = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (firstElement.current) firstElement.current.focus();
    setIsActive(false);
  }, [setIsActive]);
  useEffect(() => {
    const password = passwordInputState[0];
    const repeat = repeatInputState[0];
    const passwordRegex =
      /(?=.*\d)(?=.*[!@#$%^&*()\-=_+[\]{};':"\\|,.<>/?]).{10,}/;
    const validPassword = passwordRegex.test(password);
    const validRepeat = password === repeat;
    setIsActive(!!(validPassword && validRepeat));
    if (userInputs) userInputs.password = password;
  }, [userInputs, setIsActive, passwordInputState, repeatInputState]);

  return (
    <>
      <h1
        className='text-xl font-bold
	leading-tight tracking-tight
	text-gray-900 md:text-2xl dark:text-white'
      >
        로그인에 사용하실
        <br />
        <p className='inline text-green-600'>비밀번호</p>를 입력해주세요.
      </h1>
      <NewPasswordInput ref={firstElement} state={passwordInputState} />
      <RepeatPassword
        newPassword={passwordInputState[0]}
        state={repeatInputState}
      />
    </>
  );
};

export default Password;
