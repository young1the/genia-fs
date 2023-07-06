"use client";
import { signIn } from "next-auth/react";
import React from "react";
import GreenButton from "../commons/buttons/GreenButton";

const Done = () => {
  return (
    <div className='space-y-4'>
      <h1
        className='text-xl font-bold
leading-tight tracking-tight
text-gray-900 md:text-2xl dark:text-white'
      >
        <p className='inline text-green-600'>가입</p>을 축하드립니다!
      </h1>
      <GreenButton
        title='로그인 하러 가기'
        type='submit'
        onClickHandler={() => {
          signIn();
        }}
      />
    </div>
  );
};

export default Done;
