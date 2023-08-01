import React, { useState } from "react";
import FileInput from "../common/input/FileInput";
import Checkbox from "../common/input/Checkbox";
import GreenButton from "../common/button/GreenButton";
import Input from "../common/input/Input";
import { useSession } from "next-auth/react";

const SettingProfile = () => {
  const { data } = useSession();
  const [userName, setUserName] = useState(data?.user?.nickName ?? "");
  const [empNumber, setEmpNumber] = useState(data?.user?.nickName ?? "");
  const [notificationAgreement, setNotificationAgreement] = useState(
    !!data?.user?.nickName
  );
  return (
    <>
      <div className='space-y-4 flex flex-col'>
        <div className='flex justify-center'>
          <FileInput />
        </div>
        <div className='w-full flex items-center'>
          <div className='w-full flex flex-col space-y-4'>
            <label className='font-semibold text-gray-500 dark:text-gray-200'>
              이름
              <Input
                className='w-full font-bold text-xl'
                placeholder={""}
                type={"text"}
                state={[userName, setUserName]}
              />
            </label>
            <label className='font-semibold text-gray-500 dark:text-gray-200'>
              사번
              <Input
                className='w-full font-bold text-xl'
                placeholder={""}
                type={"text"}
                state={[empNumber, setEmpNumber]}
              />
            </label>
          </div>
        </div>
        <Checkbox
          label='마케팅 정보 수신 동의'
          name='marketing'
          checked={notificationAgreement}
          onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNotificationAgreement(e.target.checked);
          }}
        ></Checkbox>
        <GreenButton title={"변경내용 저장하기"} />
      </div>
    </>
  );
};

export default SettingProfile;
