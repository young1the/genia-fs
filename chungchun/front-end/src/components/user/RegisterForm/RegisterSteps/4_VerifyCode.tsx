"use client";
import { useState } from "react";
import useFocus from "@/hooks/useFocus";
import GreenButton from "@/components/common/button/GreenButton";
import Input from "@/components/common/input/Input";
import KeywordHighlight from "@/components/common/text/KeywordHighlight";
import { useRegisterStep } from "@/store/Register/hooks";
import { verifyCode } from "@/lib/api/user/method";

const VerifyCode = () => {
  const [codeInput, setCodeInput] = useState("");
  const { focusElement, focus } = useFocus<HTMLInputElement>();
  const { nextStep, isError, userInput, setUserInput } = useRegisterStep({
    api: async () => {
      return verifyCode({
        email: userInput["email"],
        confirmCode: codeInput,
      });
    },
    errorCallback: () => {
      focus();
      setCodeInput("");
    },
  });
  const onSubmitHandler = async (e: React.FormEvent) => {
    if (!codeInput) return;
    e.preventDefault();
    setUserInput("confirmCode", codeInput);
    nextStep();
  };
  const isActive = !!codeInput;

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
        <GreenButton title='다음' type='submit' isActive={isActive} />
      </div>
    </form>
  );
};

export default VerifyCode;
