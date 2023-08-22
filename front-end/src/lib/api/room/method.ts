import { http } from "../axios";
import { ReservationCode } from "../reservation/type";
import { RoomId } from "./type";

export const getAllRooms = async () => {
  return http.get(`api/room`);
};

export const getRoomById = async (id: RoomId) => {
  return http.get(`api/room/${id}`);
};

export const checkInRoom = async (code: ReservationCode) => {
  return http.post(`/api/reservation/check/${code}`);
};
export const checkOutRoom = async (code: ReservationCode) => {
  return http.delete(`/api/reservation/check/${code}`);
};

// /api/room/available
export const getAvailableRoom = async (body: any) => {
  if (body === null) return getAllRooms();
  // const searchParams = new URLSearchParams(body);
  return http.get(
    `/api/room/available/?startDate=${body.startDate}&endDate=${body.endDate}`
  );
};
