"use client";

import { useRecoilState, useRecoilValue } from "recoil";
import IconContainer from "./IconContainer";
import {
  newReservationOrder,
  reservationInputsSelector, reservationStep,
} from "@/store/Reservation/atoms";
import TitleForm from "./ReservationSteps/TitleForm";
import TimeForm from "./ReservationSteps/TimeForm";
import DateForm from "./ReservationSteps/DateForm";
import RoomForm from "./ReservationSteps/RoomForm";
import { ReservationType } from ".";
import GreenButton from "../commons/buttons/GreenButton";

const reservationSteps: Record<ReservationType, JSX.Element> = {
  TITLE: <TitleForm />,
  TIME: <TimeForm />,
  DATE: <DateForm />,
  ROOM: <RoomForm />,
};

const NewReservationForm = () => {
  const reservationInputs = useRecoilValue(reservationInputsSelector);
  const [currentKey, setCurrentKey] = useRecoilState(reservationStep);
  const isActive = !!reservationInputs[currentKey];
  const isDone = Object.values(reservationInputs).every((ele) => !!ele);
  const onClickHandler = () => {
    if (isDone) {
      console.log(reservationInputs);
      return;
    } else {
      const currentOrder = newReservationOrder.indexOf(currentKey);
      setCurrentKey(
        newReservationOrder[(currentOrder + 1) % newReservationOrder.length]
      );
    }
  };
  return (
    <div
      className='flex flex-col justify-center w-full
  bg-white rounded-lg shadow dark:border
      md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700
      p-6 space-y-8 md:space-y-8 sm:p-8'
    >
      <IconContainer />
      {reservationSteps[currentKey]}
      <GreenButton
        onClickHandler={onClickHandler}
        isActive={isDone || isActive}
        title={`${isDone ? "예약하기" : "다음으로"}`}
      ></GreenButton>
    </div>
  );
};

export default NewReservationForm;
