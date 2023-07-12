"use client";
import { useState } from "react";
import Checkbox from "@/components/commons/inputs/Checkbox";
import GreenButton from "@/components/commons/buttons/GreenButton";
import Term from "../Term";
import { useRegisterStep } from "@/store/RegisterForm/hooks";

type AgreementsType = "personalAgreed" | "marketingAgreed";

type AgreementsStateType = Record<AgreementsType, boolean>;

const AgreementsInitialState: AgreementsStateType = {
  personalAgreed: false,
  marketingAgreed: false,
};

const MandatoryAgreed: AgreementsType[] = ["personalAgreed"];

const TermAndConditions = () => {
  const { nextStep } = useRegisterStep();
  const [allAgreed, setAllAgreed] = useState(false);
  const [agreements, setAgreements] = useState<AgreementsStateType>(
    AgreementsInitialState
  );
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    const newAgreements = { ...agreements, [name]: checked };
    setAgreements(newAgreements);
    setAllAgreed(() => {
      return Object.values(newAgreements).every((checked) => checked === true);
    });
  };
  const allCheckOnChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked } = event.target;
    setAllAgreed(checked);
    setAgreements((prevAgreements) => {
      const newAgreements = Object.keys(prevAgreements).reduce((acc, key) => {
        return { ...acc, [key]: checked };
      }, AgreementsInitialState);
      return newAgreements;
    });
  };
  const formOnSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form className='flex flex-col space-y-4'>
      <Checkbox
        label='전체 동의하기'
        name='allAgreed'
        checked={allAgreed}
        onChangeHandler={allCheckOnChangeHandler}
      >
        <div className='ml-6 text-md'>
          <p className='text-xs font-normal text-gray-500 dark:text-gray-300'>
            개인정보 수집 및 이용, 정보 수신 동의를 포함하고 있습니다.
          </p>
        </div>
      </Checkbox>
      <Checkbox
        label='개인정보 수집 및 이용 동의 (필수)'
        name='personalAgreed'
        checked={agreements["personalAgreed"]}
        onChangeHandler={onChangeHandler}
        textSize='text-sm'
      >
        <Term />
      </Checkbox>
      <Checkbox
        label='마케팅 정보 수신 동의 (선택)'
        name='marketingAgreed'
        checked={agreements["marketingAgreed"]}
        onChangeHandler={onChangeHandler}
        textSize='text-sm'
      >
        <Term />
      </Checkbox>
      <GreenButton
        title='다음'
        type='submit'
        isActive={MandatoryAgreed.every(
          (agreed) => agreements[agreed] === true
        )}
        onClickHandler={formOnSubmitHandler}
      />
    </form>
  );
};

export default TermAndConditions;
