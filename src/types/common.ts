export interface UserData {
  notificationAgreement: string;
  email: string;
  confirmCode: string;
  password: string;
  nickName: string;
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
