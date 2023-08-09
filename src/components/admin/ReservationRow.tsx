import { Reservation } from "@/lib/api/reservation/type";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
  reservationData: Reservation;
  setSelected: Dispatch<SetStateAction<string[]>>;
}

const ReservationRow = ({ reservationData, setSelected }: Props) => {
  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
      <td className='w-4 p-4'>
        <div className='flex items-center'>
          <input
            id='checkbox-table-search-1'
            type='checkbox'
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            onChange={(e) => {
              if (e.target.checked) {
                setSelected((prev) => [
                  ...prev,
                  reservationData.reservationCode,
                ]);
              } else {
                setSelected((prev) =>
                  prev.filter((ele) => ele !== reservationData.reservationCode)
                );
              }
            }}
          />
        </div>
      </td>
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
          {reservationData.reservationState == 1
            ? "진행중"
            : reservationData.reservationState == 2
            ? "예약취소"
            : reservationData.reservationState == 0
            ? "완료"
            : ""}
        </div>
      </td>
    </tr>
  );
};

export default ReservationRow;
