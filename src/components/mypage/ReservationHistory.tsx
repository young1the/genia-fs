"use client";
import { Suspense, useState } from "react";
import TitleText from "../common/text/TitleText";
import { useQuery } from "@tanstack/react-query";
import { getAllReservations } from "@/lib/api/reservation/method";
import { Reservation } from "@/lib/api/reservation/type";
import ReservationInfoButton from "../reservation/ReservationInfoButton";
import { useModal } from "@/lib/modal";
import Spinner from "../common/loader/Spinner";
import ReservationTicket from "../reservation/ReservationTicket/ReservationTicket";

const 진행중 = 1;
const 완료 = 0;
const 취소 = 2;

const ReservationHistory = () => {
  const [historyFilter, setHistoryFilter] = useState(진행중);
  const [selected, setSelected] = useState<string>();
  const { state, on, off, ModalBackDrop } = useModal();
  const { data } = useQuery<Reservation[]>(["allReservations"], {
    queryFn: getAllReservations,
  });
  return (
    <>
      <TitleText title={"나의 예약내역 확인하기"} />
      <ul className='flex text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow dark:divide-gray-700 dark:text-gray-400'>
        <li
          className='w-full'
          onClick={() => {
            setHistoryFilter(진행중);
          }}
        >
          <span
            className={`inline-block w-full p-4 ${
              historyFilter == 진행중
                ? "text-white bg-primary"
                : "bg-white hover:text-primary"
            } rounded-l-lg dark:bg-gray-700 dark:text-white`}
          >
            진행중
          </span>
        </li>
        <li
          className='w-full'
          onClick={() => {
            setHistoryFilter(완료);
          }}
        >
          <span
            className={`inline-block w-full p-4 ${
              historyFilter == 완료
                ? "text-white bg-primary"
                : "bg-white hover:text-primary"
            } dark:bg-gray-700 dark:text-white`}
          >
            완료
          </span>
        </li>
        <li
          className='w-full'
          onClick={() => {
            setHistoryFilter(취소);
          }}
        >
          <span
            className={`inline-block w-full p-4 ${
              historyFilter == 취소
                ? "text-white bg-primary"
                : "bg-white hover:text-primary"
            } rounded-r-lg dark:bg-gray-700 dark:text-white`}
          >
            취소
          </span>
        </li>
      </ul>
      {data
        ? data
            .filter((ele) => ele.reservationState == historyFilter)
            .map((ele) => {
              return (<ReservationInfoButton
                key={ele.reservationCode}
                reservationData={ele}
                onClickHandler={() => {
                  setSelected(ele.reservationCode);
                  on();
                }}
              />)
              })
        : null}
      {state ? (
        <ModalBackDrop state={state} off={off}>
          <Suspense fallback={<Spinner />}>
            <ReservationTicket isInModal={true} id={selected as any} />
          </Suspense>
        </ModalBackDrop>
      ) : null}
    </>
  );
};

export default ReservationHistory;
