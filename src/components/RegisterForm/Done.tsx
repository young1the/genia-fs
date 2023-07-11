"use client";

import React from "react";
import { signIn } from "next-auth/react";
import GreenButton from "@/components/commons/buttons/GreenButton";
import KeywordHighlight from "@/components/commons/texts/KeywordHighlight";

const Done = () => {
  return (
    <div className='space-y-4'>
      <KeywordHighlight keyword='가입' after='을' rest='축하드립니다!' />
      <div className='flex flex-col'>
        <GreenButton
          title='로그인'
          type='submit'
          onClickHandler={() => {
            signIn();
          }}
        />
      </div>
    </div>
  );
};

export default Done;
