"use client";
import { useEffect, useRef, useState } from "react";
import Input from "../commons/inputs/Input";
import { RegisterStepProps } from "./RegisterForm";

const Email = (props: RegisterStepProps) => {
  const { userInputs, setIsActive } = props;
  const emailInputState = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const firstElement = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (firstElement.current) firstElement.current.focus();
    setIsActive(false);
  }, []);
  useEffect(() => {
    const email = emailInputState[0];
    setIsValidEmail(true);
    if (email === "") return;
    const emailRegex = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)) {
      setIsActive(true);
      if (userInputs) userInputs["email"] = email;
    } else {
      setIsValidEmail(false);
      setIsActive(false);
    }
  }, [emailInputState[0]]);

  return (
    <>
      <h1
        className='text-xl font-bold
	leading-tight tracking-tight
	text-gray-900 md:text-2xl dark:text-white'
      >
        사용하실
        <br />
        <p className='inline text-green-600'>이메일</p>을 입력해주세요.
      </h1>
      <div className='relative'>
        <Input
          state={emailInputState}
          placeholder='이메일을 입력하세요.'
          ref={firstElement}
          type='email'
        />
        {!isValidEmail ? (
          <p className='text-red-600 absolute'>이메일 형식이 다릅니다.</p>
        ) : null}
      </div>
    </>
  );
};

export default Email;
