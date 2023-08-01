import { http } from "./axios";
import { URL } from "./constants";
import { ReservationData, UserData } from "@/types/common";

export const sendCodeToEmail = async (body: Pick<UserData, "email">) => {
  return http.post<Pick<UserData, "email">>(URL["EMAIL_SEND"], body);
};

export const verifyCode = async (
  body: Pick<UserData, "email" | "confirmCode">
) => {
  return http.post<Pick<UserData, "email" | "confirmCode">>(
    URL["EMAIL_CONFIRM"],
    body
  );
};

export const register = async (body: UserData) => {
  return http.post<UserData>(URL["SIGNUP"], body);
};

export const getMyReservationId = async () => {
  return http.get<Record<"reservationId", string>>(`/api/reservation/`);
};

export const getReservationData = async (
  id: Pick<ReservationData, "reservationId">
) => {
  return http.get<ReservationData>(`/api/reservation/${id}`);
};
