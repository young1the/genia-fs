"use client";
import Link from "next/link";
import { TITLES, URLS } from "@/constants/navigation";
import Input from "@/components/commons/inputs/Input";
import GreenButton from "@/components/commons/buttons/GreenButton";
import TitleText from "@/components/commons/texts/TitleText";
import PasswordInput from "@/components/commons/inputs/PasswordInput";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import useFocus from "../../hooks/useFocus";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const firstElement = useFocus<HTMLInputElement>();
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
      firstElement?.current?.focus();
    } else router.replace("/");
  };

  return (
    <div className='w-full bg-white relative rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 p-6 space-y-10 md:space-y-12 sm:p-8'>
      <TitleText title={TITLES["LOGIN"]} />
      {isError && email === "" && password === "" ? (
        <p className=' text-red-600 absolute top-5 text-xs md:text-sm md:top-6'>
          아이디 또는 비밀번호가 올바르지 않습니다.
        </p>
      ) : null}
      <form className='flex flex-col justify-center space-y-4 md:space-y-6'>
        <Input
          state={[email, setEmail]}
          placeholder='이메일을 입력해주세요'
          ref={firstElement}
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
