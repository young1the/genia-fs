"use client";
import React, { useState } from "react";
import useFocus from "@/hooks/useFocus";
import * as API from "@/lib/api";
import GreenButton from "@/components/commons/buttons/GreenButton";
import Input from "@/components/commons/inputs/Input";
import { RegisterStepProps } from "./RegisterForm";
import KeywordHighlight from "@/components/commons/texts/KeywordHighlight";

const EmployeeNumber = (props: RegisterStepProps) => {
  const { userInputs, nextStep } = props;
  const { focusElement } = useFocus<HTMLInputElement>();
  const [empNumberInput, setEmpNumberInput] = useState("");
  const onClickHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userInputs) userInputs["empNumber"] = empNumberInput;
    try {
      await API.methods.register(userInputs);
      nextStep();
    } catch (e) {
      alert("회원가입 실패");
    }
  };
  return (
    <form className='space-y-4'>
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
