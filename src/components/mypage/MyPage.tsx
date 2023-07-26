"use client";
import * as SVG from "@/components/common/svg";
import { useState } from "react";
import PasswordInput from "../common/input/PasswordInput";
import TitleText from "../common/text/TitleText";
import Input from "../common/input/Input";
import FileInput from "../common/input/FileInput";
import Checkbox from "../common/input/Checkbox";
import GreenButton from "../common/button/GreenButton";
import NewPasswordInput from "../common/input/NewPasswordInput";
import RepeatPassword from "../common/input/RepeatPassword";

const MyPage = () => {
  const [password, setPassword] = useState("");
  return (
    <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 p-6 space-y-10 md:space-y-12 sm:p-8'>
      <TitleText title={"내 정보 변경하기"} />
      <div className='flex flex-col space-y-4'>
        <FileInput />
        <div className='w-full flex items-center space-y-4'>
          <div className='w-full'>
            <label className='font-md'>
              이름
              <Input
                className='w-full font-bold text-xl'
                placeholder={""}
                type={"text"}
                state={[password, setPassword]}
              />
            </label>
          </div>
        </div>
        <Checkbox
          label='마케팅 정보 수신 동의 (선택)'
          name='allAgreed'
          checked={false}
          onChangeHandler={() => {}}
        ></Checkbox>
        <GreenButton title={"변경내용 저장하기"} />
      </div>
      <div className='inline-flex items-center justify-center w-full'>
        <hr className='w-full h-[1px] my-8 bg-gray-200 border-0 rounded dark:bg-gray-700' />
        <div className='absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900'>
          <SVG.Key className='w-8 h-8' />
        </div>
      </div>
      <div className='flex flex-col space-y-4'>
        <label className='font-md'>
          현재 비밀번호
          <PasswordInput state={[password, setPassword]} />
        </label>
        <label className='font-md'>
          현재 비밀번호
          <NewPasswordInput state={[password, setPassword]} />
        </label>
        <label className='font-md'>
          현재 비밀번호
          <RepeatPassword
            state={[password, setPassword]}
            newPassword={password}
          />
        </label>
        <GreenButton title={"비밀번호 변경하기"} />
      </div>
    </div>
  );
};

export default MyPage;
