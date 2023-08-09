import { http } from "../axios";
import { ReservaionNew, ReservationCode, Reservation } from "./type";
import * as URL from "./url";

export const newReservation = async (body: ReservaionNew) => {
  return http.post(URL.newReservationURL, body);
};

export const getMyReservationId = async () => {
  try {
    const response = await http.get<ReservationCode>(URL.getMyReservationIdURL);
    return response.reservationCode;
  } catch (error) {
    return "";
  }
};

export const getReservationData = async (
  id: ReservationCode
) => {
  return http.get<Reservation>(`/api/reservation/${id}`);
};

export const modifyReservationData = async (
  id: ReservationCode,
  topic: Pick<Reservation, 'topic'>
) => {
  return http.put(`/api/reservation/${id}`, {topic});
}

export const deleteReservationData = async (
  id: ReservationCode
) => {
  return http.delete(`/api/reservation/${id}`);
}

export const entrantReservation = async (
  id: ReservationCode
) => {
  return http.post(`/api/reservation/entrant/${id}`);
}

export const deEntrantReservation = async (
  id: ReservationCode
) => {
  return http.delete(`/api/reservation/entrant/${id}`);
}

export const getAllReservations = async (
) => {
  return http.get(`api/mypage/reservation`);
}