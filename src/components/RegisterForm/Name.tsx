"use client";
import Input from "../commons/inputs/Input";
import React, { useState } from "react";
import { RegisterStepProps } from "./RegisterForm";
import GreenButton from "../commons/buttons/GreenButton";
import useFocus from "@/hooks/useFocus";

const Name = (props: RegisterStepProps) => {
  const { userInputs, nextStep } = props;
  const [nameInput, setNameInput] = useState("");
  const firstElement = useFocus<HTMLInputElement>();
  const onClickHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInputs) userInputs["username"] = nameInput;
    nextStep();
  };

  return (
    <form className='flex flex-col space-y-4'>
      <h1
        className='text-xl font-bold
		leading-tight tracking-tight
		text-gray-900 md:text-2xl dark:text-white'
      >
        사용하실
        <br />
        <p className='inline text-green-600'>이름</p>을 입력해주세요.
      </h1>
      <Input
        placeholder='이름을 입력하세요.'
        type='text'
        ref={firstElement}
        state={[nameInput, setNameInput]}
      />
      <GreenButton
        title='다음'
        type='submit'
        isActive={!!nameInput}
        onClickHandler={onClickHandler}
      />
    </form>
  );
};

export default Name;
