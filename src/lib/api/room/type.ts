import { ReservationCode } from "../reservation/type";

export type Room = {
  id: string;
  roomName: string;
  beamProject: number;
  blackboard: number;
  computer: number;
  reservationCode: ReservationCode;
};

export interface RoomId extends Pick<Room, "id"> {}
