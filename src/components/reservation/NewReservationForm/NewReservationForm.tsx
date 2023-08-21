"use client";

import { useRecoilState, useRecoilValue } from "recoil";
import IconContainer from "./IconContainer";
import {
  newReservationOrder,
  reservationInputsSelector,
  reservationStep,
  useResetReservationAtomFamily,
} from "@/store/Reservation/atoms";
import TitleForm from "./ReservationSteps/TitleForm";
import TimeForm from "./ReservationSteps/TimeForm";
import DateForm from "./ReservationSteps/DateForm";
import RoomForm from "./ReservationSteps/RoomForm";
import { ReservationStepType } from ".";
import GreenButton from "@/components/common/button/GreenButton";
import { newReservation } from "@/lib/api/reservation/method";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import toast from "react-hot-toast";

const reservationSteps: Record<ReservationStepType, JSX.Element> = {
  TITLE: <TitleForm />,
  TIME: <TimeForm />,
  DATE: <DateForm />,
  ROOM: <RoomForm />,
};

const NewReservationForm = () => {
  const reservationInputs = useRecoilValue(reservationInputsSelector);
  const resetInputs = useResetReservationAtomFamily();
  const [currentKey, setCurrentKey] =
    useRecoilState<ReservationStepType>(reservationStep);
  const router = useRouter();
  const isActive = !!reservationInputs[currentKey];
  const isDone = Object.values(reservationInputs).every((ele) => !!ele);
  const onClickHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (isDone) {
      const roomName = reservationInputs.ROOM;
      const topic = reservationInputs.TITLE;
      const date = reservationInputs.DATE;
      const times = reservationInputs.TIME.split(" ");
      const startDate = `${date}T${times[0]}.000000`;
      const endDate = `${date}T${times[1]}.000000`;
      const body = { roomName, topic, startDate, endDate };
      await toast.promise(
        new Promise(async (resolve, reject) => {
          try {
            await newReservation(body);
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
      resetInputs();
      router.replace("/reservation");
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
      p-6 space-y-8 sm:p-8'
    >
      <IconContainer />
      <form className='flex flex-col space-y-8' onSubmit={onClickHandler}>
        {reservationSteps[currentKey]}
        <GreenButton
          type='submit'
          onClickHandler={onClickHandler}
          isActive={isDone || isActive}
          title={`${isDone ? "예약하기" : "다음으로"}`}
        ></GreenButton>
      </form>
    </div>
  );
};

export default NewReservationForm;
