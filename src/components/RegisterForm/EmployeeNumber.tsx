"use client";
import React, { useEffect, useState } from "react";
import Input from "../commons/inputs/Input";
import { RegisterStepProps } from "./RegisterForm";

const EmployeeNumber = (props: RegisterStepProps) => {
  const { userInputs, setIsActive } = props;
  const empNumState = useState("");
  useEffect(() => {
    setIsActive(true);
  }, []);
  useEffect(() => {
    if (userInputs) userInputs["empNumber"] = empNumState[0];
  }, [empNumState[0]]);

  return (
    <>
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
          state={empNumState}
          placeholder='사번을 입력해주세요.'
          type='text'
        />
      </div>
    </>
  );
};

export default EmployeeNumber;
