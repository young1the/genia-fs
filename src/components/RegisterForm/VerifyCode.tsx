"use client";
import { useState } from "react";
import Input from "../commons/inputs/Input";
import { RegisterStepProps } from "./RegisterForm";
import { verifyCode } from "@/lib/api";
import GreenButton from "../commons/buttons/GreenButton";
import useFocus from "@/hooks/useFocus";

const VerifyCode = (props: RegisterStepProps) => {
  const { userInputs, nextStep } = props;
  const codeInputState = useState("");
  const [isError, setIsError] = useState(false);
  const firstElement = useFocus<HTMLInputElement>();
  const onClickHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userInputs) userInputs["code"] = codeInputState[0];
    const verifyCodeResult = await verifyCode(userInputs);
    if (verifyCodeResult) nextStep();
    else {
      setIsError(true);
    }
  };

  return (
    <form className='space-y-4'>
      <h1
        className='text-xl font-bold
	leading-tight tracking-tight
	text-gray-900 md:text-2xl dark:text-white'
      >
        메일로 전송된
        <br />
        <p className='inline text-green-600'>인증번호</p>를 확인해주세요.
      </h1>
      <div className='flex flex-col space-y-8'>
        <div className='relative'>
          <Input
            state={codeInputState}
            ref={firstElement}
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
          isActive={!!codeInputState[0]}
          onClickHandler={onClickHandler}
        />
      </div>
    </form>
  );
};

export default VerifyCode;
