"use client";

import React from "react";
import { signIn } from "next-auth/react";
import GreenButton from "@/components/commons/buttons/GreenButton";
import KeywordHighlight from "@/components/commons/texts/KeywordHighlight";

const Done = () => {
  return (
    <div className='space-y-4'>
      <KeywordHighlight keyword='가입' after='을 축하합니다.' />
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
