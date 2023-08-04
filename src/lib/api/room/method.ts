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
