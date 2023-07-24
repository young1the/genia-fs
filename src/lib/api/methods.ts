import { http } from "./axios";
import { URL } from "./constants";
import { ReservationData, UserData } from "@/types/common";

export const sendCodeToEmail = async (body: Pick<UserData, "email">) => {
  return http.post<Pick<UserData, "email">>(URL["CODE_SEND"], body);
};

export const verifyCode = async (body: Pick<UserData, "email" | "code">) => {
  return http.post<Pick<UserData, "email" | "code">>(URL["CODE_VERIFY"], body);
};

export const register = async (body: UserData) => {
  return http.post<UserData>(URL["REGISTER"], body);
};

export const getMyReservationId = async () => {
  return http.get<Record<"reservationId", string>>(`/api/reservation/`);
};

export const getReservationData = async (
  id: Pick<ReservationData, "reservationId">
) => {
  return http.get<ReservationData>(`/api/reservation/${id}`);
};
