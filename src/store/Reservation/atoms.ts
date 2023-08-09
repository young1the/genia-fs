import { ReservationStepType } from "@/components/reservation/NewReservationForm";
import { atom, atomFamily, selector, useResetRecoilState } from "recoil";

export const newReservationOrder: ReservationStepType[] = [
  "TITLE",
  "DATE",
  "TIME",
  "ROOM",
];

export const reservationStep = atom<ReservationStepType>({
  key: "reservationStep",
  default: newReservationOrder[0],
});

export const reservationInput = atomFamily<string, ReservationStepType>({
  key: "reservationInput",
  default: "",
});

const reservationInputInitialState: Record<ReservationStepType, string> = {
  DATE: "",
  TIME: "",
  TITLE: "",
  ROOM: "",
};

export const reservationInputsSelector = selector({
  key: "reservationInputsSelector",
  get: ({ get }) => {
    return newReservationOrder.reduce((acc, step) => {
      return { ...acc, [step]: get(reservationInput(step)) };
    }, reservationInputInitialState);
  },
});

export const useResetReservationAtomFamily = () => {
  const setDate = useResetRecoilState(reservationInput("DATE"));
  const setTime = useResetRecoilState(reservationInput("TIME"));
  const setTitle = useResetRecoilState(reservationInput("TITLE"));
  const setRoom = useResetRecoilState(reservationInput("ROOM"));
  const resetAll = () => {
    setDate();
    setTime();
    setTitle();
    setRoom();
  };
  return resetAll;
};
