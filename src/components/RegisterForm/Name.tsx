"use client";
import Input from "../commons/inputs/Input";
import React, { useEffect, useRef, useState } from "react";
import { RegisterStepProps } from "./RegisterForm";

const Name = (props: RegisterStepProps) => {
  const { userInputs, setIsActive } = props;
  const nameInputState = useState("");
  const firstElement = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (firstElement.current) firstElement.current.focus();
    setIsActive(false);
  }, []);
  useEffect(() => {
    setIsActive(!!nameInputState[0]);
    if (userInputs) userInputs["username"] = nameInputState[0];
  }, [nameInputState[0]]);

  return (
    <>
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
        state={nameInputState}
      />
      <p></p>
    </>
  );
};

export default Name;
