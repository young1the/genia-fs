"use client";
import { useMemo, useRef, useState } from "react";
import TermAndConditions from "./TermAndConditions";
import Name from "./Name";
import Email from "./Email";
import VerifyCode from "./VerifyCode";
import Password from "./Password";
import EmployeeNumber from "./EmployeeNumber";
import StepBar from "./StepBar";
import { User } from "@/types/common";

const UserInputsInitialState = {
  email: "",
  code: "",
  password: "",
  username: "",
  empNumber: "",
};

export interface RegisterStepProps {
  userInputs: User;
  nextStep: () => void;
}

const RegisterForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { current: userInputs } = useRef<User>(UserInputsInitialState);
  const RegisterStep = useMemo(() => {
    const STEP_LENGTH = 6;
    const nextStep = () => {
      if (currentStep !== STEP_LENGTH - 1) {
        setCurrentStep((curr) => curr + 1);
      }
    };
    return [
      <TermAndConditions
        key='약관동의'
        userInputs={userInputs}
        nextStep={nextStep}
      />,
      <Name key='이름 입력' userInputs={userInputs} nextStep={nextStep} />,
      <Email key='이메일 입력' userInputs={userInputs} nextStep={nextStep} />,
      <VerifyCode
        key='인증번호 입력'
        userInputs={userInputs}
        nextStep={nextStep}
      />,
      <Password
        key='비밀번호 입력'
        userInputs={userInputs}
        nextStep={nextStep}
      />,
      <EmployeeNumber
        key='사원번호 입력'
        userInputs={userInputs}
        nextStep={nextStep}
      />,
    ];
  }, [userInputs, currentStep]);
  const widthArray = ["w-1/6", "w-1/3", "w-1/2", "w-2/3", "w-5/6", "w-full"];
  return (
    <div
      className='flex flex-col justify-center w-full
      bg-white rounded-lg shadow dark:border
	      md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700
	      p-6 space-y-4 md:space-y-6 sm:p-8'
    >
      <StepBar
        description={RegisterStep[currentStep].key + ""}
        width={widthArray[currentStep]}
      />
      {RegisterStep[currentStep]}
    </div>
  );
};

export default RegisterForm;
