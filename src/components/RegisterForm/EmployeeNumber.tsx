"use client";
import React, { useState } from "react";
import useFocus from "@/hooks/useFocus";
import * as API from "@/lib/api";
import GreenButton from "@/components/commons/buttons/GreenButton";
import Input from "@/components/commons/inputs/Input";
import { RegisterStepProps } from "./RegisterForm";

const EmployeeNumber = (props: RegisterStepProps) => {
  const { userInputs, nextStep } = props;
  const firstElement = useFocus<HTMLInputElement>();
  const [empNumberInput, setEmpNumberInput] = useState("");
  const onClickHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userInputs) userInputs["empNumber"] = empNumberInput;
    const registerResult = await API.methods.register(userInputs);
    if (registerResult) {
      nextStep();
    }
  };
  return (
    <form className='space-y-4'>
      <h1
        className='text-xl font-bold
	leading-tight tracking-tight
	text-gray-900 md:text-2xl dark:text-white'
      >
        임직원이신가요 ?<br />
        <p className='inline text-green-600'>사번</p>을 입력해주세요 (선택)
      </h1>
      <div className='relative'>
        <Input
          state={[empNumberInput, setEmpNumberInput]}
          ref={firstElement}
          placeholder='사번을 입력해주세요.'
          type='text'
        />
      </div>
      <GreenButton
        title='다음'
        type='submit'
        isActive={true}
        onClickHandler={onClickHandler}
      />
    </form>
  );
};

export default EmployeeNumber;
