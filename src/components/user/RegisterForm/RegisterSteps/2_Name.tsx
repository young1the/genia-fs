"use client";
import React, { useState } from "react";
import useFocus from "@/hooks/useFocus";
import Input from "@/components/common/input/Input";
import GreenButton from "@/components/common/button/GreenButton";
import KeywordHighlight from "@/components/common/text/KeywordHighlight";
import { useRegisterStep } from "@/store/Register/hooks";

const Name = () => {
  const [nameInput, setNameInput] = useState("");
  const { focusElement } = useFocus<HTMLInputElement>();
  const { nextStep, setUserInput } = useRegisterStep();
  const isActive = !!nameInput;
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isActive) return;
    setUserInput("nickName", nameInput);
    nextStep();
  };

  return (
    <form className='flex flex-col space-y-4' onSubmit={onSubmitHandler}>
      <KeywordHighlight
        before='사용하실'
        keyword='이름'
        after='을 입력해주세요.'
      />
      <Input
        placeholder='이름을 입력하세요.'
        type='text'
        ref={focusElement}
        state={[nameInput, setNameInput]}
      />
      <GreenButton title='다음' type='submit' isActive={isActive} />
    </form>
  );
};

export default Name;
