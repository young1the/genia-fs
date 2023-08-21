"use client";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import GreenButton from "@/components/common/button/GreenButton";
import KeywordHighlight from "@/components/common/text/KeywordHighlight";
import { unsetAccessTokenAttachedToAxiosDefaults } from "@/lib/api/axios";

const SignOutBox = () => {
  const router = useRouter();
  return (
    <div
      className='flex flex-col justify-center w-full
    bg-white rounded-lg shadow dark:border
      md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700
      px-16 py-8 space-y-8'
    >
      <KeywordHighlight keyword='로그아웃' rest='하시겠습니까?' />
      <GreenButton
        title={"로그아웃"}
        onClickHandler={() => {
          unsetAccessTokenAttachedToAxiosDefaults();
          signOut({ redirect: false });
          router.replace("/user/login");
        }}
      />
    </div>
  );
};

export default SignOutBox;
