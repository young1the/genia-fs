"use client";

import { useState } from "react";
import useFocus from "@/hooks/useFocus";
import * as API from "@/lib/api";
import Input from "@/components/commons/inputs/Input";
import GreenButton from "@/components/commons/buttons/GreenButton";
import { RegisterStepProps } from "./RegisterForm";
import KeywordHighlight from "@/components/commons/texts/KeywordHighlight";

const Email = (props: RegisterStepProps) => {
  const { userInputs, nextStep } = props;
  const [emailInput, setEmailInput] = useState("");
  const [isError, setIsError] = useState(false);
  const { focusElement, focus } = useFocus<HTMLInputElement>();
  const onClickHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userInputs) userInputs["email"] = emailInput;
    try {
      await API.methods.sendCodeToEmail(userInputs);
      nextStep();
    } catch (e) {
      setIsError(true);
      setEmailInput("");
      focus();
    }
  };
  const emailRegex = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    <form className='space-y-4'>
      <KeywordHighlight
        before='사용하실'
        keyword='이메일'
        after='을 입력해주세요.'
      />
      <div className='flex flex-col space-y-8'>
        <div className='relative'>
          <Input
            state={[emailInput, setEmailInput]}
            placeholder='이메일을 입력하세요.'
            ref={focusElement}
            type='email'
          />
          {emailInput !== "" && !emailRegex.test(emailInput) ? (
            <p className='text-red-600 absolute -bottom-7'>
              이메일 형식이 다릅니다.
            </p>
          ) : null}
          {isError && emailInput === "" ? (
            <p className='text-red-600 absolute -bottom-7'>
              이메일이 중복입니다.
            </p>
          ) : null}
        </div>
        <GreenButton
          title='다음'
          type='submit'
          isActive={emailRegex.test(emailInput)}
          onClickHandler={onClickHandler}
        />
      </div>
    </form>
  );
};

export default Email;
