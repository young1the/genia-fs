"use client";
import { useRouter } from "next/navigation";
import GreenButton from "@/components/commons/buttons/GreenButton";
import { signOut } from "next-auth/react";

const SignOutBox = () => {
  const router = useRouter();
  return (
    <div className='space-y-4'>
      <h1
        className='text-xl font-bold
leading-tight tracking-tight
text-gray-900 md:text-2xl dark:text-white'
      >
        정말
        <br />
        <p className='inline text-green-600'>로그아웃</p>하실래요?
      </h1>
      <GreenButton
        title={"로그아웃"}
        onClickHandler={() => {
          signOut({ redirect: false });
          router.push("/");
        }}
      />
    </div>
  );
};

export default SignOutBox;
