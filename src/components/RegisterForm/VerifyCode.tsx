"use client";
import { useEffect, useRef, useState } from "react";
import Input from "../commons/inputs/Input";
import { RegisterStepProps } from "./RegisterForm";

const VerifyCode = (props: RegisterStepProps) => {
  const { userInputs, setIsActive } = props;
  const codeInputState = useState("");
  const firstElement = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (firstElement.current) firstElement.current.focus();
    setIsActive(false);
  }, []);
  useEffect(() => {
    setIsActive(!!codeInputState[0]);
    if (userInputs) userInputs["username"] = codeInputState[0];
  }, [codeInputState[0]]);

  return (
    <>
      <h1
        className='text-xl font-bold
	leading-tight tracking-tight
	text-gray-900 md:text-2xl dark:text-white'
      >
        메일로 전송된
        <br />
        <p className='inline text-green-600'>인증번호</p>를 확인해주세요.
      </h1>
      <div className='relative'>
        <Input
          state={codeInputState}
          ref={firstElement}
          placeholder='인증번호를 입력해주세요.'
          type='text'
        />
      </div>
    </>
  );
};

export default VerifyCode;
