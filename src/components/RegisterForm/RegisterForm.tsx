"use client";
import { useRecoilValue } from "recoil";
import { registerStepIndex, stepBarLoadStatus } from "@/store/Register/atoms";
import { RegisterSteps } from "./RegisterSteps";
import StepBar from "./StepBar";

const RegisterForm = () => {
  const currentStep = useRecoilValue(registerStepIndex);
  const isLoading = useRecoilValue(stepBarLoadStatus);
  return (
    <div
      className={`${
        isLoading ? "animate-pulse" : ""
      } flex flex-col justify-center w-full
      bg-white rounded-lg shadow dark:border
	      md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700
	      p-6 space-y-4 md:space-y-6 sm:p-8`}
    >
      <StepBar />
      {RegisterSteps[currentStep]}
    </div>
  );
};

export default RegisterForm;
