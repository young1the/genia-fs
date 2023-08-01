"use client";
import GreenButton from "../common/button/GreenButton";
import ReservationRow from "./ReservationRow";

const dummyData = {
  reservationId: "F2P8",
  roomNumber: "강의실3",
  topic: "TEST API를 만드는 주도적인 학습",
  name: "안지현",
  startDate: "2023-07-31T22:00:00",
  endDate: "2023-07-31T23:00:00",
  reservationState: 1,
};

const ReservationTable = () => {
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg p-4'>
      <div className='w-full flex justify-end items-center mb-4'>
        <GreenButton title={"전체취소"} />
      </div>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th className='p-4'>
              <div className='flex items-center'></div>
            </th>
            <th className='px-6 py-3'>id</th>
            <th className='px-6 py-3'>강의실</th>
            <th className='px-6 py-3'>제목</th>
            <th className='px-6 py-3'>예약자</th>
            <th className='px-6 py-3'>예약일시</th>
            <th className='px-6 py-3'>상태</th>
          </tr>
        </thead>
        <tbody>
          <ReservationRow reservationData={dummyData} />
          <ReservationRow reservationData={dummyData} />
          <ReservationRow reservationData={dummyData} />
          <ReservationRow reservationData={dummyData} />
          <ReservationRow reservationData={dummyData} />
          <ReservationRow reservationData={dummyData} />
          <ReservationRow reservationData={dummyData} />
          <ReservationRow reservationData={dummyData} />
          <ReservationRow reservationData={dummyData} />
          <ReservationRow reservationData={dummyData} />
          <ReservationRow reservationData={dummyData} />
          <ReservationRow reservationData={dummyData} />
          <ReservationRow reservationData={dummyData} />
          <ReservationRow reservationData={dummyData} />
          <ReservationRow reservationData={dummyData} />
          <ReservationRow reservationData={dummyData} />
          <ReservationRow reservationData={dummyData} />
          <ReservationRow reservationData={dummyData} />
        </tbody>
      </table>
    </div>
  );
};

export default ReservationTable;
