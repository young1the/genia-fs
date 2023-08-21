import { cancelReservation } from "@/lib/api/admin/method";
import { Reservation } from "@/lib/api/reservation/type";
import React from "react";
import toast from "react-hot-toast";

interface Props {
  reservationData: Reservation;
}

const ReservationRow = ({ reservationData }: Props) => {
  const onClickHandler = async () => {
    toast.promise(
      new Promise(async (resolve, reject) => {
        try {
          await cancelReservation({
            reservationCode: reservationData.reservationCode,
          });
          resolve(true);
        } catch (e) {
          reject(e);
        }
      }),
      {
        loading: "기다려주세요...",
        success: "완료",
        error: "Error",
      }
    );
  };

  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
      <td className='px-6 py-4'>
        <div className='font-normal text-gray-500'>
          {reservationData.reservationCode}
        </div>
      </td>
      <td className='px-6 py-4'>{reservationData.roomName}</td>
      <td className='px-6 py-4'>
        <div className='font-normal text-gray-500'>{reservationData.topic}</div>
      </td>
      <td className='px-6 py-4'>
        <div className='font-normal text-gray-500'>
          {reservationData.nickName}
        </div>
      </td>
      <td className='px-6 py-4'>
        <div className='font-normal text-gray-500'>
          {reservationData.startDate}
        </div>
      </td>
      <td className='px-6 py-4'>
        <div className='font-normal text-gray-500'>
          {reservationData.status == "CONFIRMED"
            ? "진행중"
            : reservationData.status == "CANCELLED"
            ? "예약취소"
            : reservationData.status == "COMPLETED"
            ? "완료"
            : ""}
        </div>
      </td>
      <td className='px-6 py-4'>
        {reservationData.status == "CONFIRMED" ? (
          <div
            onClick={onClickHandler}
            className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
          >
            취소하기
          </div>
        ) : null}
      </td>
    </tr>
  );
};

export default ReservationRow;
