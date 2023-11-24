"use client";
import * as SVG from "@/components/common/svg";
import ReservationInfoButton from "../ReservationInfoButton";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { Suspense } from "react";
import {
  ReservationButtonSkeleton,
  ReservationDescriptionSkeleton,
} from "../ReservationButtonSkeleton";
import NewReservationButton from "../NewReservationButton";
import ReservationTicket from "@/components/reservation/ReservationTicket/ReservationTicket";
import { useModal } from "@/lib/modal";
import Spinner from "../../common/loader/Spinner";
import KeywordHighlight from "@/components/common/text/KeywordHighlight";
import {
  getMyReservationId,
  getReservationData,
} from "@/lib/api/reservation/method";
import { Reservation } from "@/lib/api/reservation/type";

const ReservationMain = () => {
  const { state, on, off, ModalBackDrop } = useModal({ scrollLock: false });
  const { data, isLoading } = useQuery(["myReservationCode"], {
    queryFn: getMyReservationId,
  });
  const { data: reservationData, isLoading: dataIsLoading } =
    useQuery<Reservation>(["reservation", data], {
      queryFn: async () => {
        return getReservationData(data as any);
      },
      enabled: !!data,
    });

  return (
    <div className='w-full bg-white relative rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 p-6 space-y-10 md:space-y-12 sm:p-8'>
      {isLoading ? (
        <ReservationButtonSkeleton />
      ) : data != "" ? (
        dataIsLoading ? (
          <ReservationButtonSkeleton />
        ) : (
          <ReservationInfoButton
            reservationData={reservationData}
            onClickHandler={on}
          />
        )
      ) : (
        <NewReservationButton />
      )}
      <div className='inline-flex items-center justify-center w-full'>
        <hr className='w-full h-[1px] my-8 bg-gray-200 border-0 rounded dark:bg-gray-700' />
        <div className='absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900'>
          <SVG.List className='w-8 h-8' />
        </div>
      </div>
      {isLoading ? (
        <ReservationDescriptionSkeleton />
      ) : data != "" ? (
        <div className='w-full flex flex-col justify-center items-center'>
          <KeywordHighlight
            before={"다른 사람이"}
            keyword={"QR코드"}
            after={"를 스캔하면"}
            rest={"예약에 참가할 수 있습니다."}
          ></KeywordHighlight>
          <Image
            priority={false}
            src={"/temp.png"}
            alt={"device mock"}
            width={200}
            height={300}
          />
        </div>
      ) : (
        <div className={"space-y-6"}>
          <KeywordHighlight
            keyword={"+버튼 또는 강의실"}
            after={"을 눌러"}
            rest={"예약을 생성하세요."}
          ></KeywordHighlight>
          {/* <Rooms /> */}
        </div>
      )}
      {data != "" ? (
        <ModalBackDrop state={state} off={off}>
          <Suspense fallback={<Spinner />}>
            <ReservationTicket isInModal={true} id={data as any} />
          </Suspense>
        </ModalBackDrop>
      ) : null}
    </div>
  );
};

export default ReservationMain;
