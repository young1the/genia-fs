"use client";
import * as SVG from "@/components/common/svg";
import { Reservation } from "@/lib/api/reservation/type";

interface Props {
  reservationData: Reservation | undefined;
  onClickHandler: () => void;
}

const ReservationInfoButton = ({ reservationData, onClickHandler }: Props) => {
  const start = new Date(reservationData?.startDate ?? 0);
  const koDate = `${start.getFullYear()}년 ${
    start.getMonth() + 1
  }월 ${start.getDate()}일`;
  return (
    <>
      <div
        onClick={onClickHandler}
        className='shadow cursor-pointer w-full rounded-lg dark:border dark:bg-gray-800 dark:border-gray-700 p-4 flex items-center'
      >
        <SVG.QRScan className='w-16 h-16' />
        <div className='w-full ml-4 overflow-hidden whitespace-nowrap text-ellipsis'>
          {reservationData?.topic}
          <div>{koDate}</div>
        </div>
      </div>
    </>
  );
};

export default ReservationInfoButton;
