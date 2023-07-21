export interface UserData {
  email: string;
  code: string;
  password: string;
  username: string;
  empNumber: string;
}

export interface ReservationData {
  reservationId: string;
  roomNumber: string;
  topic: string;
  name: string;
  startDate: string;
  endDate: string;
  reservationState: number;
}
