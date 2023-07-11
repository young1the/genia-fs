"use client";
import { useState } from "react";
import useFocus from "@/hooks/useFocus";
import * as API from "@/lib/api";
import GreenButton from "@/components/commons/buttons/GreenButton";
import Input from "@/components/commons/inputs/Input";
import KeywordHighlight from "@/components/commons/texts/KeywordHighlight";
import { RegisterStepProps } from "./RegisterForm";

const VerifyCode = (props: RegisterStepProps) => {
  const { userInputs, nextStep } = props;
  const [codeInput, setCodeInput] = useState("");
  const [isError, setIsError] = useState(false);
  const { focusElement, focus } = useFocus<HTMLInputElement>();
  const isActive = !!codeInput
  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!codeInput) return;
    if (userInputs) userInputs["code"] = codeInput;
    try {
      await API.methods.verifyCode(userInputs);
      nextStep();
    } catch (e) {
      setIsError(true);
      focus();
    }
  };

  return (
    <form className='space-y-4' onSubmit={onSubmitHandler}>
      <KeywordHighlight
        before='메일로 전송된'
        keyword='인증번호'
        after='를 입력해주세요.'
      />
      <div className='flex flex-col space-y-8'>
        <div className='relative'>
          <Input
            state={[codeInput, setCodeInput]}
            ref={focusElement}
            placeholder='인증번호를 입력해주세요.'
            type='text'
          />
          {isError ? (
            <p className='text-red-600 absolute'>코드를 다시 확인해주세요.</p>
          ) : null}
        </div>
        <GreenButton
          title='다음'
          type='submit'
          isActive={isActive}
        />
      </div>
    </form>
  );
};

export default VerifyCode;
