"use client";
import React, { useState } from "react";
import useFocus from "@/hooks/useFocus";
import Input from "@/components/commons/inputs/Input";
import GreenButton from "@/components/commons/buttons/GreenButton";
import KeywordHighlight from "@/components/commons/texts/KeywordHighlight";
import { RegisterStepProps } from "./RegisterForm";

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
      <KeywordHighlight
        before='사용하실'
        keyword='이름'
        after='을 입력해주세요.'
      />
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
