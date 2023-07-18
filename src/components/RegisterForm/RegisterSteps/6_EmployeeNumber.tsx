"use client";
import React, { useState } from "react";
import useFocus from "@/hooks/useFocus";
import * as API from "@/lib/api";
import GreenButton from "@/components/commons/buttons/GreenButton";
import Input from "@/components/commons/inputs/Input";
import KeywordHighlight from "@/components/commons/texts/KeywordHighlight";
import { useRegisterStep } from "@/store/Register/hooks";

const EmployeeNumber = () => {
  const [empNumberInput, setEmpNumberInput] = useState("");
  const { focusElement } = useFocus<HTMLInputElement>();
  const { nextStep, userInput, setUserInput } = useRegisterStep({
    api: async () => {
      return API.methods.register(userInput);
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
