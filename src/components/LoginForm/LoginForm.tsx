"use client";
import Link from "next/link";
import { TITLES, URLS } from "@/constants/navigation";
import Input from "@/components/commons/inputs/Input";
import GreenButton from "@/components/commons/buttons/GreenButton";
import TitleText from "@/components/commons/texts/TitleText";
import PasswordInput from "../commons/inputs/PasswordInput";
import { useEffect, useState } from "react";

const LoginForm = () => {
  const useremailState = useState("");
  const passwordState = useState("");
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (useremailState[0] && passwordState[0]) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [useremailState, passwordState]);

  return (
    <div className='w-full bg-white relative rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 p-6 space-y-10 md:space-y-12 sm:p-8'>
      <TitleText title={TITLES["LOGIN"]} />
      {/* <p className='absolute text-red-600 top-4'>
        이메일 또는 비밀번호가 올바르지 않습니다.
      </p> */}
      <form className='flex flex-col justify-center space-y-4 md:space-y-6'>
        <Input
          state={useremailState}
          placeholder='이메일을 입력해주세요'
          type='email'
        />
        <PasswordInput state={passwordState} />
        <GreenButton isActive={isActive} title='로그인' />
        <p className='text-sm font-light text-gray-500 dark:text-gray-400 text-center'>
          <Link
            href='#'
            className='font-medium text-primary-600 hover:underline dark:text-primary-500'
          >
            비밀번호 찾기
          </Link>
          {"    "}|{"    "}
          <Link
            href={URLS["REGISTER"]}
            className='font-medium text-primary-600 hover:underline dark:text-primary-500'
          >
            {TITLES["REGISTER"]}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
