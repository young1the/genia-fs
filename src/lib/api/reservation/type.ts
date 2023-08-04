import { OmitId } from "@/types/utils";

/**
 * 0: 예약완료, 1: 예약진행중, 2:예약취소
 */
export type ReservationState = "CONFIRMED" | "CANCELLED" | "COMPLETED";
export interface Reservation {
  reservationCode: string;
  roomName: string;
  topic: string;
  startDate: string;
  endDate: string;
  nickName: string;
  user: any[];
  status: ReservationState;
}

export type ReservationCode = Pick<Reservation, "reservationCode">;
export interface ReservaionNew
  extends Omit<
    Reservation,
    "reservationCode" | "particName" | "reservationState" | "nickName"
  > {}

export interface ReservationPut
  extends Pick<
    Reservation,
    "reservationCode" | "topic" | "roomName" | "startDate" | "endDate"
  > {}
export interface ReservationPutBody extends OmitId<ReservationPut> {}

export interface ReservationDelete extends ReservationCode {}
export interface ReservationDeleteBody extends OmitId<ReservationPut> {}

/**
 * 현재 예약은 한 사람당 하나만 가질 수 있다.
 * @returns {string} 자신의 예약ID
 */
export interface MyreservationCode
  extends Pick<Reservation, "reservationCode"> {}
export interface ReservationGet extends Omit<Reservation, "reservationCode"> {}

export interface EntranceReservation
  extends Pick<Reservation, "reservationCode"> {}
export interface EntranceReservationBody extends OmitId<EntranceReservation> {}

export interface CheckInReservation
  extends Pick<Reservation, "reservationCode"> {}
export interface CheckInReservationBody extends OmitId<CheckInReservation> {}
