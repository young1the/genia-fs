"use client";
import { useState } from "react";
import useFocus from "@/hooks/useFocus";
import NewPasswordInput from "@/components/common/input/NewPasswordInput";
import RepeatPassword from "@/components/common/input/RepeatPassword";
import GreenButton from "@/components/common/button/GreenButton";
import KeywordHighlight from "@/components/common/text/KeywordHighlight";
import { useRegisterStep } from "@/store/Register/hooks";

const Password = () => {
  const [passwordInput, setPasswordInput] = useState("");
  const [repeatInput, setRepeatInput] = useState("");
  const { nextStep, setUserInput } = useRegisterStep();
  const { focusElement } = useFocus<HTMLInputElement>();

  const isActive = () => {
    const passwordRegex =
      /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!@#$%^&*()\-=+_{}\[\];':"\\|,.<>\/?])/;
    if (passwordRegex.test(passwordInput) && passwordInput === repeatInput) {
      return true;
    }
    return false;
  };
  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isActive()) return;
    setUserInput("password", passwordInput);
    nextStep();
  };

  return (
    <form className='space-y-4' onSubmit={onSubmitHandler}>
      <KeywordHighlight
        before='로그인에 사용하실'
        keyword='비밀번호'
        after='를 입력해주세요.'
      />
      <NewPasswordInput
        ref={focusElement}
        state={[passwordInput, setPasswordInput]}
      />
      <RepeatPassword
        newPassword={passwordInput}
        state={[repeatInput, setRepeatInput]}
      />
      <GreenButton title='다음' type='submit' isActive={isActive()} />
    </form>
  );
};

export default Password;
