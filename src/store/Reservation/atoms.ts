import { ReservationType } from "@/components/NewReservationForm";
import { atom, atomFamily, selector } from "recoil";

export const newReservationOrder: ReservationType[] = [
  "TITLE",
  "DATE",
  "TIME",
  "ROOM",
];

export const reservationStep = atom<ReservationType>({
  key: "reservationStep",
  default: newReservationOrder[0],
});

export const reservationInput = atomFamily<string, ReservationType>({
  key: "reservationInput",
  default: "",
});

const reservationInputInitialState: Record<ReservationType, string> = {
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
