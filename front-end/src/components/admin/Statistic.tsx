"use client";
import React from "react";
import UserVisitStatistics from "./UserVisitStatistics";
import UserVisitTable from "./UserVisitTable";

const data = [
  { date: new Date("2023-07-01"), visitors: 100 },
  { date: new Date("2023-07-02"), visitors: 120 },
  { date: new Date("2023-07-03"), visitors: 50 },
  { date: new Date("2023-07-04"), visitors: 90 },
  { date: new Date("2023-07-05"), visitors: 170 },
  { date: new Date("2023-07-06"), visitors: 20 },
  { date: new Date("2023-07-07"), visitors: 100 },
  { date: new Date("2023-07-08"), visitors: 110 },
  // 추가적인 날짜와 방문자 데이터를 넣어주세요.
];

export interface VisitData {
  date: Date;
  visitors: number;
}

export interface VisitDataProps {
  data: VisitData[];
}

const Statistic = () => {
  return (
    <div className='relative flex flex-col space-y-6 overflow-x-auto shadow-md sm:rounded-lg p-6'>
      <h2 className='text-2xl font-bold'>예약 페이지 방문자 통계</h2>
      <div className='flex space-x-6'>
        <UserVisitStatistics data={[...data]} />
        <UserVisitTable data={[...data]} />
      </div>
    </div>
  );
};

export default Statistic;
