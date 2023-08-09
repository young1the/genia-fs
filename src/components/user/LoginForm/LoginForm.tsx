"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import useFocus from "@/hooks/useFocus";
import * as LINK from "@/lib/link";
import Input from "@/components/common/input/Input";
import GreenButton from "@/components/common/button/GreenButton";
import TitleText from "@/components/common/text/TitleText";
import PasswordInput from "@/components/common/input/PasswordInput";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const { focusElement, focus } = useFocus<HTMLInputElement>();
  const router = useRouter();
  const loginButtonHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    const { error } = response as any;
    if (error) {
      setIsError(true);
      setPassword("");
      setEmail("");
      focus();
    } else {
      router.back();
    }
  };

  return (
    <div className='w-full bg-white relative rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 p-6 space-y-10 md:space-y-12 sm:p-8'>
      <TitleText title={LINK.constants.TITLES["LOGIN"]} />
      {isError && email === "" && password === "" ? (
        <p className='text-red-600 absolute top-5 text-xs md:text-sm md:top-6'>
          아이디 또는 비밀번호가 올바르지 않습니다.
        </p>
      ) : null}
      <form className='flex flex-col justify-center space-y-4 md:space-y-6'>
        <Input
          state={[email, setEmail]}
          placeholder='이메일을 입력해주세요'
          ref={focusElement}
          type='email'
        />
        <PasswordInput state={[password, setPassword]} />
        <GreenButton
          isActive={!!email && !!password}
          type='submit'
          title='로그인'
          onClickHandler={loginButtonHandler}
        />
        <p className='text-sm font-light text-gray-500 dark:text-gray-400 text-center'>
          <Link
            href={LINK.constants.URLS["FINDPWD"]}
            className='font-medium hover:underline'
          >
            {LINK.constants.TITLES["FINDPWD"]}
          </Link>
          {"    "}|{"    "}
          <Link
            href={LINK.constants.URLS["REGISTER"]}
            className='font-medium hover:underline'
          >
            {LINK.constants.TITLES["REGISTER"]}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
