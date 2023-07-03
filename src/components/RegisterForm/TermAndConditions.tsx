"use client";
import { useEffect, useState } from "react";
import { RegisterStepProps } from "./RegisterForm";
import Checkbox from "../commons/inputs/Checkbox";
import Term from "./Term";

const TermAndConditions = (props: RegisterStepProps) => {
  const { setIsActive } = props;
  const totalAgreeState = useState(false);
  const personalDataState = useState(false);
  const marketingDataState = useState(false);
  useEffect(() => {
    personalDataState[1](totalAgreeState[0]);
    marketingDataState[1](totalAgreeState[0]);
  }, [totalAgreeState[0]]);
  useEffect(() => {
    setIsActive(personalDataState[0]);
  }, [personalDataState[0]]);

  return (
    <>
      <Checkbox label='전체 동의하기' state={totalAgreeState}>
        <div className='ml-6 text-md'>
          <p className='text-xs font-normal text-gray-500 dark:text-gray-300'>
            개인정보 수집 및 이용, 정보 수신 동의를 포함하고 있습니다.
          </p>
        </div>
      </Checkbox>
      <Checkbox
        label='개인정보 수집 및 이용 동의'
        state={personalDataState}
        textSize='text-sm'
      >
        <Term />
      </Checkbox>
      <Checkbox
        label='마케팅 정보 수신 동의 (선택)'
        state={marketingDataState}
        textSize='text-sm'
      >
        <Term />
      </Checkbox>
    </>
  );
};

export default TermAndConditions;
