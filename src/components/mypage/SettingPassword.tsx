"use client";
import * as SVG from "@/components/common/svg";
import PasswordInput from "../common/input/PasswordInput";
import NewPasswordInput from "../common/input/NewPasswordInput";
import RepeatPassword from "../common/input/RepeatPassword";
import GreenButton from "../common/button/GreenButton";
import { useState } from "react";
import { changePassword } from "@/lib/api/mypage/method";
import toast from "react-hot-toast";

const SettingPassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const isActive = () => {
    const passwordRegex =
      /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!@#$%^&*()\-=+_{}\[\];':"\\|,.<>\/?])/;
    if (passwordRegex.test(newPassword) && newPassword === repeatPassword) {
      return true;
    }
    return false;
  };

  const buttonOnclickHandler = async () => {
    if (!isActive) return;
    toast.promise(
      new Promise(async (resolve, reject) => {
        try {
          await changePassword({
            password: currentPassword,
            newPassword,
          });
          resolve(true);
        } catch (e) {
          reject(e);
        }
      }),
      {
        loading: "기다려주세요...",
        success: "완료",
        error: "Error",
      }
    );
    setCurrentPassword("");
    setNewPassword("");
    setRepeatPassword("");
  };

  return (
    <>
      <div className='inline-flex items-center justify-center w-full'>
        <hr className='w-full h-[1px] my-4 bg-gray-200 border-0 rounded dark:bg-gray-700' />
        <div className='absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900'>
          <SVG.Key className='w-8 h-8' />
        </div>
      </div>
      <div className='flex flex-col space-y-4'>
        <label className='font-semibold text-gray-500 dark:text-gray-200'>
          현재 비밀번호
          <PasswordInput state={[currentPassword, setCurrentPassword]} />
        </label>
        <label className='font-semibold text-gray-500 dark:text-gray-200'>
          새로운 비밀번호
          <NewPasswordInput state={[newPassword, setNewPassword]} />
        </label>
        <label className='font-semibold text-gray-500 dark:text-gray-200'>
          비밀번호 확인
          <RepeatPassword
            state={[repeatPassword, setRepeatPassword]}
            newPassword={newPassword}
          />
        </label>
        <GreenButton
          title={"비밀번호 변경하기"}
          isActive={isActive()}
          onClickHandler={buttonOnclickHandler}
        />
      </div>
    </>
  );
};

export default SettingPassword;
