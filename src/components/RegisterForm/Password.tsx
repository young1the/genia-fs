"use client";
import { useState } from "react";
import { RegisterStepProps } from "./RegisterForm";
import NewPasswordInput from "../commons/inputs/NewPasswordInput";
import RepeatPassword from "../commons/inputs/RepeatPassword";
import GreenButton from "../commons/buttons/GreenButton";
import useFocus from "@/hooks/useFocus";

const Password = (props: RegisterStepProps) => {
  const { userInputs, nextStep } = props;
  const passwordInputState = useState("");
  const repeatInputState = useState("");
  const firstElement = useFocus<HTMLInputElement>();
  const onClickHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userInputs) userInputs["password"] = passwordInputState[0];
    nextStep();
  };

  return (
    <form className='space-y-4'>
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
      <GreenButton
        title='다음'
        type='submit'
        isActive={passwordInputState[0] === repeatInputState[0]}
        onClickHandler={onClickHandler}
      />
    </form>
  );
};

export default Password;
