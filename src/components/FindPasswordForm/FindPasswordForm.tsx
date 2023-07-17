"use client";

import { useState } from "react";
import useFocus from "@/hooks/useFocus";
import * as API from "@/lib/api";
import Input from "@/components/commons/inputs/Input";
import GreenButton from "@/components/commons/buttons/GreenButton";
import KeywordHighlight from "@/components/commons/texts/KeywordHighlight";
import Link from "next/link";
import * as LINK from "@/lib/link";

const FindPasswordForm = () => {
  const [emailInput, setEmailInput] = useState("");
  const [pwdSent, setPwdSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const { focusElement, focus } = useFocus<HTMLInputElement>();
  const emailRegex = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isActive = emailRegex.test(emailInput);
  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isActive) return;
    try {
      await API.methods.sendCodeToEmail({ email: emailInput });
      setPwdSent(true);
    } catch (e) {
      setIsError(true);
      setEmailInput("");
      focus();
    }
  };

  return (
    <div className='w-full bg-white relative rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 p-6 space-y-10 md:space-y-12 sm:p-8'>
      {pwdSent ? (
        <div className='space-y-4'>
          <KeywordHighlight
            before='이메일로'
            keyword='임시 비밀번호'
            after='를 발송했습니다.'
          />
          <Link
            className='block text-white bg-primary hover:bg-green-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-green-700'
            href={LINK.constants.URLS["LOGIN"]}
          >
            {LINK.constants.TITLES["LOGIN"]}
          </Link>
        </div>
      ) : (
        <form className='space-y-4' onSubmit={onSubmitHandler}>
          <KeywordHighlight
            before='찾으실'
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
              {emailInput !== "" && !isActive ? (
                <p className='text-red-600 absolute -bottom-7'>
                  이메일 형식이 다릅니다.
                </p>
              ) : null}
              {isError && emailInput === "" ? (
                <p className='text-red-600 absolute -bottom-7'>
                  이메일을 다시 확인해주세요.
                </p>
              ) : null}
            </div>
            <GreenButton title='다음' type='submit' isActive={isActive} />
          </div>
        </form>
      )}
    </div>
  );
};

export default FindPasswordForm;
