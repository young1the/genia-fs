"use client"
import { useState } from "react";
import TitleText from "../common/text/TitleText";
import ReservationInfoButton from "../reservation/ReservationInfoButton";

const 진행중 = 1;
const 완료 = 0;
const 취소 = 2;

const ReservationHistory = () => {
  const [historyFilter, setHistoryFilter] = useState(진행중);
  historyFilter;
  return (
    <>
      <TitleText title={"나의 예약내역 확인하기"} />
      <ul className='flex text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow dark:divide-gray-700 dark:text-gray-400'>
        <li className='w-full' onClick={()=>{setHistoryFilter(진행중)}}>
          <span
            className={`inline-block w-full p-4 ${historyFilter == 진행중 ? "text-white bg-primary" : "bg-white hover:text-primary" } rounded-l-lg dark:bg-gray-700 dark:text-white`}
          >
            진행중
          </span>
        </li>
        <li className='w-full' onClick={()=>{setHistoryFilter(완료)}}>
          <span
            className={`inline-block w-full p-4 ${historyFilter == 완료 ? "text-white bg-primary" : "bg-white hover:text-primary" } dark:bg-gray-700 dark:text-white`}
          >
            완료
          </span>
        </li>
        <li className='w-full' onClick={()=>{setHistoryFilter(취소)}}>
          <span
            className={`inline-block w-full p-4 ${historyFilter == 취소 ? "text-white bg-primary" : "bg-white hover:text-primary" } rounded-r-lg dark:bg-gray-700 dark:text-white`}
          >
            취소
          </span>
        </li>
      </ul>
      <ReservationInfoButton id={"test" as any} onClickHandler={() => {}} />
      <ReservationInfoButton id={"test" as any} onClickHandler={() => {}} />
      <ReservationInfoButton id={"test" as any} onClickHandler={() => {}} />
      <ReservationInfoButton id={"test" as any} onClickHandler={() => {}} />
      <ReservationInfoButton id={"test" as any} onClickHandler={() => {}} />
      <ReservationInfoButton id={"test" as any} onClickHandler={() => {}} />
      <ReservationInfoButton id={"test" as any} onClickHandler={() => {}} />
      <ReservationInfoButton id={"test" as any} onClickHandler={() => {}} />
      <ReservationInfoButton id={"test" as any} onClickHandler={() => {}} />
      <ReservationInfoButton id={"test" as any} onClickHandler={() => {}} />
      <ReservationInfoButton id={"test" as any} onClickHandler={() => {}} />
      <ReservationInfoButton id={"test" as any} onClickHandler={() => {}} />
    </>
  );
};

export default ReservationHistory;
