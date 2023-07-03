"use client";
import TermAndConditions from "./TermAndConditions";
import Name from "./Name";
import Email from "./Email";
import VerifyCode from "./VerifyCode";
import Password from "./Password";
import EmployeeNumber from "./EmployeeNumber";
import { Dispatch, SetStateAction, useMemo, useRef, useState } from "react";
import GreenButton from "../commons/buttons/GreenButton";

type UserInputs =
  | {
      email: string;
      password: string;
      username: string;
      empNumber: string;
    }
  | undefined;

const UserInputsInitialState = {
  email: "",
  password: "",
  username: "",
  empNumber: "",
};

export interface RegisterStepProps {
  userInputs: UserInputs;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

const RegisterForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { current: userInputs } = useRef<UserInputs>(UserInputsInitialState);

  const RegisterStep = useMemo(
    () => [
      <TermAndConditions
        key='약관동의'
        userInputs={userInputs}
        setIsActive={setIsActive}
      />,
      <Name
        key='이름 입력'
        userInputs={userInputs}
        setIsActive={setIsActive}
      />,
      <Email
        key='이메일 입력'
        userInputs={userInputs}
        setIsActive={setIsActive}
      />,
      <VerifyCode
        key='인증번호 입력'
        userInputs={userInputs}
        setIsActive={setIsActive}
      />,
      <Password
        key='비밀번호 입력'
        userInputs={userInputs}
        setIsActive={setIsActive}
      />,
      <EmployeeNumber
        key='사원번호 입력'
        userInputs={userInputs}
        setIsActive={setIsActive}
      />,
    ],
    [userInputs]
  );
  const Width = ["w-1/6", "w-1/3", "w-1/2", "w-2/3", "w-5/6", "w-full"];
  const onClickHandler = () => {
    if (RegisterStep[currentStep].key == "이메일 입력") {
      console.log(userInputs);
      // fetch;
    }
    if (RegisterStep[currentStep].key == "인증번호 입력") {
      console.log(userInputs);
      // fetch();
    }
    if (RegisterStep[currentStep].key == "사원번호 입력") {
      console.log(userInputs);
      // fetch();
    }
    if (currentStep !== RegisterStep.length - 1) {
      setCurrentStep((curr) => curr + 1);
    }
  };
  return (
    <div
      className='flex flex-col justify-center w-full bg-white rounded-lg shadow dark:border
	md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700
	p-6 space-y-6 md:space-y-8 sm:p-8'
    >
      <div className='w-full h-1 bg-gray-200 my-8'>
        <div
          className={`flex justify-center h-1 bg-green-600 transition-all ease ${Width[currentStep]}`}
        >
          <p className='text-xs md:text-sm text-green-600 -mt-5'>
            {RegisterStep[currentStep].key}
          </p>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onClickHandler();
        }}
        className='space-y-4'
      >
        {RegisterStep[currentStep]}
      </form>
      <GreenButton
        title='다음'
        type='button'
        isActive={isActive}
        onClickHandler={onClickHandler}
      />
    </div>
  );
};

export default RegisterForm;
