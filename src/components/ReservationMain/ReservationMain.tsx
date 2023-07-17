"use client";
import React from "react";
import * as SVG from "@/components/commons/svgs";
import { RoomWrapper, Rooms } from "./Room";
import { useSetRecoilState } from "recoil";
import { reservationInput } from "@/store/Reservation/atoms";
import { useRouter } from "next/navigation";
import { useModal } from "@/lib/modal";
import Reservation from "../Reservation/Reservation";
// import Link from "next/link";

const ReservationMain = () => {
  const setRoomState = useSetRecoilState(reservationInput("ROOM"));
  const router = useRouter();
  const { state, on, off, ModalBackDrop } = useModal();
  return (
    <div className='w-full bg-white relative rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 p-6 space-y-10 md:space-y-12 sm:p-8'>
      {/* <Link href='/reservation/new'>
        <div className='w-full h-[97.6px] rounded-lg border border-dashed border-gray-400 hover:bg-gray-100 p-2 flex items-center justify-center'>
          <SVG.Plus className='w-12 h-12' />
        </div>
      </Link> */}
      <div
        onClick={on}
        className='cursor-pointer w-full rounded-lg border border-gray-200 hover:bg-gray-100 p-4 flex items-center'
      >
        <SVG.QRScan className='w-16 h-16' />
        <div className='ml-8 overflow-hidden whitespace-nowrap'>
          <h2 className=''>실무에 바로 적용하는 효율적인 업무관리 전략</h2>
          <p>2023년 7월 17일 22:00 ~ 23:00</p>
        </div>
      </div>
      <ModalBackDrop state={state} off={off}>
        <Reservation />
      </ModalBackDrop>
      <div className='inline-flex items-center justify-center w-full'>
        <hr className='w-full h-[1px] my-8 bg-gray-200 border-0 rounded dark:bg-gray-700' />
        <div className='absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900'>
          <SVG.List className='w-8 h-8' />
        </div>
      </div>
      <div className='w-full grid gap-4 place-items-center'>
        {Rooms.map((ele) => {
          const { id, type, name } = ele;
          type;
          return (
            <RoomWrapper
              show={true}
              onClick={() => {
                setRoomState(id);
                router.push("/reservation/new");
              }}
              selected={false}
              key={id}
            >
              <div className='flex items-center justify-between'>
                <p>{name}</p>
                <div>
                  {(type & 4) > 0 && (
                    <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300'>
                      칠판
                    </span>
                  )}
                  {(type & 2) > 0 && (
                    <span className='bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300'>
                      데스크탑
                    </span>
                  )}
                  {(type & 1) > 0 && (
                    <span className='bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300'>
                      빔프로젝터
                    </span>
                  )}
                </div>
              </div>
            </RoomWrapper>
          );
        })}
      </div>
    </div>
  );
};

export default ReservationMain;
