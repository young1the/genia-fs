"use client";
import { useQuery } from "@tanstack/react-query";
import GreenButton from "../common/button/GreenButton";
import ReservationRow from "./ReservationRow";
import { getAdminReservations } from "@/lib/api/admin/method";
import { Reservation } from "@/lib/api/reservation/type";

const ReservationTable = () => {
  const { data } = useQuery<Reservation[]>(["admin", "reservation"], {
    queryFn: getAdminReservations,
  });
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg p-4'>
      <div className='w-full flex justify-end items-center mb-4'>
        <GreenButton title={"전체취소"} />
      </div>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th className='px-6 py-3'>id</th>
            <th className='px-6 py-3'>강의실</th>
            <th className='px-6 py-3'>제목</th>
            <th className='px-6 py-3'>예약자</th>
            <th className='px-6 py-3'>예약일시</th>
            <th className='px-6 py-3'>상태</th>
            <th className='px-6 py-3'>취소하기</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((ele) => {
                return (
                  <ReservationRow
                    key={ele.reservationCode}
                    reservationData={ele}
                  />
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationTable;
