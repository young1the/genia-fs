import { ReservationCode } from "../reservation/type";

export type Room = {
  id: string;
  roomName: string;
  beamProjector: number;
  blackBoard: number;
  computer: number;
  reservationCode: ReservationCode;
};

export interface RoomId extends Pick<Room, "id"> {}
