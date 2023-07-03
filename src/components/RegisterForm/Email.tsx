"use client";
import { useState } from "react";
import Input from "../commons/inputs/Input";
import { RegisterStepProps } from "./RegisterForm";
import GreenButton from "../commons/buttons/GreenButton";
import { sendCodeToEmail } from "@/lib/api";
import useFocus from "@/hooks/useFocus";

const Email = (props: RegisterStepProps) => {
  const { userInputs, nextStep } = props;
  const [emailInput, setEmailInput] = useState("");
  const [isError, setIsError] = useState(false);
  const firstElement = useFocus<HTMLInputElement>();
  const onClickHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userInputs) userInputs["email"] = emailInput;
    const isOkay = await sendCodeToEmail(userInputs);
    if (!isOkay) {
      setIsError(true);
      setEmailInput("");
      if (firstElement.current) firstElement.current.focus();
      return;
    }
    nextStep();
  };
  const emailRegex = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    <form className='space-y-4'>
      <h1
        className='text-xl font-bold
	leading-tight tracking-tight
	text-gray-900 md:text-2xl dark:text-white'
      >
        사용하실
        <br />
        <p className='inline text-green-600'>이메일</p>을 입력해주세요.
      </h1>
      <div className='flex flex-col space-y-8'>
        <div className='relative'>
          <Input
            state={[emailInput, setEmailInput]}
            placeholder='이메일을 입력하세요.'
            ref={firstElement}
            type='email'
          />
          {emailInput !== "" && !emailRegex.test(emailInput) ? (
            <p className='text-red-600 absolute'>이메일 형식이 다릅니다.</p>
          ) : null}
          {isError && emailInput === "" ? (
            <p className='text-red-600 absolute'>이메일이 중복입니다.</p>
          ) : null}
        </div>
        <GreenButton
          title='다음'
          type='submit'
          isActive={emailRegex.test(emailInput)}
          onClickHandler={onClickHandler}
        />
      </div>
    </form>
  );
};

export default Email;
