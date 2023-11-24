"use client";
import React, { useState } from "react";
import useFocus from "@/hooks/useFocus";
import GreenButton from "@/components/common/button/GreenButton";
import Input from "@/components/common/input/Input";
import KeywordHighlight from "@/components/common/text/KeywordHighlight";
import { useRegisterStep } from "@/store/Register/hooks";
import { register } from "@/lib/api/user/method";

const EmployeeNumber = () => {
  const [empNumberInput, setEmpNumberInput] = useState("");
  const { focusElement } = useFocus<HTMLInputElement>();
  const { nextStep, userInput, setUserInput } = useRegisterStep({
    api: async () => {
      const { nickName, password, email, notificationAgreement, empNumber } =
        userInput;
      return register({
        nickName,
        password,
        email,
        notificationAgreement,
        empNumber,
        profileImage: "temp",
      });
    },
    errorCallback: () => {
      focus();
      setEmpNumberInput("");
    },
  });

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setUserInput("empNumber", empNumberInput);
    nextStep();
  };

  return (
    <form className='space-y-4' onSubmit={onSubmitHandler}>
      <KeywordHighlight
        before='임직원이신가요 ?'
        keyword='사번'
        after='을 입력해주세요 (선택)'
      />
      <div className='relative'>
        <Input
          state={[empNumberInput, setEmpNumberInput]}
          ref={focusElement}
          placeholder='사번을 입력해주세요.'
          type='text'
        />
      </div>
      <GreenButton title='다음' type='submit' isActive={true} />
    </form>
  );
};

export default EmployeeNumber;
