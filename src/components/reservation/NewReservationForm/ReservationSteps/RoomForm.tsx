"use client";
import { useState } from "react";
import KeywordHighlight from "@/components/common/text/KeywordHighlight";
import * as SVG from "@/components/common/svg";
import { useRecoilState } from "recoil";
import { reservationInput } from "@/store/Reservation/atoms";
import {
  RoomType,
  RoomTypeWrapper,
  RoomWrapper,
  mockRooms,
} from "@/components/reservation/Room";

const RoomForm = () => {
  const [optionSeleted, setOptionSeleted] = useState<number>(0);
  const [roomInput, setRoomInput] = useRecoilState(reservationInput("ROOM"));
  return (
    <div className='flex flex-col space-y-8'>
      <KeywordHighlight
        before='예약할'
        keyword='강의실'
        after='을 정해주세요.'
      />
      <div className='flex flex-col space-y-4'>
        <div className='w-full gap-4 grid grid-cols-3 place-items-center'>
          {RoomType.map((ele) => {
            const { type, name, svg } = ele;
            return (
              <RoomTypeWrapper
                onClick={() => {
                  setOptionSeleted((prev) => prev ^ type);
                }}
                selected={(optionSeleted & type) > 0}
                key={name}
              >
                {svg}
                <p>{name}</p>
              </RoomTypeWrapper>
            );
          })}
        </div>
        <div className='inline-flex items-center justify-center w-full'>
          <hr className='w-full h-[1px] my-8 bg-gray-200 border-0 rounded dark:bg-gray-700' />
          <div className='absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900'>
            <SVG.List className='w-8 h-8' />
          </div>
        </div>
        <div className='w-full grid grid-cols-2 gap-4 place-items-center'>
          {mockRooms.map((ele) => {
            const { id, type, name } = ele;
            return (
              <RoomWrapper
                show={
                  optionSeleted == 0
                    ? true
                    : (optionSeleted & type) == optionSeleted
                }
                onClick={() => {
                  if (roomInput == id) setRoomInput("");
                  else setRoomInput(id);
                }}
                selected={roomInput === id}
                key={id}
              >
                <p>{name}</p>
              </RoomWrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoomForm;
