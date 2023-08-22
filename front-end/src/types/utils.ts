import { Reservation } from "@/lib/api/reservation/type";
import { User } from "../lib/api/user/type";

export type Keys<T> = keyof T;
export type OmitId<T> = T extends Reservation ? Omit<T, 'reservationCode'> : T extends User ? Omit<T, 'email'> : T;
